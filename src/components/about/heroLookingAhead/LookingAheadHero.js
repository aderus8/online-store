import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LookingAheadHero.css';
import bgImage from '../../../assets/styles/store4.jpg'; // Upewnij się, że masz ten plik

const LookingAheadHero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="looking-ahead-hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="looking-ahead-hero-overlay" data-aos="fade-up">
          <h2>Looking Ahead</h2>
          <p>
            We’re committed to innovation, sustainability, and global growth. It isn't just a brand — it’s a movement. And you're part of it.
          </p>
          <button onClick={() => navigate('/all-products')}>Explore Our World</button>
      </div>
    </section>
  );
};

export default LookingAheadHero;
