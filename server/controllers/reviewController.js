const Review = require('../models/Review');
const Product = require('../models/Product');

// Create Review
exports. createReview = async (req, res) => {
  try {
    const { productId, rating, title, comment } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    const review = await Review.create({
      productId,
      userId: req.user.id,
      rating,
      title,
      comment,
    });

    // Update product rating
    const reviews = await Review.find({ productId });
    const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

    await Product.findByIdAndUpdate(productId, {
      rating: avgRating,
      reviewCount: reviews.length,
    });

    res.status(201).json({
      success: true,
      message: 'Review created successfully',
      data: review,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Product Reviews
exports.getProductReviews = async (req, res) => {
  try {
    const reviews = await Review. find({ productId: req.params.productId }).populate(
      'userId',
      'firstName lastName avatar'
    );

    res.status(200).json({
      success: true,
      count:  reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Review
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found',
      });
    }

    // Update product rating
    const reviews = await Review.find({ productId: review.productId });
    if (reviews.length > 0) {
      const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
      await Product.findByIdAndUpdate(review.productId, {
        rating: avgRating,
        reviewCount: reviews.length,
      });
    } else {
      await Product.findByIdAndUpdate(review.productId, {
        rating: 0,
        reviewCount: 0,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Review deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};