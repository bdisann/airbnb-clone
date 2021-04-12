import React from "react";
import "../styles/card.css";

const Card = ({ imageUrl, title, description, price }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        {price && <h3>{price}/night</h3>}
      </div>
    </div>
  );
};

export default Card;
