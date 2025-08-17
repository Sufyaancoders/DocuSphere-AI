import React, { StrictMode } from 'react';
import HeroPlace from '../components/heroSection.jsx';
import Navbar from '../components/navbar';
import HowItWorks from '../components/HowItWorks.jsx';
import Features from '../components/Features.jsx';
import Integration from '../components/Integration.jsx';
import { TextScrollDemo } from '../components/textrun.jsx';
import GlowCard from '../components/glowcard.jsx';
import FAQ from '../components/FAQ.jsx';
const Home = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <HeroPlace />
      <HowItWorks />
      <Features />
      <Integration />
      <TextScrollDemo />
      <GlowCard />
      <FAQ />
    </div>
  );
}

export default Home;
