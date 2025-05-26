import React from 'react';
import './Clothes.css';
import ClothesBanner from '../../components/clothes/clothesBanner/ClothesBanner';
import ProductSlider from '../../components/slider/productSlider/ProductSlider';
import ClothesHero from '../../components/clothes/hero/ClothesHero';
import productsDATA from '../../components/productsData';
import HeaderTypingSmall from '../../components/header/typingHeader/HeaderTypingSmall';

const Clothes = () => {
  const products = productsDATA.products
    .filter(p => p.type === 'clothing' || p.type === 't-shirt')
    .slice(0, 5);
  const products2 = productsDATA.products
    .filter(p => p.type === 'clothing' || p.type === 't-shirt')
    .slice(6, 11);

  return (
    <>
      <div className='clothes-page'>
        <ClothesBanner />
        <ProductSlider productType="clothing" />
        <HeaderTypingSmall title="Step into the season with our handpicked selection of standout pieces — where modern streetwear meets timeless comfort. 
  Whether you're updating your everyday essentials or searching for bold new statements, our curated collection has something for everyone. 
  Explore exclusive drops, fresh prints, and iconic fits from top brands. Style starts here."
        />
        <ClothesHero products={products} />
        <ClothesHero products={products2} />
      </div>


    </>
  );
};

export default Clothes;
