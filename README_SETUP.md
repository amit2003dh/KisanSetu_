# KisanSetu - Setup Guide

## Environment Variables Setup

Create a `.env` file in the root directory with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://127.0.0.1:27017/kisansetu

# Gemini API Key (Get from https://makersuite.google.com/app/apikey)
GEMINI_API_KEY=your_gemini_api_key_here

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
```

## Frontend Environment Variables

Create a `.env` file in the `kisansetu-frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id_here
REACT_APP_GOOGLE_MAPS_KEY=your_google_maps_api_key_here
```

## MongoDB Setup

### Option 1: Local MongoDB

1. Install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # Mac/Linux
   sudo systemctl start mongod
   ```

### Option 2: MongoDB Atlas (Cloud)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string and update `MONGODB_URI` in `.env`

## Gemini API Setup

1. Go to https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to `.env` as `GEMINI_API_KEY`

## Razorpay Setup

1. Sign up at https://razorpay.com
2. Go to Settings > API Keys
3. Generate test API keys
4. Add to `.env`:
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
5. Add `RAZORPAY_KEY_ID` to frontend `.env` as `REACT_APP_RAZORPAY_KEY_ID`

## Google Maps API Setup (Optional, for tracking)

1. Go to https://console.cloud.google.com
2. Create a new project
3. Enable Maps JavaScript API
4. Create API key
5. Add to frontend `.env` as `REACT_APP_GOOGLE_MAPS_KEY`

## Running the Application

### Backend
```bash
npm install
npm run dev
```

### Frontend
```bash
cd kisansetu-frontend
npm install
npm start
```

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running on port 27017
- Check if `MONGODB_URI` is correct in `.env`
- The server will start even if MongoDB is not connected (with warnings)

### Gemini API Not Working
- Verify `GEMINI_API_KEY` is set in `.env`
- Check API key is valid at https://makersuite.google.com/app/apikey
- Check API quota/limits in Google Cloud Console
- The voice assistant will show fallback messages if API is unavailable

### Payment Integration Issues
- Ensure Razorpay keys are set in both backend and frontend `.env`
- Use test keys for development
- Check Razorpay dashboard for transaction logs

