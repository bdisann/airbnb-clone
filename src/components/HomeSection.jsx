import React from "react";
import "../styles/homeSection.css";
import Card from "./Card";

const HomeSection = ({ itemCard }) => {
  return (
    <div className="home__section">
      {itemCard.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default HomeSection;
