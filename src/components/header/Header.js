import React from 'react';
import './Header.css';

const Header = ({ title, subtitle }) => {
  return (
    <div className="header-container">
      {/* Animacja dla tytułu */}
      <h1 className="typing-effect">
        {title.split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.04}s` }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      
      {/* Animacja dla podtytułu */}
      {subtitle && (
        <p className="typing-subtitle">
          {subtitle.split("").map((char, i) => (
            <span key={i} style={{ animationDelay: `${(title.length + i) * 0.04}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default Header;
