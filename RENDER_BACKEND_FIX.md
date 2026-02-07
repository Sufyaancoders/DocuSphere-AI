# Render Backend Deployment Fix

## Problem
Render is looking for `/opt/render/project/src/index.js` but the file is at `/opt/render/project/index.js`

## Root Cause
The GitHub repository `DocuSphere-AI-backend` either:
- Has incorrect Render configuration
- Has files in wrong directory structure
- Render Dashboard has wrong start command

## Solution Steps

### Quick Fix (Render Dashboard)
1. Go to https://dashboard.render.com
2. Select your `redeploy-backend-ai` service
3. Go to **Settings**
4. Update these settings:
   - **Start Command:** Change to `npm start`
   - **Build Command:** `npm install`
   - **Root Directory:** Leave blank or `.`
5. Click **Save Changes**
6. Manually trigger a new deployment

### Verify GitHub Repository Structure
Your `DocuSphere-AI-backend` repo should have this structure at root:
```
DocuSphere-AI-backend/
├── index.js                    ← Must be at root!
├── package.json                ← With "start": "node index.js"
├── render.yaml                 ← Optional, for config
├── config/
├── controller/
├── mail/
├── middlewares/
├── models/
├── routes/
└── util/
```

### Correct render.yaml
```yaml
services:
  - type: web
    name: redeploy-backend-ai
    env: node
    plan: free
    rootDir: .
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: MONGODB_URI
        sync: false
      - key: JWT_SECRET
        sync: false
      - key: BREVO_API_KEY
        sync: false
      - key: SENDER_EMAIL
        sync: false
      - key: FRONTEND_URL
        value: https://docu-sphere-ai.vercel.app
```

### Correct package.json
```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "type": "commonjs",
  "dependencies": {
    // ... your dependencies
  }
}
```

## What NOT to Have
- ❌ No `src/` folder containing index.js
- ❌ No "main": "src/index.js" in package.json
- ❌ No extra package.json files at wrong levels

## After Making Changes
1. Commit and push changes to GitHub
2. Trigger a new deployment on Render
3. Check logs for successful startup
