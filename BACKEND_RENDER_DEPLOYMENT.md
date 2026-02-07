# Backend Deployment Guide - Render

## Issue: Network Error (ERR_NETWORK) when calling send-otp API

**Root Cause**: Backend is not deployed or the Render URL is incorrect.

## Step-by-Step Deployment Instructions

### 1. Prepare Your Backend
The backend-ai/backend folder is ready. Ensure:
- All dependencies are in package.json ✓
- `.env.production` has all required variables
- `render.yaml` is in the backend directory ✓

### 2. Deploy to Render

#### Option A: Using Render Dashboard (Recommended)
1. Go to https://render.com
2. Sign in or create an account
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Select the `backend-ai/backend` directory
6. Configure:
   - **Name**: docusphere-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Branch**: main

7. Add Environment Variables in Render:
   ```
   NODE_ENV = production
   MONGODB_URI = <your-mongodb-uri>
   JWT_SECRET = <your-jwt-secret>
   BREVO_API_KEY = <your-brevo-key>
   SENDER_EMAIL = <your-email>
   FRONTEND_URL = https://docu-sphere-ai.vercel.app
   ```

8. Click Deploy

#### Option B: Using render.yaml
The `render.yaml` file is already created. Push to GitHub and Render will auto-detect it.

### 3. Get Your Backend URL
After deployment, Render will give you a URL like:
```
https://docusphere-backend-xxxx.onrender.com
```

### 4. Update Frontend API Endpoint

Update [frontend/src/services/apis.js](../../frontend/src/services/apis.js):

```javascript
// Change from:
const BASE_URL = "https://redeploy-backend-ai.onrender.com/api/v1"

// To:
const BASE_URL = "https://docusphere-backend-xxxx.onrender.com/api/v1"
```

### 5. Environment Variables Needed

**Backend (.env.production)**:
- `NODE_ENV`: production
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `BREVO_API_KEY`: Email service API key
- `SENDER_EMAIL`: Verified sender email
- `FRONTEND_URL`: https://docu-sphere-ai.vercel.app

**Frontend (.env or .env.production)**:
- `VITE_API_BASE_URL`: Your Render backend URL

### 6. Test the API Endpoint

After deployment, verify the backend is running:
```bash
curl https://docusphere-backend-xxxx.onrender.com/health
```

Should return:
```json
{
  "status": "ok",
  "timestamp": "2026-02-07T..."
}
```

### 7. Test Sign-up Flow

1. Frontend user clicks "Sign Up"
2. Frontend calls `/send-otp` → Backend generates OTP
3. User receives verification email
4. User enters OTP
5. Backend verifies and creates account

## Common Issues & Solutions

### Network Error (ERR_NETWORK)
- ❌ Backend service is not deployed to Render
- ✅ Deploy using the steps above
- ✅ Verify URL in frontend/src/services/apis.js

### CORS Error
- ✅ Already fixed in index.js with proper CORS config
- ✅ Ensure FRONTEND_URL env variable is set in Render

### OTP Not Sending
- Check BREVO_API_KEY is valid
- Verify SENDER_EMAIL is authenticated in Brevo
- Check MongoDB connection (OTP must be stored)

### Database Connection Error
- Verify MONGODB_URI is correct
- Ensure IP is whitelisted in MongoDB Atlas
- Use connection string with proper format

## Monitoring

Check Render logs:
1. Go to your service on Render.com
2. Click "Logs" tab
3. Look for error messages

## Next Steps

1. Deploy backend to Render using steps above
2. Get Render URL
3. Update frontend apis.js with new URL
4. Redeploy frontend to Vercel
5. Test sign-up again
