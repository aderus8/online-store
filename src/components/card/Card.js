import React from 'react';
import './Card.css';

const Card = ({ image, name, role, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img className="cardImg" src={image} alt={name} />
      <div className="cardOverlay">
        <div className="cardTitle">{name}</div>
        <div className="cardRole">{role}</div>
        <div className="cardDescription">{description}</div>
      </div>
    </div>
  );
};

export default Card;
