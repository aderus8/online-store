import React, { useEffect, useState } from 'react';
import './ShoesBanner.css';
import { useNavigate } from 'react-router-dom';
import img1 from "../../assets/styles/shoesimg1.avif";
import img2 from "../../assets/styles/shoesimg2.avif";
import img3 from "../../assets/styles/shoesimg3.avif";

const slides = [
  {
    image: img1,
    title: 'Step into Your New Favorites',
    subtitle: 'Fresh styles. Perfect fit. Unmatched comfort.',
    link: '/product/53'
  },
  {
    image: img2,
    title: 'Run Further, Feel Better',
    subtitle: 'Performance footwear for every move.',
    link: '/product/55'
  },
  {
    image: img3,
    title: 'Street Meets Style',
    subtitle: 'Urban shoes built for everyday life.',
    link: '/product/52'
  }
];

const ShoesBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);

    return() => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate(slides[currentSlide].link);
  };

  return (
    <section className="shoes-banner"
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
>
      <div className="shoes-banner-overlay">
        <div className="shoes-banner-content">
          <h1 className="shoes-banner-title">{slides[currentSlide].title}</h1>
          <p className="shoes-banner-subtitle">{slides[currentSlide].subtitle}</p>
          <button className="shoes-banner-button" onClick={handleClick}>
            Shop Shoes
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoesBanner;
