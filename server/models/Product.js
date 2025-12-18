const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide description'],
  },
  price: {
    type: Number,
    required:  [true, 'Please provide price'],
    min: 0,
  },
  originalPrice: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: [true, 'Please provide category'],
    enum: ['men', 'women', 'kids'],
  },
  sizes: {
    type: [String],
    default: ['S', 'M', 'L', 'XL'],
  },
  colors: {
    type: [String],
    default: ['Black', 'White', 'Blue', 'Red'],
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300',
  },
  images: {
    type: [String],
    default: ['https://via.placeholder.com/300'],
  },
  stock: {
    type: Number,
    required: [true, 'Please provide stock'],
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  reviewCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type:  Date,
    default: Date. now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);