import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUsers, FaTrophy, FaChartLine, FaBrain } from 'react-icons/fa'; // Importujemy ikony z React Icons
import './WhyUs.css';

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const reasons = [
    {
      icon: <FaUsers size={50} />,
      title: 'Individual Approach',
      description: 'Each player has unique needs and potential. We tailor training to your goals.',
    },
    {
      icon: <FaTrophy size={50} />,
      title: 'Professional Coaching',
      description: 'Experienced coaches with backgrounds in top academies and clubs.',
    },
    {
      icon: <FaChartLine size={50} />,
      title: 'Skill & Mental Development',
      description: 'We focus on technique, game intelligence, and building mental strength.',
    },
    {
      icon: <FaBrain size={50} />,
      title: 'Progress Tracking',
      description: 'We track your progress and adjust the plan to ensure constant improvement.',
    },
  ];

  return (
    <section className="whyus-section" id="whyus">
      <h2 className="whyus-title" data-aos="fade-up">Why Train With Us?</h2>
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
