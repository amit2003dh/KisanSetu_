# Quick Guide: Start MongoDB

## The Problem
Your server is running but MongoDB is not connected, causing database operations to fail.

## Solution Options

### Option 1: Start Local MongoDB (Windows)

1. **Check if MongoDB service exists:**
   ```powershell
   Get-Service -Name MongoDB* -ErrorAction SilentlyContinue
   ```

2. **Start MongoDB service:**
   ```powershell
   net start MongoDB
   ```
   
   Or if the service name is different:
   ```powershell
   Get-Service | Where-Object {$_.Name -like "*mongo*"}
   # Then start the service found above
   ```

3. **If MongoDB is not installed:**
   - Download from: https://www.mongodb.com/try/download/community
   - Install MongoDB Community Server
   - MongoDB usually starts automatically after installation

### Option 2: Use MongoDB Atlas (Cloud - Recommended)

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Create a free account
3. Create a free cluster (M0 - Free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Add to your `.env` file:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kisansetu
   ```
   Replace `username`, `password`, and `cluster` with your actual values

### Option 3: Use MongoDB Compass (GUI)

1. Download MongoDB Compass: https://www.mongodb.com/products/compass
2. Install and open
3. It will help you start MongoDB and manage your database

## Verify MongoDB is Running

After starting MongoDB, restart your server:
```bash
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully
```

Instead of:
```
❌ MongoDB Connection Failed
```

## Note

The API routes now handle MongoDB connection errors gracefully. They will return proper error messages instead of timing out, so your frontend can display helpful messages to users.

