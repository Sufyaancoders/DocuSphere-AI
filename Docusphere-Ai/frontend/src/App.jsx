


import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Hero from './components/Hero'
import Login from './pages/login';
import Home from './pages/homepage.jsx'
function App() {
  return (
    <>
      <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       </Routes>
      </div>
    </>
  );
}

export default App;