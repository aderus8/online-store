import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ name, price, company, image, onClick }) => {
  return (
    <div className='product-card' onClick={onClick}>
      <div className='product-image-container'>
        <img src={image} alt={name} className='product-image' />
      </div>
      <h3 className='product-name'>{name}</h3>
      <div className='price-company'>
        <p className='product-price-card'>{price} zł</p>
        <p className='product-company'>{company}</p>
      </div>
    </div>
  );
};

export default ProductCard;
