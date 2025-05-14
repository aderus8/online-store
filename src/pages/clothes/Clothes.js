import React, { useState } from 'react';
import './Clothes.css';
import ClothesBanner from '../../components/clothes/clothesBanner/ClothesBanner';
import ProductSlider from '../../components/slider/productSlider/ProductSlider';
import ClothesGrid from '../../components/clothes/clothesGrid/ClothesGrid';

const Clothes = () => {
  
  return (
    <>
    <div className='clothes-page'>
      <ClothesBanner />  
      <ProductSlider productType="clothing"/>
      <ClothesGrid />

    </div>


  </>
  );
};

export default Clothes;
