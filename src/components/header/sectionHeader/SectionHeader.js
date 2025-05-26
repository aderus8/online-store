import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="section-header-wrapper">
      <h2 className="section-header">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;  
