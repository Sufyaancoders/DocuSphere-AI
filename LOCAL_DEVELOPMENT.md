# 🚀 Local Development Guide

Complete guide to run DocuSphere-AI on your local machine.

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** (local or MongoDB Atlas) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

Check installation:
```bash
node --version
npm --version
```

## 📁 Project Structure

```
DocuSphere-AI/
├── Docusphere-Ai/
│   ├── backend/          # Node.js + Express API
│   │   ├── index.js      # Server entry point
│   │   ├── package.json
│   │   └── ...
│   └── frontend/         # React + Vite
│       ├── src/
│       ├── package.json
│       └── ...
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sufyaancoders/DocuSphere-AI.git
cd DocuSphere-AI
```

### 2️⃣ Backend Setup

Navigate to backend folder:
```bash
cd Docusphere-Ai/backend
```

Install dependencies:
```bash
npm install
```

Create `.env` file in the `backend` folder:
```bash
# Create .env file (Windows)
type nul > .env

# Or manually create and add the following variables:
```

Add these environment variables to `.env`:
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGODB_URL=mongodb://localhost:27017/docusphere-ai
# OR use MongoDB Atlas:
# MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/docusphere-ai

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Gemini AI API
GEMINI_API_KEY=your-gemini-api-key-here
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent

# Email Configuration (for Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

**Important Notes:**
- Get your Gemini API key from: [Google AI Studio](https://makersuite.google.com/app/apikey)
- For Gmail, use [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password
- Change `JWT_SECRET` to a random secure string

### 3️⃣ Frontend Setup

Open a **new terminal** and navigate to frontend:
```bash
cd Docusphere-Ai/frontend
```

Install dependencies:
```bash
npm install
```

Create `.env` file in the `frontend` folder (optional):
```env
VITE_API_URL=http://localhost:3000/api/v1
```

---

## 🏃 Running the Application

### Option 1: Run Both (Frontend + Backend) Together

From the **frontend** folder:
```bash
npm run dev
```

This will start:
- ✅ Frontend at: `http://localhost:5173`
- ✅ Backend at: `http://localhost:3000`

### Option 2: Run Separately

**Terminal 1 - Backend:**
```bash
cd Docusphere-Ai/backend
npm run dev
```
Server runs at: `http://localhost:3000`

**Terminal 2 - Frontend:**
```bash
cd Docusphere-Ai/frontend
npm start
```
App opens at: `http://localhost:5173`

---

## 📝 Available Scripts

### Backend (`Docusphere-Ai/backend`)
```bash
npm start          # Start server (production mode)
npm run dev        # Start server with nodemon (auto-reload)
```

### Frontend (`Docusphere-Ai/frontend`)
```bash
npm start          # Start development server
npm run dev        # Start both frontend and backend
npm run build      # Build for production
npm run preview    # Preview production build
```

---

## 🔍 Verify Installation

1. **Backend is running:**
   - Open: `http://localhost:3000`
   - You should see: `Hello World!`

2. **Frontend is running:**
   - Open: `http://localhost:5173`
   - You should see the DocuSphere-AI homepage

3. **MongoDB is connected:**
   - Check terminal logs for: `MongoDB connected successfully`

---

## 🐛 Troubleshooting

### ❌ "Cannot find module"
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### ❌ "Port already in use"
```bash
# Kill process on port 3000 (Backend)
npx kill-port 3000

# Kill process on port 5173 (Frontend)
npx kill-port 5173
```

### ❌ "MongoDB connection failed"
- Ensure MongoDB is running locally, or
- Check your MongoDB Atlas connection string
- Verify IP whitelist in MongoDB Atlas (add `0.0.0.0/0` for testing)

### ❌ "CORS Error"
- Backend `.env` should have: `FRONTEND_URL=http://localhost:5173`
- Frontend should call: `http://localhost:3000/api/v1`

### ❌ "Gemini API Error"
- Verify your API key is correct
- Check API quota at [Google AI Studio](https://makersuite.google.com/)

### ❌ Build errors in frontend
```bash
# Clear Vite cache
cd Docusphere-Ai/frontend
rm -rf node_modules/.vite
npm run build
```

---

## 🎯 Quick Start Checklist

- [ ] Node.js installed
- [ ] MongoDB running (local or Atlas)
- [ ] Backend `.env` configured
- [ ] Backend dependencies installed (`npm install`)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] Backend running (`npm run dev`)
- [ ] Frontend running (`npm start`)
- [ ] Open `http://localhost:5173` in browser

---

## 🔗 API Endpoints

### Authentication
- `POST /api/v1/signup` - Register user
- `POST /api/v1/login` - Login user
- `POST /api/v1/logout` - Logout user

### Gemini AI Assistant
- `POST /api/v1/gemini/command` - Send command to AI

### User Management
- `GET /api/v1/profile` - Get user profile
- `PUT /api/v1/profile` - Update profile

---

## 📚 Tech Stack

**Frontend:**
- React 18
- Vite 7
- TailwindCSS 4
- Redux Toolkit
- React Router
- Framer Motion
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Nodemailer
- Gemini AI API

---

## 💡 Tips for Development

1. **Auto-reload:** Both backend (nodemon) and frontend (Vite) have hot-reload enabled
2. **Console logs:** Check browser console for frontend logs, terminal for backend logs
3. **API testing:** Use Postman or Thunder Client extension for testing APIs
4. **Database GUI:** Use MongoDB Compass to view/edit database

---

## 🚀 Next Steps

- [ ] Test all features locally
- [ ] Configure environment variables properly
- [ ] Set up MongoDB database
- [ ] Deploy backend (Railway, Render, etc.)
- [ ] Deploy frontend (Vercel) - See `VERCEL_DEPLOYMENT.md`

---

## 📞 Need Help?

- Check the console logs for detailed error messages
- Verify all environment variables are set correctly
- Ensure all dependencies are installed
- MongoDB connection string is correct

Happy coding! 🎉
