# 🌾 KisanSetu - Agricultural Marketplace Platform

## 📋 **Project Overview**

KisanSetu is a comprehensive agricultural marketplace platform that connects farmers, sellers, and buyers through a modern web application. It features AI-powered crop analysis, real-time delivery tracking, secure payment processing, and complete administrative control.

### **🎯 Key Features**
- **🌾 Multi-Role System**: Farmers, Sellers, Buyers, Delivery Partners, Admins
- **🤖 AI-Powered Analysis**: Google Gemini crop disease detection
- **📦 Marketplace**: Buy/sell crops and agricultural products
- **🚚 Real-time Tracking**: Live delivery tracking with Socket.io
- **💳 Secure Payments**: Razorpay payment integration
- **📊 Analytics Dashboard**: Performance insights and reporting
- **📱 Mobile Responsive**: Optimized for all device types
- **🛡️ Enterprise Security**: Advanced security features

---

## 🏗️ **Project Architecture**

### **System Components**
```
KisanSetu/
├── frontend/          # React.js user interface
├── admin/             # React.js admin dashboard
├── backend/           # Node.js API server
└── README.md          # This file
```

### **Technology Stack**

#### **Frontend & Admin**
- **React 19.2.3**: Modern React with hooks
- **React Router 7.11.0**: Client-side routing
- **Axios 1.13.2**: HTTP client for API calls
- **Socket.io Client 4.8.3**: Real-time communication
- **CSS3**: Custom styling with responsive design

#### **Backend**
- **Node.js 16+**: JavaScript runtime
- **Express.js 5.2.1**: Web framework
- **MongoDB 9.1.1**: NoSQL database with Mongoose ODM
- **Socket.io 4.8.3**: Real-time communication
- **JWT**: JSON Web Token authentication
- **Multer 2.0.2**: File upload handling

#### **Third-party Integrations**
- **Google Gemini AI**: Crop disease analysis
- **Razorpay**: Payment processing
- **Google Maps**: Location services
- **Render/Heroku**: Cloud deployment

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/amit2003dh/KisanSetu_.git
   cd KisanSetu_
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Configure .env file (see Environment Variables section)
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Configure .env file
   npm start
   ```

4. **Admin Dashboard Setup**
   ```bash
   cd ../admin
   npm install
   cp .env.example .env
   # Configure .env file
   npm start
   ```

---

## 🔧 **Environment Variables**

### **Backend (.env)**
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
```

### **Frontend (.env)**
```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000

# Payment Integration
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id_here

# Maps & Location Services
REACT_APP_GOOGLE_MAPS_KEY=your_google_maps_api_key_here

# AI Integration
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
```

### **Admin (.env)**
```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api

# Admin Configuration
REACT_APP_ADMIN_URL=http://localhost:3001

# Security
REACT_APP_JWT_SECRET=your_jwt_secret_here

# Debug Mode (Optional)
REACT_APP_DEBUG=true
```

---

## 🌐 **Live Deployments**

### **Frontend Application**
- **Main App**: https://kisan-set-frontend-71z4.vercel.app
- **Preview**: https://kisan-set-frontend-71z4-git-main-amit2003dhs-projects.vercel.app

### **Admin Dashboard**
- **Main Admin**: https://kisan-setu-admin.vercel.app
- **Preview**: https://kisan-setu-admin-git-main-amit2003dhs-projects.vercel.app

### **Backend API**
- **Production**: https://kisan-setu-backend-wxms.onrender.com

---

## 👥 **User Roles & Features**

### **🌾 Farmers**
- **Dashboard**: `/farmer`
- **Features**: 
  - Crop listing and management
  - AI-powered crop disease analysis
  - Sales tracking and analytics
  - Order fulfillment management
  - Production verification

### **🏪 Sellers**
- **Dashboard**: `/seller`
- **Features**:
  - Product catalog management
  - Inventory tracking
  - Order processing
  - Revenue analytics
  - Customer management

### **🛒 Buyers**
- **Dashboard**: `/buyer`
- **Features**:
  - Browse crops and products
  - Shopping cart management
  - Order placement and tracking
  - Payment processing
  - Reviews and ratings

### **🚚 Delivery Partners**
- **Dashboard**: `/delivery-partner`
- **Features**:
  - Order assignment and tracking
  - Real-time location sharing
  - Delivery status updates
  - Earnings tracking
  - Performance analytics

### **🛠️ Administrators**
- **Dashboard**: `/admin`
- **Features**:
  - Complete platform oversight
  - User management and verification
  - Production verification
  - Order monitoring
  - Analytics and reporting
  - System configuration

---

## 🔌 **API Endpoints**

### **Authentication**
- `POST /api/users/signup` - User registration
- `POST /api/users/login` - User login
- `POST /api/auth/admin/login` - Admin login
- `GET /api/users/profile` - Get user profile

### **Crops & Products**
- `GET /api/crops` - Get all crops
- `POST /api/crops` - Create new crop
- `GET /api/products` - Get all products
- `POST /api/products` - Create new product

### **Orders**
- `POST /api/orders/create` - Create new order
- `GET /api/orders` - Get all orders
- `PUT /api/orders/:id/status` - Update order status

### **AI Integration**
- `POST /api/gemini/analyze-crop` - Analyze crop image
- `POST /api/ai/chat` - AI chat assistant

### **Payment**
- `POST /api/payment/create-order` - Create Razorpay order
- `POST /api/payment/verify` - Verify payment

---

## 🤖 **AI Integration Features**

### **Crop Disease Detection**
- **Upload Images**: Drag & drop or file upload
- **AI Analysis**: Google Gemini 1.5 Flash model
- **Results**: Disease identification, treatment recommendations
- **History**: Analysis history tracking

### **Voice Assistant**
- **Natural Language**: Voice commands for farmers
- **Smart Queries**: Ask about crops, prices, weather
- **Accessibility**: Voice-guided navigation

---

## 💳 **Payment Integration**

### **Razorpay Features**
- **Secure Payments**: Industry-standard security
- **Multiple Methods**: Cards, UPI, Net Banking
- **Test Mode**: Development testing environment
- **Webhooks**: Real-time payment notifications

---

## 📱 **Responsive Design**

### **Device Support**
- **Mobile**: 320px - 767px (iPhone SE, Android phones)
- **Tablet**: 768px - 1023px (iPad, Android tablets)
- **Desktop**: 1024px+ (Laptops, desktops)

### **Mobile Optimizations**
- **Touch Targets**: Minimum 44px tap targets
- **iOS Optimization**: Prevents zoom on input focus
- **Gesture Support**: Swipe, pinch-to-zoom
- **Performance**: Optimized for mobile networks

---

## 📊 **Analytics & Reporting**

### **Platform Metrics**
- **User Statistics**: Total users by role and status
- **Order Analytics**: Order volume, revenue, trends
- **Performance Metrics**: Delivery performance and efficiency
- **Financial Reports**: Revenue, profit, and cost analysis

### **Real-time Monitoring**
- **Live Dashboard**: Real-time data updates
- **WebSocket Integration**: Live notifications
- **Alert System**: Important notifications and alerts

---

## 🚀 **Deployment**

### **Development Setup**
```bash
# Backend (Port 5000)
cd backend && npm run dev

# Frontend (Port 3000)
cd frontend && npm start

# Admin (Port 3001)
cd admin && npm start
```

### **Production Deployment**

#### **Vercel (Frontend & Admin)**
1. Connect GitHub repository to Vercel
2. Set environment variables
3. Automatic deployment on push

#### **Render/Heroku (Backend)**
1. Connect repository
2. Configure build settings
3. Set environment variables
4. Deploy

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

### **Frontend Optimization**
- **Code Splitting**: Lazy loading of components
- **Bundle Optimization**: Minimized bundle sizes
- **Image Optimization**: WebP format support
- **Caching**: Browser and server caching

### **Backend Optimization**
- **Database Indexing**: Optimized queries
- **Connection Pooling**: Efficient database connections
- **API Rate Limiting**: Prevent abuse
- **Compression**: Gzip compression

---

## 🔒 **Security Features**

### **Authentication Security**
- **JWT Tokens**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **Session Management**: Automatic token refresh
- **Rate Limiting**: Prevent brute force attacks

### **Data Protection**
- **Input Validation**: Client and server validation
- **XSS Protection**: Sanitized user inputs
- **CSRF Protection**: Cross-site request forgery prevention
- **HTTPS**: SSL/TLS encryption in production

---

## 📞 **Support & Contributing**

### **Getting Help**
- **Documentation**: Check individual README files
- **Issues**: Report bugs via GitHub issues
- **Email**: support@kisansetu.com
- **Community**: Join our Discord server

### **Contributing**
1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request
5. Follow code of conduct

---

## 📄 **License**

This project is proprietary software of KisanSetu. All rights reserved.

---

## 🌟 **Acknowledgments**

- **Google**: Gemini AI integration
- **Razorpay**: Payment processing
- **React**: Frontend framework
- **MongoDB**: Database solution
- **Socket.io**: Real-time communication
- **Open Source Community**: Various libraries and tools

---

## 📊 **Quick Reference**

### **Default Ports**
```bash
Frontend: http://localhost:3000
Admin: http://localhost:3001
Backend: http://localhost:5000
```

### **Important URLs**
```bash
Frontend: https://kisan-set-frontend-71z4.vercel.app
Admin: https://kisan-setu-admin.vercel.app
Backend: https://kisan-setu-backend-wxms.onrender.com
Repository: https://github.com/amit2003dh/KisanSetu_
```

### **Default Credentials**
```bash
Admin Email: admin@kisansetu.com
Admin Password: admin123
Admin Secret: KISANSETU_ADMIN_2024_SECRET
```

---

**🌾 Welcome to KisanSetu - Connecting Farmers to Markets! 🚀**

*A Complete Agricultural Marketplace Platform Powered by Technology*

---

## 📚 **Documentation**

- **[Frontend Documentation](./frontend/README.md)** - User interface details
- **[Admin Documentation](./admin/README.md)** - Admin dashboard guide
- **[Backend Documentation](./backend/README.md)** - API server documentation
- **[Setup Guide](./README_SETUP.md)** - Detailed setup instructions

© 2024 KisanSetu Agricultural Marketplace. All rights reserved.

