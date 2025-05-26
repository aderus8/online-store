import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./BrandSlider.css";
import adidas from "../../../assets/logos/adidas.svg"; 
import nike from "../../../assets/logos/nike.png";
import ck from "../../../assets/logos/ck.png"; 
import nb from "../../../assets/logos/nb.png"; 
import puma from "../../../assets/logos/puma.svg";
import reebok from "../../../assets/logos/reebook.svg"; 
import tommy from "../../../assets/logos/tommy.svg"; 
import zara from "../../../assets/logos/zara.png"; 

const brands = [
    { name: "Nike", logo: nike },
    { name: "Adidas", logo: adidas },
    { name: "Tommy Hilfiger", logo: tommy },
    { name: "Puma", logo: puma },
    { name: "Reebok", logo: reebok },
    { name: "New Balance", logo: nb },
    { name: "Calvin Klein", logo: ck },
    { name: "Zara", logo: zara }
];

const BrandSlider = () => {
  return (
    <div className="slider-container">
    <div className="brand-slider-wrapper">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        autoplay={{ delay: 1200, disableOnInteraction: false }}
        loop={true}
        modules={[FreeMode, Autoplay]}
        className="brand-swiper"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="brand-swiper-slide">
            <img
              src={brand.logo}
              alt={brand.name}
              className="brand-logo"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default BrandSlider;
