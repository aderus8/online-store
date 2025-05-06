// components/findSomethingForYou/FindSomethingForYou.js
import React from 'react';
import './FindSth.css'; // Add styles for the section
import sport from "../../../assets/styles/sport.jpg";
import casual from "../../../assets/styles/casual.jpg";
import elegant from "../../../assets/styles/elegant.avif";
import shoes from "../../../assets/styles/shoes.jpg";
import SectionHeader from '../../../components/header/sectionHeader/SectionHeader';

const FindSomethingForYou = () => {
  return (
    <div className="find-your-style-section">
      <SectionHeader 
        title="Find Something for You!" 
        subtitle="We offer a wide selection of products to match your style and needs. Whether you’re looking for athletic wear, elegant fashion, or casual pieces, you’ll find something perfect here. Choose a category and discover our top picks!"
      />
      <div className="style-options">
        <div className="style-option">
        <img src={sport} alt="Sports Style" />
        <p>Sports Style</p>
          {/* <button className="category-btn">Shop Now</button> */}
        </div>
        <div className="style-option">
        <img src={elegant} alt="Elegant Style" />
          <p>Elegant Style</p>
          {/* <button className="category-btn">Shop Now</button> */}
        </div>
        <div className="style-option">
        <img src={casual} alt="Casual Style" />
        <p>Casual Style</p>
          {/* <button className="category-btn">Shop Now</button> */}
        </div>
        <div className="style-option">
        <img src={shoes} alt="Shoes" />
        <p>Shoes</p>
          {/* <button className="category-btn">Shop Now</button> */}
        </div>
      </div>
      <div className="style-explore-more">
        <h3>Can’t Decide?</h3>
        <p>Explore all categories and discover our best-selling products in one place.</p>
        <button className="explore-all-btn">Explore All Products</button>
      </div>
    </div>
  );
};

export default FindSomethingForYou;
