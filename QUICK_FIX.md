# ⚡ Quick Fix Reference Card

## The Problem
```
Rollup native module error on Vercel
Error: Command "npm run build" exited with 1
```

## The Solution (3 Key Changes)

### 1️⃣ Use Vite 5.0.13 (package.json)
```json
"vite": "^5.0.13",
"rollup": "^4.9.6"
```

### 2️⃣ Disable Manual Chunks (vite.config.mjs)
```javascript
build: {
  rollupOptions: {
    output: {
      manualChunks: undefined  // ← KEY FIX!
    }
  }
}
```

### 3️⃣ Clear Vercel Build Cache
```
Vercel Dashboard → Settings → Clear Build Cache
Then: Redeploy with "Use existing Build Cache" UNCHECKED
```

## Deploy Commands
```cmd
git add .
git commit -m "fix: Use Vite 5.0.13 and disable manual chunking"
git push origin main
```

## Test Locally First
```cmd
cd Docusphere-Ai\frontend
rmdir /s /q node_modules
del package-lock.json
npm install --legacy-peer-deps
npm run build
```

## What Changed?
| File | Change |
|------|--------|
| package.json | Vite 7.1.2 → 5.0.13 |
| package.json | Added rollup: 4.9.6 |
| vite.config.mjs | manualChunks: undefined |
| vite.config.mjs | target: esnext |
| vercel.json | NPM_CONFIG_PRODUCTION: false |
| .npmrc | Added production=false |

## Expected Result
```
✅ vite v5.0.13 building for production...
✅ 1234 modules transformed
✅ built in 34s
✅ Build Completed
```

## If Still Failing
Try Vite 4.5.3:
```json
"vite": "^4.5.3",
"@vitejs/plugin-react": "^4.2.1"
```

---
See **ROLLUP_NATIVE_MODULE_FINAL_FIX.md** for full details.
