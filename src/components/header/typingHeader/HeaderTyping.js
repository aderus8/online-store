import React from 'react';
import './HeaderTyping.css';

const HeaderTyping = ({ title, subtitle }) => {
  return (
    <div className="header-container">
      <div className="typing-effect">
        {title.split("").map((char, i) => (
          <h2 key={i} style={{ animationDelay: `${i * 0.04}s` }}>
            {char === " " ? "\u00A0" : char}
          </h2>
        ))}
      </div>
      
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

export default HeaderTyping;
