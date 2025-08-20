


import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
// import Hero from './components/Hero'
import Login from './pages/login';
import Home from './pages/homepage.jsx'
import OpenRoute from './components/auth/OpenRoute'
import VerifyEmail from './pages/VerifyEmail.jsx';
import Dashboard from './pages/Dashboard.jsx';
import PrivateRoute from './components/auth/PrivateRoute'
function App() {
  return (
    <>
      <div>
       <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
       
        <Route path="/login" element={
            <OpenRoute><Login /></OpenRoute>
        } />
        <Route path="/signup" element={
          <OpenRoute>
            <SignUpPage />
          </OpenRoute>
        } />

          <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
         <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

      
       </Routes>
      </div>
    </>
   
  );
 
}

export default App;