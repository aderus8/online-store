import React from 'react';
import { useParams } from 'react-router-dom';
import productsDATA from '../../components/productsData';
import './ProductDetails.css';

const ProductDetails = () => {

    const { id } = useParams();
    const product = productsDATA.products.find(p => String(p.id) === id);

    if (!product) return <p> Product not found. </p>

    return (
        <div className="product-details-container">
            <div className='product-details-img-container'>
                <img src={product.image} alt={product.name} />
            </div>
            <div className='product-details'>
                <h5>{product.name}</h5>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Brand:</strong> {product.company}</p>
                <p><strong>Color:</strong> {product.color}</p>
                <p><strong>Size:</strong> {product.size}</p>
                {product.url && (
                    <p>
                        <a href={product.url} target="_blank" rel="noopener noreferrer">
                            View on store
                        </a>
                    </p>
                )}
            </div>

        </div>
    )
}
export default ProductDetails;