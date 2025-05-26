import React from 'react';
import './CardsGroup.css'
import Card from '../Card';

const CardsGroup = ({ cardsData: data, onCardClick }) => {
  if (!Array.isArray(data)) {
    console.error('is not an array:', data);
    return null;  
  }

  return (
    <div className="data-card-group">
      {data.map((d) => (
        <Card
          key={d.id}  
          image={d.image}
          name={d.name}
          role={d.role}
          description={d.description}
          onClick={() => onCardClick(d)}
        />
      ))}
    </div>
  );
};

export default CardsGroup;
