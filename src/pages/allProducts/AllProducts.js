import React, { useState, useEffect } from 'react';
import productsDATA from '../../components/productsData';  // Import produktów
import './AllProducts.css';
import HeaderTyping from '../../components/header/HeaderTyping';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(productsDATA); // Zobacz, co zawiera ta zmienna
    if (productsDATA && Array.isArray(productsDATA.products)) {
      setProducts(productsDATA.products);
    } else {
      console.error('productsDATA is not an array:', productsDATA);
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

    if (productsDATA && Array.isArray(productsDATA.products)) {
      setProducts(productsDATA.products);
    } else {
      console.error('productsDATA is not an array:', productsDATA);
    }
  }, []);


  return (
    <div className='all-products-page-container'>
      <HeaderTyping title='All products'></HeaderTyping>

      <div className='all-products-container'>
        {products.length > 0 ? (
          products.map((product, index) => (<div
            key={product.id}
            className='product-card'
            data-aos='fade-up'
            data-aos-delay={index * 100}
          >
            <div className='product-image-container'>
              <img src={product.image} alt={product.name} className="product-image" /></div>
            <h3 className="product-name">{product.name}</h3>
            <div className='price-company'><p className="product-price">{product.price} zł</p>
              {/* <p className="product-description">{product.description}</p> */}
              <p className="product-company">{product.company}</p>
            </div>
            {/* <div className='product-buttons'>
              <button className="add-to-cart">Add to cart</button>
              <button className='view-details-button'>View details
                {/* <div className="view-details-inside">Zobacz szczegóły</div> */}
              {/* </button> */}
            {/* // </div> */} 
          </div>

          ))
        ) : (
          <p>Brak produktów do wyświetlenia</p>
        )}
      </div>


    </div>
  );
};

export default AllProducts;
