import React from 'react';
import { useParams } from 'react-router-dom';
import productsDATA from '../../components/productsData';
import './ProductDetails.css';

const ProductDetails = () => {

    const { id } = useParams();
    const product = productsDATA.products.find(p => String(p.id) === id);

    if (!product) return <p> Product not found. </p>
product.availableSizes = ["S", "M", "L", "XL"];

    return (
<div className="product-details-container">
  <div className="product-details-img-container">
    <img src={product.image} alt={product.name} />
  </div>
  <div className="product-details">
    <h5>{product.name}</h5>
    <p className="product-price">${product.price}</p>
    <p><strong>Opis:</strong> {product.description}</p>
    <p><strong>Marka:</strong> {product.company}</p>
    <p><strong>Kolor:</strong> {product.color}</p>
    <p><strong>Rozmiar:</strong> {product.size}</p>

    {product.url && (
      <p>
        <a className="external-link" href={product.url} target="_blank" rel="noopener noreferrer">
          Zobacz w sklepie
        </a>
      </p>
    )}

<div className="size-selector">
  <label htmlFor="size">Wybierz rozmiar:</label>
  <select id="size" className="size-dropdown">
    <option value="">-- wybierz --</option>
    {product.availableSizes?.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

    <div className="product-actions">
      <button className="add-to-cart-btn">Dodaj do koszyka</button>
      <button className="wishlist-btn">♡ Dodaj do ulubionych</button>
      <button className="share-btn">🔗 Udostępnij</button>
    </div>
  </div>
</div>

    )
}
export default ProductDetails;