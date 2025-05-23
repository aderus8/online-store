import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HeroSection.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


  return (
    <section className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source 
          src="https://videos.pexels.com/video-files/7100933/7100933-uhd_2560_1440_30fps.mp4"
          type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1 data-aos="fade-up">
            Defined by Details
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
          Discover fashion that speaks for itself.          </p>
          <button
            className="hero-video-cta-button"
            onClick={handleClick}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
