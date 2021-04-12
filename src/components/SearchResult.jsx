import React from "react";
import "../styles/searchresult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const SearchResult = ({
  imageUrl,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="searchResult">
      <img src={imageUrl} alt={title} />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__info__top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__info__bottom">
          <div className="searchResult__info__bottom__left">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__info__bottom__right">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
