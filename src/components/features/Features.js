// src/components/Features.jsx
import React from 'react';
import { FaUserCheck, FaVideo, FaCalendarAlt, FaFutbol } from 'react-icons/fa';
import './Features.css';

const features = [
  {
    icon: <FaUserCheck />,
    title: 'Personalized Training',
    description: 'Every session tailored to player’s level, position and goals.',
  },
  {
    icon: <FaVideo />,
    title: 'Video Analysis',
    description: 'Technical breakdown of performance with feedback.',
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Flexible Schedule',
    description: 'Choose training times that work for you.',
  },
  {
    icon: <FaFutbol />,
    title: 'Qualified Coaches',
    description: 'UEFA licensed coaches and former pro players.',
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="features-title">What You Get</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
