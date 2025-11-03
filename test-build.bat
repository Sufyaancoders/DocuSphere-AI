@echo off
echo ================================================
echo Frontend Deployment Fix - Local Test Script
echo ================================================
echo.

cd Docusphere-Ai\frontend

echo Step 1: Cleaning previous installation...
if exist node_modules (
    echo Removing node_modules...
    rmdir /s /q node_modules
)
if exist package-lock.json (
    echo Removing package-lock.json...
    del package-lock.json
)
echo.

echo Step 2: Installing dependencies...
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)
echo.
echo Installed packages:
call npm list --depth=0 | find /c "├──"
echo.

echo Step 3: Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo.

echo ================================================
echo SUCCESS! Build completed successfully.
echo ================================================
echo.
echo The dist folder has been created with your production build.
echo You can now safely deploy to Vercel.
echo.
echo Next steps:
echo 1. Review the dist folder contents
echo 2. Commit changes: git add . ^&^& git commit -m "fix: Vercel deployment"
echo 3. Push to GitHub: git push origin main
echo 4. Vercel will automatically deploy
echo.
pause
