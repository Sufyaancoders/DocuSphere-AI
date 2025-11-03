@echo off
REM Quick fix script for Vercel deployment issues

echo ================================
echo DocuSphere-AI Deployment Fix
echo ================================
echo.

echo [1/5] Checking folder structure...
if exist "Docusphere-Ai\frontend" (
    echo ✓ Frontend folder found: Docusphere-Ai\frontend
) else (
    echo ✗ ERROR: Frontend folder not found!
    pause
    exit /b 1
)

echo.
echo [2/5] Navigating to frontend directory...
cd Docusphere-Ai\frontend
if errorlevel 1 (
    echo ✗ ERROR: Cannot navigate to frontend directory!
    pause
    exit /b 1
)
echo ✓ Successfully navigated to frontend

echo.
echo [3/5] Installing dependencies...
call npm ci
if errorlevel 1 (
    echo ✗ ERROR: npm ci failed! Trying npm install...
    call npm install
    if errorlevel 1 (
        echo ✗ ERROR: npm install failed!
        pause
        exit /b 1
    )
)
echo ✓ Dependencies installed

echo.
echo [4/5] Building frontend...
call npm run build
if errorlevel 1 (
    echo ✗ ERROR: Build failed!
    pause
    exit /b 1
)
echo ✓ Build successful

echo.
echo [5/5] Verifying build output...
if exist "dist\index.html" (
    echo ✓ Build output verified: dist\index.html exists
) else (
    echo ✗ WARNING: dist\index.html not found!
)

echo.
echo ================================
echo Build completed successfully!
echo ================================
echo.
echo Next steps:
echo 1. Go to https://vercel.com/dashboard
echo 2. Update your project settings:
echo    - Root Directory: Docusphere-Ai/frontend
echo    - Build Command: npm run build
echo    - Output Directory: dist
echo 3. Deploy!
echo.
pause
