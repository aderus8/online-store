import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CoachHome.css';

const CoachHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Funkcja dla efektu parallax
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax-background');
      const offset = window.pageYOffset;
      parallax.style.transform = `translateY(${offset * 0.5}px)`; // Można dostosować szybkość efektu
    };

    // Dodajemy nasłuchiwanie przewijania
    window.addEventListener('scroll', handleScroll);

    // Sprzątanie po zakończeniu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="coach-home-section" id="coach-home">
      {/* Efekt parallax */}
      <div className="parallax-background"></div>
      <div className="content-wrapper">
        <h2 className="coach-home-title" data-aos="fade-up">
          Meet Our Expert Coaches
        </h2>
        <div className="coach-home-description" data-aos="fade-up">
          <p>
            Our coaches are former professionals with years of experience
            both on and off the field. They are dedicated to helping players
            reach their full potential, focusing not only on technical skills
            but also on mental strength and team dynamics.
          </p>
          <p>
            With a deep understanding of the game and personalized training
            plans, our coaches provide the perfect environment for growth and
            improvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoachHome;
