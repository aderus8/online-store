import React from 'react';
import './FindSth.css';
import sport from "../../../assets/styles/sport.jpg";
import casual from "../../../assets/styles/casual.jpg";
import elegant from "../../../assets/styles/elegant.avif";
import shoes from "../../../assets/styles/shoes.jpg";
import SectionHeader from '../../../components/header/sectionHeader/SectionHeader';

const categories = [
    { image: sport, label: "Sports Style" },
    { image: elegant, label: "Elegant Style" },
    { image: casual, label: "Casual Style" },
    { image: shoes, label: "Shoes" },
];

const FindSomethingForYou = () => {
    return (
        <div className="find-your-style-section">
            <SectionHeader
                title="Find Something for You!"
                subtitle="We offer a wide selection of products to match your style and needs. Whether you’re looking for athletic wear, elegant fashion, or casual pieces, you’ll find something perfect here. Choose a category and discover our top picks!"
            />
            <div className="style-options">
                {categories.map((cat, index) => (
                    <div className="style-option" key={index}>
                        <div className="image-container">
                            <img src={cat.image} alt={cat.label} />
                            {/* <div className="overlay">
                <button className="category-btn">Shop Now</button>
              </div> */}
                            <div className="overlay">
                                <span className="overlay-text">Discover</span>
                            </div>

                        </div>
                        <p>{cat.label}</p>
                    </div>
                ))}
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
