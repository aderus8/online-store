import React, { useState, useRef, useEffect } from 'react';
import HeroSection from '../../components/hero/HeroSection';
import WhyUs from '../../components/whyUsSection/WhyUs';
import CoachHome from '../../components/coachHome/CoachHome';
import Features from '../../components/features/Features';
import MainHero from '../../components/hero/MainHero';
import Location from '../../components/location/Location';


const Home = () => {


  return (
    <div className="home-container">
        <MainHero/>
        <WhyUs />
        <Features/>
        <Location/>
        <HeroSection />
   </div>
  )
};

export default Home;
