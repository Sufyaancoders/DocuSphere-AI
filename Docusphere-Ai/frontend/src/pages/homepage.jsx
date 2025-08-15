import React, { StrictMode } from 'react';
import HeroPlace from '../components/heroSection.jsx';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <HeroPlace />
    </div>
  );
}

export default Home;
