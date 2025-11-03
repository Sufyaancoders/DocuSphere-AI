# 🔧 Deployment Fix Guide

## Problem
Vercel deployment is failing with:
```
sh: line 1: cd: Docusphere-Ai/frontend: No such file or directory
Error: Command "cd Docusphere-Ai/frontend && npm ci && npm run build" exited with 1
```

## Root Cause
The folder name in Git is case-sensitive (`Docusphere-Ai`), but the build system may not be reading the configuration correctly.

## ✅ Solution Steps

### Step 1: Update Vercel Project Settings

Go to your Vercel project settings and configure:

1. **Framework Preset**: `Vite`
2. **Root Directory**: `.` (leave as root, or set to `Docusphere-Ai/frontend`)
3. **Build Command**: 
   ```bash
   cd Docusphere-Ai/frontend && npm ci && npm run build
   ```
4. **Output Directory**: `Docusphere-Ai/frontend/dist`
5. **Install Command**: `npm install` (or leave empty)

### Step 2: Verify Environment Variables

If your frontend needs environment variables, add them in Vercel:
- Go to **Project Settings** → **Environment Variables**
- Add any variables prefixed with `VITE_` (e.g., `VITE_API_URL`)

### Step 3: Alternative - Use Root Directory Setting

Instead of building from root, you can set the **Root Directory** in Vercel to:
```
Docusphere-Ai/frontend
```

Then simplify your build commands:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install` or `npm ci`

### Step 4: Commit and Push Updated vercel.json

The `vercel.json` has been updated. Make sure to commit and push:

```bash
git add vercel.json
git commit -m "Fix: Update Vercel build configuration"
git push origin main
```

### Step 5: Manual Redeploy

After updating settings:
1. Go to your Vercel project
2. Click **Deployments**
3. Click the three dots on the latest deployment
4. Click **Redeploy**

## 🔍 Troubleshooting

### If the error persists:

1. **Check Vercel Build Logs** - Look for the exact command being executed
2. **Case Sensitivity** - Ensure folder names match exactly in all configs
3. **Clear Vercel Cache** - In deployment settings, enable "Clear cache and redeploy"

### Test Build Locally:

```bash
# Navigate to frontend
cd Docusphere-Ai/frontend

# Install dependencies
npm ci

# Build
npm run build

# Verify dist folder exists
dir dist
```

## 📊 Security Fixes

The deployment log shows:
```
2 vulnerabilities (1 moderate, 1 high)
```

After deployment succeeds, run:
```bash
cd Docusphere-Ai/frontend
npm audit fix
```

## 🎯 Recommended Vercel Configuration

### Option A: Build from Root (Current Setup)
- Root Directory: `.` (root)
- Build Command: `cd Docusphere-Ai/frontend && npm ci && npm run build`
- Output Directory: `Docusphere-Ai/frontend/dist`

### Option B: Build from Frontend Directory (Simpler)
- Root Directory: `Docusphere-Ai/frontend`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm ci`

**Recommendation**: Use Option B for simpler configuration and better compatibility.

## 📝 Next Steps

1. ✅ Update Vercel project settings (choose Option A or B)
2. ✅ Commit updated `vercel.json`
3. ✅ Trigger a new deployment
4. ✅ Fix npm vulnerabilities after successful deployment
5. ✅ Test the deployed application

## 🔗 Quick Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
