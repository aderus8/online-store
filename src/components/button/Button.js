import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const CTAButton = ({ to = '#', children, variant = 'gold' }) => {
  return (
    <div className="cta-button">
      <Link to={to} className={`cta-button-get ${variant}`}>
        {children}
      </Link>
    </div>
  );
};

export default CTAButton;
