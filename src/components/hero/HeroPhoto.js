import React, { useState } from 'react';
import './HeroPhoto.css';

const Hero = ({ backgroundImage, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section 
            className={`hero-photo ${isHovered ? 'hovered' : ''}`} 
            style={{ backgroundImage: `url(${backgroundImage})` }} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='hero-photo-overlay'>
            <div className="hero-photo-content">
                <h1>{text}</h1>
            </div>
            </div>
        </section>
    );
};

export default Hero;
