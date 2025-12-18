# 🛍️ E-Commerce Clothing Store

A full-stack MERN (MongoDB, Express, React, Node.js) application for an online clothing store with user authentication, product management, shopping cart, orders, and reviews.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### User Features
- ✅ User Registration & Login
- ✅ Profile Management
- ✅ Product Browsing & Search
- ✅ Product Reviews & Ratings
- ✅ Shopping Cart Management
- ✅ Order Placement & Tracking
- ✅ Order History

### Admin Features
- ✅ Product Management (Create, Read, Update, Delete)
- ✅ Order Status Management
- ✅ User Management
- ✅ Review Moderation

### General Features
- ✅ Responsive Design (Mobile & Desktop)
- ✅ JWT Authentication
- ✅ Password Hashing with Bcrypt
- ✅ Error Handling
- ✅ CORS Support

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **Redux Toolkit** - State Management
- **React Router DOM** - Routing
- **Axios** - HTTP Client
- **Tailwind CSS** - Styling
- **React Icons** - Icon Library

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - NoSQL Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcryptjs** - Password Hashing
- **CORS** - Cross-Origin Resource Sharing
- **Dotenv** - Environment Variables
- **Nodemon** - Development Server

---

## 📁 Project Structure

```
E-Commerce Clothing Store/
├── client/                          # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ... 
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Orders.jsx
│   │   │   └── ...
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── authSlice.js
│   │   │   ├── productSlice.js
│   │   │   ├── cartSlice.js
│   │   │   └── ...
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .env
│
├── server/                          # Express Backend
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Review.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── reviewController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes. js
│   │   ├── orderRoutes.js
│   │   └── reviewRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 📦 Prerequisites

Make sure you have the following installed: 

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB Atlas** Account - [Sign Up](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-clothing-store.git
cd "E-Commerce Clothing Store"
```

### Step 2: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 3: Install Frontend Dependencies

```bash
cd ../client
npm install
```

### Step 4: Setup MongoDB

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user with username & password
4. Get your connection string
5. Whitelist your IP address

---

## 🔐 Environment Variables

### Backend - `server/.env`

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/ecommerce
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
BCRYPT_SALT=10
NODE_ENV=development
```

### Frontend - `client/.env` (Optional)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## ▶️ Running the Application

### Terminal 1 - Start Backend Server

```bash
cd server
npm run dev
```

Expected output:
```
✅ MongoDB Connected Successfully
✅ Server running on port 5000
```

### Terminal 2 - Start Frontend Development Server

```bash
cd client
npm start
```

Expected output:
```
Compiled successfully!
Local:  http://localhost:3000
```

### Access the Application

Open your browser and go to:  **http://localhost:3000**

---

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - Login user
GET    /api/auth/me            - Get current user (Protected)
PUT    /api/auth/profile       - Update profile (Protected)
```

### Products
```
GET    /api/products           - Get all products
GET    /api/products/: id       - Get single product
POST   /api/products           - Create product (Admin)
PUT    /api/products/: id       - Update product (Admin)
DELETE /api/products/:id       - Delete product (Admin)
```

### Orders
```
POST   /api/orders             - Create order (Protected)
GET    /api/orders             - Get user orders (Protected)
GET    /api/orders/:id         - Get single order (Protected)
PUT    /api/orders/:id/status  - Update order status (Admin)
GET    /api/orders/admin/all   - Get all orders (Admin)
```

### Reviews
```
POST   /api/reviews            - Create review (Protected)
GET    /api/reviews/product/:productId - Get product reviews
DELETE /api/reviews/:id        - Delete review (Protected)
```

---

## 💻 Usage

### User Registration & Login

1. Click **"Register"** on the homepage
2. Fill in your details (First Name, Last Name, Email, Password)
3. Click **"Register"**
4. You'll be redirected to the login page
5. Enter your email and password
6. Click **"Login"**

### Browsing Products

1. Click **"Products"** in the navigation
2. View all available clothing items
3. Click on a product to see details
4. Select size, color, and quantity
5. Click **"Add to Cart"**

### Checkout & Ordering

1. Click the shopping cart icon
2. Review your items
3. Click **"Checkout"**
4. Enter shipping address
5. Click **"Place Order"**

### View Orders

1. Click on your profile icon
2. Go to **"My Orders"**
3. View order status and details

### Leave Reviews

1. Go to product detail page
2. Scroll to **"Write a Review"** section
3. Rate the product (1-5 stars)
4. Add title and comment
5. Click **"Submit Review"**

---

## 🧪 Testing

### Test User Credentials

```
Email: test@example.com
Password: Test123456
```

### Test Products

Visit the Products page to browse test products.

---

## 📝 Database Models

### User
```javascript
{
  firstName: String,
  lastName: String,
  email: String (unique),
  password: String (hashed),
  phoneNumber: String,
  address:  String,
  role: String (user/admin),
  createdAt: Date
}
```

### Product
```javascript
{
  name: String,
  description: String,
  price: Number,
  originalPrice: Number,
  category: String (men/women/kids),
  sizes: [String],
  colors:  [String],
  image: String,
  images: [String],
  stock:  Number,
  rating: Number,
  reviewCount: Number,
  createdAt: Date
}
```

### Order
```javascript
{
  orderId: String (unique),
  userId: ObjectId (ref:  User),
  items: [{
    productId: ObjectId,
    name: String,
    price: Number,
    quantity: Number,
    size: String,
    color: String
  }],
  totalAmount:  Number,
  shippingAddress: {
    street: String,
    city: String,
    state:  String,
    zipCode: String,
    country: String
  },
  paymentStatus: String,
  orderStatus: String,
  createdAt: Date
}
```

### Review
```javascript
{
  productId: ObjectId (ref: Product),
  userId: ObjectId (ref: User),
  rating: Number (1-5),
  title: String,
  comment: String,
  createdAt: Date
}
```

---

## 🐛 Troubleshooting

### MongoDB Connection Error
- ✅ Check MONGODB_URI in `.env`
- ✅ Verify username and password
- ✅ Whitelist your IP in MongoDB Atlas
- ✅ Check internet connection

### Port Already in Use
```bash
# Change PORT in . env to 5001 or kill process using port 5000
# On Windows: 
netstat -ano | findstr : 5000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -i :5000
kill -9 <PID>
```

### Modules Not Found
```bash
# Reinstall dependencies
cd server
rm -rf node_modules
npm install

cd ../client
rm -rf node_modules
npm install
```

### CORS Errors
- ✅ Make sure backend is running on port 5000
- ✅ Check CORS is enabled in `server/server.js`

---

## 📚 Learning Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Sherio99** - [GitHub Profile](https://github.com/Sherio99)

---

## 📞 Support

For issues and questions, please open an [GitHub Issue](https://github.com/Sherio99/ecommerce-clothing-store/issues)

---

## 🎉 Acknowledgments

- MongoDB for the database
- Express.js for the backend framework
- React for the frontend library
- Redux Toolkit for state management
- Tailwind CSS for styling

---

**Happy Coding!  🚀**