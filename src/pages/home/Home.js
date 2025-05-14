import React, { useState, useRef, useEffect } from 'react';
import HeroSection from '../../components/home/heroDetails/HeroSection';
import MainHero from '../../components/home/heroMain/MainHero';
import Location from '../../components/home/location/Location';
import TestimonialSlider from '../../components/home/testimonialSlider/TestimonialSlider';
import Hero from '../../components/home/heroShoesClothes/HeroPhoto';
import './Home.css'
import FindSomethingForYou from '../../components/home/findSth/FindSth';
import { Link } from 'react-router-dom';
import BrandSlider from '../../components/home/brandSlider/BrandSlider';

const Home = () => {

  return (
    <div className="home-container">
      <MainHero />
      <div className='heroes-container'>
        <Link to="/shoes" className='hero-photo'>
          <Hero
            backgroundImage="https://sneakerbeast.pl/9805-thickbox_default/buty-adidas-superstar-c77154.jpg"
            text="SHOES"
          />
        </Link>
        <Link to="/clothes" className='hero-photo'>
          <Hero
            backgroundImage="https://cassette.sphdigital.com.sg/image/harpersbazaar/7cc413b3997418b621595bb1aecd9a427faf6e966610a153357a4d92812748ba"
            text="Clothes">
          </Hero>
        </Link>
      </div>
      {/* <WhyUs /> */}
      <BrandSlider />

      <FindSomethingForYou />

      <TestimonialSlider />
      <Location />
      <HeroSection />
    </div>
  )
};

export default Home;
