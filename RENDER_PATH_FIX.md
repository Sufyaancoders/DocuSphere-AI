# ✅ RENDER DEPLOYMENT FIX - Path Issue

## The Problem
```
Error: Cannot find module '/opt/render/project/src/index.js'
```

Render is looking for `index.js` in the **wrong path**. Your actual entry point is in `backend-ai/backend/index.js`.

## Solution: Update Render Service Settings

Since you already have the service deployed, you need to fix the **Root Directory** setting:

### Step 1: Go to Render Dashboard
1. Visit https://render.com
2. Sign in to your account
3. Find your service: **redeploy-backend-ai**

### Step 2: Update Service Settings
1. Click on the service
2. Go to **Settings** tab
3. Look for **Root Directory**
4. Change it to: `Docusphere-Ai/backend-ai/backend`
5. Click **Save**

### Step 3: Redeploy
The service should automatically redeploy with the new settings.

OR manually trigger a redeployment:
1. Go to **Deployments** tab
2. Click the **Redeploy** button on the latest deployment

## Alternative: Update render.yaml

We've created/updated `render.yaml` in your repo root with the correct path:
```yaml
rootDir: Docusphere-Ai/backend-ai/backend
```

Make sure to:
1. **Push to GitHub**
```bash
git add render.yaml
git commit -m "Fix: Update render.yaml with correct root directory"
git push
```

2. **Redeploy from Render**
   - The service should auto-redeploy, OR
   - Manually trigger redeploy from Render dashboard

## Troubleshooting

### If still failing after updating:
1. Check **Build Logs** on Render - should show the correct path
2. Verify the root directory path is correct
3. Make sure `package.json` is in the specified root directory
4. Try manually redeploying from Render dashboard

### Quick Test
Once deployed, test with:
```bash
curl https://redeploy-backend-ai.onrender.com/health
```

Should return:
```json
{"status":"ok","timestamp":"..."}
```

## Next Steps
1. Update Render service settings OR push render.yaml changes
2. Redeploy service
3. Wait 2-3 minutes for deployment to complete
4. Check the logs - should NOT have "Cannot find module" error
5. Test the `/health` endpoint
6. Try signing up again!

The frontend API endpoint `https://redeploy-backend-ai.onrender.com/api/v1/send-otp` should then work correctly.
