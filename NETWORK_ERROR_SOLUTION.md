# 🔴 NETWORK ERROR FIX - Complete Solution

## The Problem
```
Error: "SENDOTP API ERROR"
Code: "ERR_NETWORK"
Message: "Network Error"
```

When users try to sign up and the frontend attempts to call the OTP endpoint.

## Root Cause Analysis

**Your Frontend** is trying to reach:
```
https://redeploy-backend-ai.onrender.com/api/v1/send-otp
```

But **this service is not deployed or not running**. That's why you get a Network Error.

## Solution Overview

Your setup has TWO separate applications:
1. **Frontend**: `Docusphere-Ai/frontend` → Deployed on Vercel ✅
2. **Backend**: `backend-ai/backend` → **NOT DEPLOYED** ❌

When you deploy frontend to Vercel, it only deploys the frontend code. The backend needs to be deployed separately.

## Fix Path (Choose One)

### Path A: Deploy Backend to Render (RECOMMENDED)
**Time**: 10-15 minutes

Files to reference:
- [BACKEND_RENDER_DEPLOYMENT.md](./BACKEND_RENDER_DEPLOYMENT.md) - Complete deployment guide
- [QUICK_FIX_NETWORK_ERROR.md](./QUICK_FIX_NETWORK_ERROR.md) - Quick checklist

**Steps**:
1. Go to render.com and create account
2. Deploy `backend-ai/backend` folder
3. Get new Render URL
4. Update `frontend/src/services/apis.js` with new URL
5. Redeploy frontend

### Path B: Run Backend Locally
**Time**: 5 minutes (testing only)

```bash
cd Docusphere-Ai/backend-ai/backend
npm install
npm start
```

Update frontend:
```javascript
// frontend/src/services/apis.js
const BASE_URL = "http://localhost:5001/api/v1"
```

Note: Backend must run locally for this to work

## Changes Made to Your Code

### 1. Backend improvements:
- ✅ Added health check endpoint (`/health`)
- ✅ Improved CORS configuration
- ✅ Added production environment support
- ✅ Better error logging

### 2. Files Created:
- `backend-ai/backend/render.yaml` - Render deployment config
- `backend-ai/backend/.env.production` - Production environment template
- `backend-ai/backend/check-deployment.js` - Diagnostic tool
- `backend-ai/backend/test-otp.js` - Test script
- `BACKEND_RENDER_DEPLOYMENT.md` - Deployment guide
- `QUICK_FIX_NETWORK_ERROR.md` - Quick checklist

## Testing Your Fix

### Before Deployment:
```bash
# Test locally
cd backend-ai/backend
npm install
npm start

# In another terminal, test the OTP endpoint
curl -X POST http://localhost:5001/api/v1/send-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### After Deployment to Render:
Update frontend and try signing up again. Should work!

## Environment Variables Needed

Your backend needs these in Render:

```
NODE_ENV = production
MONGODB_URI = <your-mongodb-atlas-uri>
JWT_SECRET = <any-random-string>
BREVO_API_KEY = <your-brevo-email-service-key>
SENDER_EMAIL = <verified-email-in-brevo>
FRONTEND_URL = https://docu-sphere-ai.vercel.app
```

## Complete Sign-up Flow (After Fix)

```
1. User clicks Sign Up
   ↓
2. Enters name, email, password
   ↓
3. Frontend calls: https://your-backend-url.onrender.com/api/v1/send-otp
   ↓
4. Backend generates OTP & sends email
   ↓
5. User receives verification code
   ↓
6. User enters OTP on verify page
   ↓
7. Frontend calls: /api/v1/signup with OTP
   ↓
8. Backend creates user account ✅
```

## Troubleshooting

### Still Getting Network Error?
- ❌ Backend is not deployed
- ✅ Deploy to Render following the guide
- ✅ Verify deployment is successful

### CORS Error?
- Already fixed in index.js
- Make sure FRONTEND_URL is set in Render

### Database Error?
- Verify MONGODB_URI is correct
- Check IP whitelist in MongoDB Atlas
- Ensure connection format is: `mongodb+srv://username:password@cluster.mongodb.net/dbname`

### Email Not Sending?
- Verify BREVO_API_KEY
- Ensure SENDER_EMAIL is verified in Brevo
- Check backend logs for errors

## Next Actions

1. **Choose deployment path** (Render or Local)
2. **Set up environment variables**
3. **Deploy backend**
4. **Update frontend API endpoint**
5. **Redeploy frontend**
6. **Test sign-up flow**

## Quick Links

- [Render Deployment Guide](./BACKEND_RENDER_DEPLOYMENT.md)
- [Quick Fix Checklist](./QUICK_FIX_NETWORK_ERROR.md)
- [Frontend API Config](./Docusphere-Ai/frontend/src/services/apis.js)
- [Backend Index](./Docusphere-Ai/backend-ai/backend/index.js)

---

**Everything needed is in this folder. Start with one of the markdown guides above!**
