import React, { useEffect, useState } from 'react';
import './ClothesHero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClothesHero = ({products}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div class="clothes-hero">
      <div class="clothes-hero-photos" data-aos="fade-up">
        {products.map((product, index) => (
          <a
          key={product.id}
          href={product.link}
          target='_blank'
          rel="noopener norefferer"
             className={`clothes-hero-photo ${index === 0 ? 'chf1' : ''}`}
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <div className="clothes-photo-text">{product.name}</div>
          </a>
                ))}
      </div>
    </div>
  );
};

export default ClothesHero;
