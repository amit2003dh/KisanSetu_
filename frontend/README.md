# 🌾 KisanSetu Frontend - Agricultural Marketplace

## 📋 **Project Overview**

KisanSetu is a comprehensive agricultural marketplace platform connecting farmers, sellers, and buyers with AI-powered crop analysis, real-time delivery tracking, and secure payment processing.

### **🎯 Key Features**
- **🌾 Multi-Role System**: Farmers, Sellers, Buyers, Delivery Partners
- **🤖 AI-Powered Analysis**: Google Gemini crop disease detection
- **📦 Marketplace**: Buy/sell crops and agricultural products
- **🚚 Real-time Tracking**: Live delivery tracking with Socket.io
- **💳 Secure Payments**: Razorpay payment integration
- **📊 Analytics Dashboard**: Performance insights for sellers
- **📱 Mobile Responsive**: Optimized for all device types

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Backend server running on port 5000

### **Installation**
```bash
# Clone the repository
git clone https://github.com/amit2003dh/KisanSetu_.git
cd KisanSetu_/frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### **Environment Variables**
Create a `.env` file in the frontend directory:

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

---

## 🏃‍♂️ **Available Scripts**

### **Development**
```bash
npm start
```
Runs the app in development mode on [http://localhost:3000](http://localhost:3000)
- Hot reload enabled
- Source maps available
- Error overlay for debugging

### **Testing**
```bash
npm test
```
Launches the test runner in interactive watch mode
- Jest test runner
- React Testing Library
- Coverage reports available

### **Production Build**
```bash
npm run build
```
Creates optimized production build in `build/` directory
- Code minification and optimization
- Asset optimization
- Ready for deployment

### **Eject (Advanced)**
```bash
npm run eject
```
⚠️ **One-way operation** - exposes all build configurations
- Custom webpack configuration
- Advanced customization options
- Not reversible

---

## 🌐 **Deployment**

### **Vercel (Recommended)**
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Automatic deployment on push to main branch

**Live URLs:**
- **Main App**: https://kisan-set-frontend-71z4.vercel.app
- **Preview**: https://kisan-set-frontend-71z4-git-main-amit2003dhs-projects.vercel.app

### **Netlify**
1. Connect GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Set environment variables

### **Docker**
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 👥 **User Roles & Features**

### **🌾 Farmers**
- **Dashboard**: `/farmer`
- **Features**: 
  - Crop listing and management
  - AI-powered crop disease analysis
  - Sales tracking and analytics
  - Order fulfillment management

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

## 🔧 **Technical Stack**

### **Core Technologies**
- **React 19.2.3**: Modern React with hooks
- **React Router 7.11.0**: Client-side routing
- **Axios 1.13.2**: HTTP client for API calls
- **Socket.io Client 4.8.3**: Real-time communication

### **Maps & Location**
- **React Google Maps 2.20.8**: Google Maps integration
- **React Leaflet 5.0.0**: OpenStreetMap alternative
- **Leaflet 1.9.4**: Map tiles and controls

### **UI & Styling**
- **CSS3**: Custom CSS with CSS variables
- **Responsive Design**: Mobile-first approach
- **Component Library**: Custom reusable components

### **Development Tools**
- **React Scripts 5.0.1**: Build tooling
- **ESLint**: Code linting and formatting
- **Web Vitals**: Performance monitoring

---

## 📊 **Component Architecture**

### **Pages Structure**
```
src/pages/
├── auth/
│   ├── Login.js
│   └── Signup.js
├── farmer/
│   ├── FarmerDashboard.js
│   ├── ManageCrops.js
│   └── CropDoctor.js
├── seller/
│   ├── SellerDashboard.js
│   ├── ManageProducts.js
│   └── SellerOrders.js
├── buyer/
│   ├── BuyerDashboard.js
│   ├── Crops.js
│   └── Orders.js
├── delivery/
│   ├── DeliveryDashboard.js
│   └── DeliveryDetails.js
└── common/
    ├── Home.js
    ├── About.js
    └── Contact.js
```

### **Components Structure**
```
src/components/
├── common/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Loading.js
│   └── ErrorBoundary.js
├── forms/
│   ├── AddCrop.js
│   ├── AddProduct.js
│   └── Checkout.js
├── cards/
│   ├── CropCard.js
│   ├── ProductCard.js
│   └── OrderCard.js
└── ui/
    ├── Button.js
    ├── Modal.js
    └── Alert.js
```

---

## 🔌 **API Integration**

### **Authentication**
```javascript
// Login
const { data } = await API.post('/users/login', credentials);

// Protected routes with JWT
API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

### **Real-time Updates**
```javascript
// Socket.io integration
const socket = io(process.env.REACT_APP_API_URL);

socket.on('newOrder', (order) => {
  // Handle new order notification
});

socket.on('orderStatusUpdate', (update) => {
  // Handle order status change
});
```

### **AI Integration**
```javascript
// Crop analysis
const analyzeCrop = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  
  const { data } = await API.post('/gemini/analyze-crop', formData);
  return data.analysis;
};
```

---

## 💳 **Payment Integration**

### **Razorpay Setup**
```javascript
import Razorpay from 'razorpay';

const options = {
  key: process.env.REACT_APP_RAZORPAY_KEY_ID,
  amount: orderAmount * 100, // Convert to paise
  currency: 'INR',
  name: 'KisanSetu',
  description: 'Purchase of agricultural products',
  handler: function (response) {
    // Handle payment success
    verifyPayment(response);
  }
};

const razorpay = new Razorpay(options);
razorpay.open();
```

### **Payment Flow**
1. **Order Creation**: Create order in database
2. **Payment Initiation**: Open Razorpay checkout
3. **Payment Verification**: Verify payment with backend
4. **Order Confirmation**: Update order status

---

## 🗺️ **Maps & Location Services**

### **Google Maps Integration**
```javascript
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';

const MapComponent = () => (
  <GoogleMap
    zoom={14}
    center={location}
    mapContainerStyle={{ width: '100%', height: '400px' }}
  >
    <Marker position={location} />
    <DirectionsRenderer directions={directions} />
  </GoogleMap>
);
```

### **Location Features**
- **Delivery Tracking**: Real-time location sharing
- **Service Areas**: Define delivery zones
- **Route Optimization**: Efficient delivery routes
- **Geofencing**: Location-based notifications

---

## 🎨 **UI/UX Features**

### **Design System**
- **Color Palette**: Agricultural theme with green accents
- **Typography**: Clean, readable fonts
- **Spacing**: Consistent spacing system
- **Icons**: Agricultural and business icons

### **Accessibility**
- **WCAG 2.1**: Compliance with accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and descriptions
- **High Contrast**: Support for high contrast mode

### **Performance**
- **Code Splitting**: Lazy loading of components
- **Image Optimization**: WebP format support
- **Caching**: Service worker for offline support
- **Bundle Optimization**: Tree shaking and minification

---

## 🐛 **Troubleshooting**

### **Common Issues**

#### **CORS Errors**
```javascript
// Ensure backend CORS is configured
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-domain.com'],
  credentials: true
}));
```

#### **Authentication Issues**
- Check JWT token in localStorage
- Verify token expiration
- Ensure API keys are correctly set

#### **Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### **Performance Issues**
- Use React.memo for expensive components
- Implement virtual scrolling for large lists
- Optimize images and assets

---

## 📈 **Analytics & Monitoring**

### **Performance Metrics**
- **Core Web Vitals**: LCP, FID, CLS
- **Bundle Size**: Monitor bundle size changes
- **Load Times**: Page load performance
- **User Engagement**: Track user interactions

### **Error Tracking**
- **Error Boundaries**: Catch and log React errors
- **API Errors**: Centralized error handling
- **User Feedback**: Error reporting system

---

## 🚀 **Future Enhancements**

### **Planned Features**
- **Offline Support**: PWA capabilities
- **Push Notifications**: Order updates
- **Multi-language**: Regional language support
- **Video Calls**: Direct buyer-seller communication
- **Blockchain**: Supply chain transparency

### **Technical Improvements**
- **Microservices**: Service-oriented architecture
- **GraphQL**: Efficient data fetching
- **Server Components**: Next.js migration
- **WebAssembly**: Performance-critical computations

---

## 📞 **Support & Contributing**

### **Getting Help**
- **Documentation**: Check README_SETUP.md
- **Issues**: Report bugs on GitHub
- **Community**: Join our Discord server
- **Email**: support@kisansetu.com

### **Contributing**
1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request
5. Follow code of conduct

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 **Acknowledgments**

- **Google Gemini**: AI-powered crop analysis
- **Razorpay**: Payment processing
- **Mapbox**: Mapping services
- **OpenAI**: AI model integration
- **React Community**: Open source contributors

---

**🌾 Happy Farming with KisanSetu! 🚀**

*Connecting Farmers to Markets, Powered by Technology*
