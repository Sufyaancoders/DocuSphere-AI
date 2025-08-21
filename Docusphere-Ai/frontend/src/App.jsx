


import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
// import Hero from './components/Hero'
import Login from './pages/login';
import Forgetpage from './pages/Forgetpage.jsx';
import Home from './pages/homepage.jsx'
function App() {
  return (
    <>
      <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/about" element={<About />} />
         <Route path="/signup" element={<SignUpPage />} />
         <Route path="/Forgetpage" element={<Forgetpage />} />
       </Routes>
      </div>
    </>
   
  );
 
}

export default App;