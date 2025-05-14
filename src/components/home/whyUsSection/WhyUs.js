import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaShoppingCart, FaTruck, FaGift, FaCreditCard } from 'react-icons/fa'; // Importujemy ikony z React Icons
import './WhyUs.css';

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const reasons = [
    {
      icon: <FaShoppingCart size={50} />,
      title: 'Wide Selection of Products',
      description: 'We offer a variety of stylish clothing and shoes for all tastes and occasions.',
    },
    {
      icon: <FaTruck size={50} />,
      title: 'Fast and Reliable Delivery',
      description: 'Get your orders delivered quickly and safely, no matter where you are.',
    },
    {
      icon: <FaGift size={50} />,
      title: 'Exclusive Offers & Discounts',
      description: 'We offer great deals, discounts, and seasonal promotions to help you save more.',
    },
    {
      icon: <FaCreditCard size={50} />,
      title: 'Secure Payment Options',
      description: 'Shop with confidence using secure payment methods and easy checkout.',
    },
  ];

  return (
    <section className="whyus-section" id="whyus">
      <h2 className="whyus-title" data-aos="fade-up">Why Shop With Us?</h2>
      <div className="whyus-cards">
        {reasons.map((reason, index) => (
          <div className="whyus-card" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
            <div className="icon-container">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
