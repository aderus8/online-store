import React from 'react';
import './HeaderTyping.css';

const HeaderTypingSmall = ({ title, subtitle }) => {
  return (
    <div className="header-container-small">
      <div className="typing-effect-small">
        {title.split("").map((char, i) => (
          <h6 key={i} style={{ animationDelay: `${i * 0.04}s` }}>
            {char === " " ? "\u00A0" : char}
          </h6>
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

export default HeaderTypingSmall;
