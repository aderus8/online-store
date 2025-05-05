// TrainerCardGroup.js
import React from 'react';
import './CardsGroup.css'
import Card from '../Card';

const CardsGroup = ({ trainers, onCardClick }) => {
  if (!Array.isArray(trainers)) {
    console.error('trainers is not an array:', trainers);
    return null;  // Or render a fallback UI
  }

  return (
    <div className="trainer-card-group">
      {trainers.map((trainer) => (
        <Card
          key={trainer.id}  // Ensure trainer.id is unique
          image={trainer.image}
          name={trainer.name}
          role={trainer.role}
          description={trainer.description}
          onClick={() => onCardClick(trainer)}
        />
      ))}
    </div>
  );
};

export default CardsGroup;
