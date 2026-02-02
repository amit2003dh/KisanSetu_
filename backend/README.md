# 🚀 KisanSetu Backend API - Agricultural Marketplace Server

## 📋 **Project Overview**

The KisanSetu Backend API is a comprehensive Node.js server powering the agricultural marketplace platform. It provides RESTful APIs, real-time communication, AI integration, payment processing, and complete business logic for the KisanSetu ecosystem.

### **🎯 Core Features**
- **🔐 Authentication & Authorization**: JWT-based secure authentication
- **📊 Multi-Role System**: Farmers, Sellers, Buyers, Delivery Partners, Admins
- **🤖 AI Integration**: Google Gemini for crop disease analysis
- **💳 Payment Processing**: Razorpay integration for secure payments
- **🚚 Real-time Tracking**: Socket.io for live delivery tracking
- **📦 Order Management**: Complete order lifecycle management
- **🌾 Crop & Product Management**: Agricultural marketplace functionality
- **📈 Analytics & Reporting**: Comprehensive business intelligence

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### **Installation**
```bash
# Navigate to backend directory
cd KisanSetu_/backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

### **Environment Variables**
Create a `.env` file in the backend directory:

```env
# Database Configuration
MONGODB_URI=mongodb://127.0.0.1:27017/kisansetu

# JWT Configuration
JWT_SECRET=kisansetu_super_secret_key_change_in_production

# Gemini AI API
GEMINI_API_KEY=your_gemini_api_key_here

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here

# Server Configuration
PORT=5000
NODE_ENV=development

# File Upload Configuration
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

---

## 🏃‍♂️ **Available Scripts**

### **Development**
```bash
npm run dev
```
Starts the server with nodemon for auto-reload on changes

### **Production**
```bash
npm start
```
Starts the production server

### **Crop Analysis Server**
```bash
npm run crop-analysis
```
Starts the dedicated crop analysis server

### **Crop Analysis Development**
```bash
npm run crop-analysis-dev
```
Starts crop analysis server with nodemon

---

## 🏗️ **Architecture Overview**

### **Server Structure**
```
backend/
├── server.js                 # Main server entry point
├── crop-analysis-server.js    # Dedicated AI analysis server
├── config/                   # Database and server configuration
├── models/                   # MongoDB data models
├── routes/                   # API route handlers
├── middleware/               # Custom middleware
├── ai/                       # AI integration logic
├── uploads/                  # File upload storage
└── public/                   # Static assets
```

### **Technology Stack**
- **Node.js 16+**: JavaScript runtime
- **Express.js 5.2.1**: Web framework
- **MongoDB 9.1.1**: NoSQL database with Mongoose ODM
- **Socket.io 4.8.3**: Real-time communication
- **JWT**: JSON Web Token authentication
- **Multer 2.0.2**: File upload handling
- **Razorpay 2.9.6**: Payment processing
- **Google Generative AI 0.24.1**: AI integration

---

## 🔌 **API Endpoints**

### **Authentication**
```javascript
POST /api/users/signup        // User registration
POST /api/users/login         // User login
GET  /api/users/profile       // Get user profile
PUT  /api/users/profile       // Update profile
POST /api/auth/admin/login    // Admin login
POST /api/auth/admin/signup   // Admin signup
```

### **User Management**
```javascript
GET    /api/users              // Get all users (admin)
GET    /api/users/:id          // Get user by ID
PUT    /api/users/:id          // Update user
DELETE /api/users/:id          // Delete user
PUT    /api/users/:id/status   // Update user status
```

### **Crops Management**
```javascript
GET    /api/crops              // Get all crops
POST   /api/crops              // Create new crop
GET    /api/crops/:id          // Get crop by ID
PUT    /api/crops/:id          // Update crop
DELETE /api/crops/:id          // Delete crop
GET    /api/crops/my-crops     // Get user's crops
PUT    /api/crops/:id/status   // Update crop status
```

### **Products Management**
```javascript
GET    /api/products           // Get all products
POST   /api/products           // Create new product
GET    /api/products/:id       // Get product by ID
PUT    /api/products/:id       // Update product
DELETE /api/products/:id       // Delete product
GET    /api/products/my-products // Get user's products
PUT    /api/products/:id/status // Update product status
```

### **Orders Management**
```javascript
POST   /api/orders/create     // Create new order
GET    /api/orders            // Get all orders
GET    /api/orders/:id        // Get order by ID
PUT    /api/orders/:id        // Update order
DELETE /api/orders/:id        // Delete order
GET    /api/orders/seller/:id // Get seller's orders
GET    /api/orders/buyer/:id  // Get buyer's orders
PUT    /api/orders/:id/status // Update order status
```

### **Delivery Management**
```javascript
GET    /api/delivery           // Get all deliveries
POST   /api/delivery/assign   // Assign delivery partner
PUT    /api/delivery/:id       // Update delivery
GET    /api/delivery/:id       // Get delivery by ID
PUT    /api/delivery/:id/location // Update location
```

### **Payment Processing**
```javascript
POST   /api/payment/create-order // Create Razorpay order
POST   /api/payment/verify      // Verify payment
GET    /api/payment/orders/:id  // Get payment details
```

### **AI Integration**
```javascript
POST   /api/gemini/analyze-crop // Analyze crop image
POST   /api/ai/chat            // AI chat assistant
GET    /api/ai/recommendations  // Get AI recommendations
```

### **Admin Management**
```javascript
GET    /api/admin/dashboard-stats // Dashboard statistics
GET    /api/admin/users          // Get all users
PUT    /api/admin/users/:id/action // User actions
GET    /api/admin/productions    // Production requests
PUT    /api/admin/productions/:id/verify // Verify production
GET    /api/admin/delivery-partners // Partner applications
PUT    /api/admin/delivery-partners/:id/verify // Verify partner
```

---

## 🗄️ **Database Models**

### **User Model**
```javascript
{
  name: String,
  email: String,
  password: String, // Hashed
  role: String, // farmer, seller, buyer, delivery_partner, admin
  phone: String,
  location: String,
  isVerified: Boolean,
  profileImage: String,
  createdAt: Date,
  updatedAt: Date
}
```

### **Crop Model**
```javascript
{
  name: String,
  description: String,
  category: String,
  price: Number,
  quantity: Number,
  unit: String,
  images: [String],
  sellerId: ObjectId,
  isApproved: Boolean,
  status: String, // Available, Reserved, Sold
  location: String,
  harvestDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### **Product Model**
```javascript
{
  name: String,
  description: String,
  category: String,
  price: Number,
  quantity: Number,
  unit: String,
  images: [String],
  sellerId: ObjectId,
  status: String, // Available, Out of Stock
  location: String,
  createdAt: Date,
  updatedAt: Date
}
```

### **Order Model**
```javascript
{
  buyerId: ObjectId,
  sellerId: ObjectId,
  itemId: ObjectId,
  itemType: String, // crop, product
  quantity: Number,
  price: Number,
  total: Number,
  status: String, // Pending, Confirmed, Delivered, Cancelled
  deliveryAddress: Object,
  paymentMethod: String,
  paymentStatus: String,
  deliveryPartnerId: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

### **Delivery Partner Model**
```javascript
{
  name: String,
  email: String,
  phone: String,
  vehicleType: String,
  vehicleNumber: String,
  licenseNumber: String,
  aadharNumber: String,
  serviceArea: String,
  isVerified: Boolean,
  currentLocation: Object,
  status: String, // Active, Inactive, Busy
  earnings: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 **Authentication & Security**

### **JWT Authentication**
```javascript
// Generate JWT Token
const token = jwt.sign(
  { userId: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);

// Verify JWT Token
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

### **Password Security**
```javascript
// Hash Password
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);

// Compare Password
const isValid = await bcrypt.compare(password, hashedPassword);
```

### **Middleware Security**
- **Authentication Middleware**: Protects routes with JWT verification
- **Role-Based Access**: Different permissions for different roles
- **Rate Limiting**: Prevents API abuse
- **Input Validation**: Sanitizes and validates all inputs
- **CORS Configuration**: Secure cross-origin requests

---

## 🤖 **AI Integration**

### **Google Gemini API**
```javascript
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Analyze Crop Image
const analyzeCrop = async (imageBuffer) => {
  const result = await model.generateContent([
    "Analyze this crop image for diseases...",
    { inlineData: { data: imageBuffer, mimeType: 'image/jpeg' } }
  ]);
  return result.response.text();
};
```

### **AI Features**
- **Crop Disease Detection**: AI-powered disease identification
- **Treatment Recommendations**: AI-generated treatment suggestions
- **Voice Assistant**: Natural language processing
- **Smart Recommendations**: Personalized farming advice

---

## 💳 **Payment Integration**

### **Razorpay Integration**
```javascript
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create Order
const createOrder = async (amount, currency = 'INR') => {
  const options = {
    amount: amount * 100, // Convert to paise
    currency,
    receipt: `receipt_${Date.now()}`
  };
  return await razorpay.orders.create(options);
};

// Verify Payment
const verifyPayment = async (razorpay_order_id, razorpay_payment_id, razorpay_signature) => {
  const crypto = require('crypto');
  const generated_signature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');
  
  return generated_signature === razorpay_signature;
};
```

---

## 📡 **Real-time Communication**

### **Socket.io Integration**
```javascript
const io = new Server(server, {
  cors: { origin: "*" }
});

// User Authentication
io.on("connection", (socket) => {
  socket.on("authenticate", (userData) => {
    socket.userId = userData.userId;
    socket.userRole = userData.userRole;
    socket.join(`user_${userData.userId}`);
  });
});

// Real-time Notifications
io.to(`user_${sellerId}`).emit("newOrder", orderData);
io.to(`user_${buyerId}`).emit("orderStatusUpdate", updateData);
```

### **Real-time Features**
- **Order Notifications**: Real-time order updates
- **Delivery Tracking**: Live location sharing
- **Chat System**: Real-time messaging
- **Status Updates**: Live status changes

---

## 📁 **File Upload Management**

### **Multer Configuration**
```javascript
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    cb(null, allowedTypes.test(file.mimetype));
  }
});
```

### **Upload Features**
- **Image Upload**: Profile pictures, crop/product images
- **Document Upload**: Verification documents
- **File Validation**: Type and size validation
- **Secure Storage**: Organized file storage system

---

## 📊 **Analytics & Reporting**

### **Dashboard Statistics**
```javascript
const getDashboardStats = async () => {
  const stats = {
    totalUsers: await User.countDocuments(),
    totalCrops: await Crop.countDocuments(),
    totalProducts: await Product.countDocuments(),
    totalOrders: await Order.countDocuments(),
    totalRevenue: await Order.aggregate([
      { $match: { status: 'Delivered' } },
      { $group: { _id: null, total: { $sum: '$total' } } }
    ]),
    recentOrders: await Order.find().sort({ createdAt: -1 }).limit(10)
  };
  return stats;
};
```

### **Analytics Features**
- **User Analytics**: User registration and activity metrics
- **Sales Analytics**: Revenue and order statistics
- **Performance Metrics**: Delivery and service performance
- **Custom Reports**: Generate detailed reports

---

## 🚀 **Deployment**

### **Environment Setup**
```bash
# Production Environment Variables
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/kisansetu
JWT_SECRET=super_secure_production_secret
GEMINI_API_KEY=production_gemini_key
RAZORPAY_KEY_ID=production_razorpay_key
RAZORPAY_KEY_SECRET=production_razorpay_secret
```

### **Deployment Options**

#### **Heroku**
```bash
# Install Heroku CLI
heroku create kisansetu-backend

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret

# Deploy
git push heroku main
```

#### **Railway**
```bash
# Install Railway CLI
railway login

# Create project
railway new

# Set environment variables
railway variables set NODE_ENV=production
railway variables set MONGODB_URI=your_mongodb_uri

# Deploy
railway up
```

#### **Docker**
```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

---

## 🧪 **Testing**

### **API Testing with Postman**
```bash
# Import Postman collection
# Test all endpoints with proper authentication
# Verify responses and error handling
```

### **Unit Testing**
```bash
# Install testing dependencies
npm install --save-dev jest supertest

# Run tests
npm test
```

---

## 🐛 **Troubleshooting**

### **Common Issues**

#### **Database Connection**
```bash
# Check MongoDB connection
mongosh --eval "db.adminCommand('ismaster')"

# Verify connection string
echo $MONGODB_URI
```

#### **Port Conflicts**
```bash
# Check running processes
netstat -tulpn | grep :5000

# Kill process
kill -9 <PID>
```

#### **Environment Variables**
```bash
# Check environment variables
printenv | grep -E "(MONGODB|JWT|GEMINI|RAZORPAY)"

# Verify .env file
cat .env
```

### **Debug Mode**
```bash
# Enable debug logging
DEBUG=* npm run dev

# Check logs
tail -f logs/error.log
```

---

## 📈 **Performance Optimization**

### **Database Optimization**
- **Indexing**: Add indexes for frequently queried fields
- **Connection Pooling**: Optimize database connections
- **Query Optimization**: Use efficient MongoDB queries
- **Caching**: Implement Redis caching

### **API Optimization**
- **Compression**: Enable gzip compression
- **Rate Limiting**: Prevent API abuse
- **Pagination**: Implement pagination for large datasets
- **Caching**: Cache frequently accessed data

---

## 🔒 **Security Best Practices**

### **Authentication Security**
- **Strong Passwords**: Enforce strong password policies
- **JWT Security**: Use secure JWT secrets
- **Session Management**: Implement proper session handling
- **Rate Limiting**: Prevent brute force attacks

### **Data Security**
- **Input Validation**: Validate all user inputs
- **SQL Injection Prevention**: Use parameterized queries
- **XSS Protection**: Sanitize user inputs
- **HTTPS**: Use SSL/TLS in production

### **API Security**
- **CORS Configuration**: Proper CORS setup
- **Helmet.js**: Security headers
- **Rate Limiting**: API rate limiting
- **Logging**: Comprehensive logging system

---

## 📞 **Support & Maintenance**

### **Monitoring**
- **Health Checks**: Implement health check endpoints
- **Error Tracking**: Use error tracking services
- **Performance Monitoring**: Monitor API performance
- **Logging**: Comprehensive logging system

### **Backup Strategy**
- **Database Backups**: Regular database backups
- **Code Backups**: Version control with Git
- **Configuration Backups**: Backup configuration files
- **Disaster Recovery**: Recovery procedures

---

## 🚀 **Future Enhancements**

### **Planned Features**
- **Microservices Architecture**: Split into microservices
- **GraphQL API**: Implement GraphQL for efficient data fetching
- **WebSocket Enhancements**: Advanced real-time features
- **AI Improvements**: Enhanced AI capabilities
- **Mobile API**: Dedicated mobile API endpoints

### **Technical Improvements**
- **Database Optimization**: Advanced database optimization
- **Caching Layer**: Redis implementation
- **Load Balancing**: Implement load balancing
- **CDN Integration**: Content delivery network
- **API Versioning**: Implement API versioning

---

## 📄 **License**

This project is proprietary software of KisanSetu. All rights reserved.

---

## 🌟 **Acknowledgments**

- **Express.js**: Web framework
- **MongoDB**: Database
- **Socket.io**: Real-time communication
- **Razorpay**: Payment processing
- **Google**: AI integration
- **Open Source Community**: Various libraries and tools

---

**🚀 Powerful Backend API for KisanSetu Agricultural Marketplace! 🌾**

*Robust, Scalable, and Secure Backend Infrastructure*

---

## 📊 **Quick Reference**

### **Default Configuration**
```bash
Port: 5000
Database: MongoDB
Authentication: JWT
File Upload: Multer
Real-time: Socket.io
Payment: Razorpay
AI: Google Gemini
```

### **Important Endpoints**
```bash
Health Check: GET /api/health
User Login: POST /api/users/login
Create Order: POST /api/orders/create
AI Analysis: POST /api/gemini/analyze-crop
Admin Stats: GET /api/admin/dashboard-stats
```

### **Environment Variables**
```bash
MONGODB_URI=mongodb://127.0.0.1:27017/kisansetu
JWT_SECRET=kisansetu_super_secret_key
GEMINI_API_KEY=your_gemini_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PORT=5000
NODE_ENV=development
```

© 2024 KisanSetu Backend API. All rights reserved.
