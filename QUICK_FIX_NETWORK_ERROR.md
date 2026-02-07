# Quick Fix Checklist - Network Error (ERR_NETWORK)

## Problem
When signing up: "SENDOTP API ERROR" with "Network Error"

## Root Cause
❌ Backend is not deployed to Render or the URL is wrong

## Immediate Actions (Choose One)

### Option 1: Use a Deployed Backend (If Available)
If you have another backend URL:
1. Open `frontend/src/services/apis.js`
2. Change `BASE_URL` to your working backend URL
3. Example: `const BASE_URL = "https://your-backend-url.onrender.com/api/v1"`
4. Redeploy frontend to Vercel

### Option 2: Deploy Backend to Render (Recommended)
Follow `BACKEND_RENDER_DEPLOYMENT.md`:

**Quick Steps:**
```
1. Go to render.com → Sign up
2. New Web Service → Connect GitHub
3. Select backend-ai/backend directory
4. Build: npm install
5. Start: npm start
6. Add ENV variables (MONGODB_URI, JWT_SECRET, etc.)
7. Deploy
8. Get your new URL (e.g., https://docusphere-backend.onrender.com)
9. Update frontend apis.js with new URL
10. Redeploy frontend to Vercel
```

### Option 3: Run Backend Locally (For Testing)
```bash
cd backend-ai/backend
npm install
npm start
```

Then update frontend:
```javascript
const BASE_URL = "http://localhost:5001/api/v1"
```

## Verification Steps

### Test Backend is Running
```bash
# Check if backend responds
curl https://your-backend-url.onrender.com/health
```

### Expected Response
```json
{
  "status": "ok",
  "timestamp": "2026-02-07T..."
}
```

## Files Modified
✓ `backend-ai/backend/index.js` - Added health endpoint & better CORS
✓ `backend-ai/backend/render.yaml` - Deployment config
✓ `backend-ai/backend/.env.production` - Production env variables
✓ `backend-ai/backend/check-deployment.js` - Diagnostic tool

## What's Still Needed

### From You:
1. MongoDB URI (MongoDB Atlas)
2. JWT Secret (any random string)
3. Brevo API Key (email service)
4. New Render URL (after deployment)

### To Update:
1. `frontend/src/services/apis.js` - Update BASE_URL
2. `Docusphere-Ai/frontend/.env` or `.env.production` - Add backend URL
3. Redeploy frontend to Vercel

## Support

**Still getting Network Error?**
1. Check if backend is actually deployed
2. Verify URL is correct
3. Check frontend console for exact URL being called
4. Look at Render logs for backend errors

**API Error even though backend loads?**
1. Check CORS configuration
2. Verify environment variables
3. Check database connection
4. Look at backend console logs
