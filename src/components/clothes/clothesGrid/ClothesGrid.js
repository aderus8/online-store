import React from 'react';
import './ClothesGrid.css';
import productsDATA from '../../productsData';
import { useNavigate } from 'react-router-dom';

const ClothesGrid = ({products}) => {
  const navigate = useNavigate();

  return (
    <div className="clothes-grid">
      {products.length > 0 ? (
        products.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.image} alt={product.name} />
            <div className="product-overlay">
              <span>{product.name}</span>
            </div>
          </div>
        ))
      ) : (
        <p>No products match the selected criteria.</p>
      )}
    </div>
  );
};

export default ClothesGrid;
