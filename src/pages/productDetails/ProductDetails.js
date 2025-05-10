import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsDATA from '../../components/productsData';
import './ProductDetails.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderTyping from '../../components/header/HeaderTyping';
import SectionHeader from '../../components/header/sectionHeader/SectionHeader';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsDATA.products.find(p => String(p.id) === id);

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!product) return <p>Product not found.</p>;

  product.availableSizes = ["S", "M", "L", "XL"];

  // 🟡 Produkty tej samej marki
  const relatedProducts = productsDATA.products.filter(
    (p) => p.company === product.company && String(p.id) !== id
  );

  // 🟡 Produkty w tym samym kolorze
  const colorRelatedProducts = productsDATA.products.filter(
    (p) => p.color === product.color && String(p.id) !== id
  );

  return (
    <>
      <div className="product-details-container" data-aos="fade-up">
        <div className="product-details-img-container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h5>{product.name}</h5>
          <p className="product-price">{product.price} zl</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Brand:</strong> {product.company}</p>
          <p><strong>Color:</strong> {product.color}</p>
          <p><strong>Size:</strong> {product.size}</p>

          {product.url && (
            <p>
              <a className="external-link" href={product.url} target="_blank" rel="noopener noreferrer">
                View in store
              </a>
            </p>
          )}

          <div className="size-selector">
            <label htmlFor="size">Choose size:</label>
            <select id="size" className="size-dropdown">
              <option value="">-- choose --</option>
              {product.availableSizes?.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="product-actions">
            <button className="add-to-cart-btn">Add to cart</button>
            <button className="wishlist-btn">♡ Add to favorites</button>
            <button className="share-btn">🔗 Share</button>
          </div>
        </div>
      </div>

      {/* Slider for Related Products by Company */}
      {relatedProducts.length > 0 && (
        <div className="related-products-slider" data-aos="fade-up">
<h3> Explore more styles from {product.company} </h3>       
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              0: { slidesPerView: 2 }
            }}
          >
            {relatedProducts.map((item) => (
              <SwiperSlide key={item.id} >
                <div
                  className="slider-item"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <img src={item.image} alt={item.name} className="slider-product-img" />
                  <h4>{item.name}</h4>
                  <p>{item.price} zł</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Slider for Related Products by Color */}
      {colorRelatedProducts.length > 0 && (
        <div className="related-products-slider" data-aos="fade-up">
<h3>Bring more {product.color} into your wardrobe </h3>      
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              0: { slidesPerView: 2 }
            }}
          >
            {colorRelatedProducts.map((item) => (
              <SwiperSlide key={item.id} >
                <div
                  className="slider-item"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <img src={item.image} alt={item.name} className="slider-product-img" />
                  <h4>{item.name}</h4>
                  <p>{item.price} zł</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className='bottom'></div>
    </>
  );
};

export default ProductDetails;
