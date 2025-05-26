import React from 'react';
import './ComponentCard.css';

const CardArrivals = ({img, title, subtitle}) => {
  return (
    <div className="card-arrivals" data-aos="zoom-in">
      <img src={img} alt="Minimalist Essentials" className='min-card-img'/>
      <div className="card-arrivals-content">
        <h6> {title}</h6>
        <p> {subtitle}</p>
      </div>
    </div>
  );
};

export default CardArrivals;
