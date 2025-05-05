import React, { useState, useRef, useEffect } from 'react';
import HeroSection from '../../components/hero/HeroSection';
import WhyUs from '../../components/whyUsSection/WhyUs';


const Home = () => {


  return (
    <div className="home-container">
        <HeroSection />
        <WhyUs />
   </div>
  )
};

export default Home;
