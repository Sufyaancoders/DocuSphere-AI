# Vercel Deployment Guide

This document explains how to deploy the DocuSphere-AI frontend to Vercel.

## 📁 Project Structure

This is a monorepo with the following structure:
```
DocuSphere-AI/
├── Docusphere-Ai/
│   ├── frontend/     # React frontend (deployed to Vercel)
│   └── backend/      # Node.js backend (not deployed with frontend)
├── vercel.json       # Vercel configuration
└── .vercelignore     # Files to ignore during deployment
```

## 🚀 Deployment Steps

### 1. Configure Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository: `Sufyaancoders/DocuSphere-AI`
4. Configure the project settings:

   **Option A - Build from Root (using vercel.json):**
   - **Framework Preset**: Other
   - **Root Directory**: `.` (root)
   - **Build Command**: Leave empty (will use vercel.json)
   - **Output Directory**: `Docusphere-Ai/frontend/dist`

   **Option B - Build from Frontend Directory (Recommended):**
   - **Framework Preset**: Vite
   - **Root Directory**: `Docusphere-Ai/frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm ci`

### 2. Environment Variables (if needed)

If your frontend needs environment variables, add them in Vercel:
1. Go to Project Settings → Environment Variables
2. Add variables like:
   - `VITE_API_URL` - Your backend API URL
   - `VITE_APP_NAME` - Your app name
   - etc.

**Note**: Vite requires environment variables to be prefixed with `VITE_`

### 3. Deploy

- Push to `main` branch to trigger automatic deployment
- Or click "Deploy" in Vercel dashboard

## 🔧 Configuration Files

### vercel.json
The build configuration is already set up:
- Installs dependencies only in the frontend folder
- Builds from `Docusphere-Ai/frontend`
- Outputs to `Docusphere-Ai/frontend/dist`
- Includes SPA routing support
- Optimized caching headers for assets

### .vercelignore
Excludes unnecessary files from deployment:
- Backend folder
- Node modules
- Development files

## 🐛 Troubleshooting

### Build fails with "No such file or directory"
- Check that folder names match exactly (case-sensitive on Linux)
- Ensure `vercel.json` paths are correct

### Build succeeds but app shows blank page
- Check browser console for errors
- Verify environment variables are set correctly
- Ensure API endpoints are accessible

### Large bundle size warnings
- Already optimized with code splitting in `vite.config.mjs`
- Consider lazy loading routes if needed

## 📊 Build Optimization

The project is configured with:
- ✅ Code splitting (vendor chunks)
- ✅ Minification with esbuild
- ✅ Tree shaking
- ✅ Asset optimization
- ✅ Long-term caching for static assets

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Router SPA Deployment](https://reactrouter.com/en/main/guides/spa)
