// components/ProductSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductSlider.css'; // opcjonalny własny styl
import productsDATA from '../../productsData';
import ProductCard from '../../product/productCard/ProductCard';

const ProductSlider = ({productType}) => {
  const products = productsDATA.products
  .filter(product => product.type === productType)
  .slice(0, 10); // wybrane 10 najnowszych

  

  return (
    <div className="product-1-slider-wrapper" data-aos="fade-up">
      <h2 className="slider-title">New Arrivals</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard
              name={product.name}
              price={product.price}
              company={product.company}
              image={product.image}
              onClick={() => window.location.href = `/product/${product.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
