// components/Card.js
import React from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ title, subtitle, image, details, buttonText }) => {
  return (
    <div className="card">
      {image && (
        <img src={image} alt={title} className="card-image" />
      )}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {subtitle && <h3 className="card-subtitle">{subtitle}</h3>}
        <p className="card-details">{details}</p>
        {buttonText && (
          <div className="card-actions">
            <button className="card-button">
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
