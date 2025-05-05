import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HeroSection.css';

const MainHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleClick = () => {
    console.log("CTA clicked!");
    // możesz tu np. scrollować do sekcji lub nawigować
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
          src="https://videos.pexels.com/video-files/3192198/3192198-uhd_2560_1440_25fps.mp4"
          type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1 data-aos="fade-up">
          Unlock your potential
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
          Football, physical, and mental training – complete support for your athletic growth.          </p>
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

export default MainHero;
