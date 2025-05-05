// SectionHeader.js
import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="section-header-wrapper">
      <h1 className="section-header">{title}</h1>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;  
