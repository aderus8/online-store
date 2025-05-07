import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutHero.css';
import heroImage from "../../assets/styles/store5.jpg";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-hero-section"
    style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="about-hero-overlay" data-aos="fade-up">
        <h1>Who We Are</h1>
        <p>
          Discover the story behind our brand — from bold ideas to timeless design.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
