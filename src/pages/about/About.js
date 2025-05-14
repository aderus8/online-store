import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css'; // Create this file for styling
import AboutHero from '../../components/about/heroAbout/AboutHero';
import photo1 from '../../assets/styles/store1.jpg'; // Przykładowe lokalne zdjęcie
import photo2 from '../../assets/styles/store2.jpg'; // Przykładowe lokalne zdjęcie
import photo3 from '../../assets/styles/store3.jpg'; // Przykładowe lokalne zdjęcie
import LookingAheadHero from '../../components/about/heroLookingAhead/LookingAheadHero';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <AboutHero />
      <div className="about-container">
        
        {/* Sekcja 1 */}
        <section className="about-hero" data-aos="fade-up">
          <div className='section-div'>
            <div className='section-div-text'>
              <h3>About Our Company</h3>
              <p>
                At out company, we blend fashion with function to help you move through life with confidence.
                Since day one, our mission has been to deliver high-quality footwear and apparel that speaks to individuality and bold expression.
              </p>
            </div>
            <div className="about-image-container" style={{ backgroundImage: `url(${photo1})` }}>
              <div className="overlay">
                <span className="overlay-text">Discover</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja 2 */}
        <section className="about-values" data-aos="fade-up" data-aos-delay="200">
          <div className='section-div'>
            <div className="about-image-container" style={{ backgroundImage: `url(${photo2})` }}>
              <div className="overlay">
                <p className="overlay-text">Our Values</p>
              </div>
            </div>
            <div className='section-div-text'>
              <h3>What We Stand For</h3>
                <p><strong>Quality Craftsmanship:</strong> We use only the finest materials to ensure durability and comfort.</p>
                <p><strong>Timeless Style:</strong> Our designs are inspired by both urban culture and timeless trends.</p>
                <p><strong>Customer Focus:</strong> We listen. We learn. We evolve — for you.</p>
            </div>
          </div>
        </section>

        {/* Sekcja 3 */}
        <section className="about-mission" data-aos="fade-up" data-aos-delay="300">
          <div className='section-div'>
            <div className='section-div-text'>
              <h3>Our Mission</h3>
              <p>
                We empower people through style — helping every step feel like a statement.
                Whether you're walking city streets or heading into something big, UrbanStep is made to go with you.
              </p>
            </div>
            <div className="about-image-container" style={{ backgroundImage: `url(${photo3})` }}>
              <div className="overlay">
                <span className="overlay-text">Empowerment</span>
              </div>
            </div>
          </div>
        </section>


        {/* Sekcja 4
        <section className="about-vision" data-aos="fade-up" data-aos-delay="400">
          <h3>Looking Ahead</h3>
          <p>
            We're committed to sustainability, innovation, and expanding our community globally.
            UrbanStep isn’t just a brand — it’s a movement. And you're part of it.
          </p>
        </section> */}
      </div>
      <LookingAheadHero/>

    </div>
  );
};

export default About;
