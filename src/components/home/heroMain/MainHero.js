import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../heroDetails/HeroSection.css';
import { useNavigate } from 'react-router-dom';

const MainHero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleClick = () => {
    navigate("/all-products")    
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
          src="https://videos.pexels.com/video-files/8306452/8306452-uhd_2732_1440_25fps.mp4"
          type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1 data-aos="fade-up">
            Step into style
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Discover the latest fashion in footwear and apparel – designed to elevate your everyday.          </p>
          <button
            className="hero-video-cta-button"
            onClick={handleClick}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Discover Our Collection          
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
