import React, { useState, useRef, useEffect } from 'react';
import HeroSection from '../../components/hero/HeroSection';
import WhyUs from '../../components/whyUsSection/WhyUs';
import MainHero from '../../components/hero/MainHero';
import Location from '../../components/location/Location';
import TestimonialSlider from '../../components/slider/TestimonialSlider';
import Hero from '../../components/hero/HeroPhoto';
import './Home.css'

const Home = () => {


  return (
    <div className="home-container">
        <MainHero/>
        <div className='heroes-container'>
         <Hero 
          backgroundImage="https://sneakerbeast.pl/9805-thickbox_default/buty-adidas-superstar-c77154.jpg"
          text="SHOES"/>
          <Hero 
          backgroundImage="https://cassette.sphdigital.com.sg/image/harpersbazaar/7cc413b3997418b621595bb1aecd9a427faf6e966610a153357a4d92812748ba"
          text="Clothes"/>
        </div>
        <WhyUs />
        <TestimonialSlider/>
        <Location/>
        <HeroSection />
   </div>
  )
};

export default Home;
