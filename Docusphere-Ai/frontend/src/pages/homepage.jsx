import React, { StrictMode } from 'react';
import HeroPlace from '../components/heroSection.jsx';
import Navbar from '../components/navbar';
import HowItWorks from '../components/HowItWorks.jsx';
import Features from '../components/Features.jsx';
const Home = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <HeroPlace />
      <HowItWorks />
        <Features />
    </div>
  );
}

export default Home;
