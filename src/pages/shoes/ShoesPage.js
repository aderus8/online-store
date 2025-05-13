import React, { useState } from 'react';
import './ShoesPage.css';
import heroImg from "../../assets/styles/shoes.avif";
import ShoesBanner from './ShoesBanner';
import ProductSlider from './ProductSlider';

const ShoesPage = () => {


    return (
        <div className="shoes-page-container">
            <ShoesBanner />

            <ProductSlider />

            <div className='shoes-page-hero'
                style={{ backgroundImage: `url(${heroImg})` }}>
                <div className='shoes-page-hero-overlay'>
                    <section className='shoes-page-desc'>
                        <h1> Step Into Something Better</h1>
                        <p>
                            At our brand, we believe shoes should do more than just take you from point A to point B — they should move with you. Through early mornings, busy days, and spontaneous plans. Through workouts, walkabouts, and weekend escapes.
                            That’s why every pair we design is built with real life in mind: flexible materials, smart cushioning, and fits that feel like they were made just for you. Whether you're chasing big goals or strolling through slow moments, we’re here to support every step — literally.
                            Our collections blend comfort with style, performance with ease, and timeless design with seasonal trends. You’ll find everyday staples, sport-inspired silhouettes, and city-ready favorites — all in one place.
                            No shortcuts. No compromises. Just great shoes that feel as good as they look.
                            Ready to find your new favorite pair?
                        </p>
                    </section>

                </div>
            </div>



        </div>
    );
};

export default ShoesPage;
