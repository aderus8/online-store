import React, { useEffect, useState } from 'react';
import './OfferHero.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const OfferHero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

    return (
  <div class="offer-hero">
    
    <div class="offer-hero-left" data-aos="fade-up">
      <h2>Dress Up.</h2>
      <h2>Lace Up.</h2>
      <h2>Stand Out.</h2>
    </div>

    <div class="offer-hero-photos" data-aos="fade-up">
      <div class="offer-hero-photo hf1">
        <div class="photo-text">Fresh Drops</div>
      </div>
      <div class="offer-hero-photo hf2">
        <div class="photo-text">Street Style</div>
      </div>
      <div class="offer-hero-photo hf3">
        <div class="photo-text">Runway Ready</div>
      </div>
    </div>
  </div>



    );
};

export default OfferHero;
