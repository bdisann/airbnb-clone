import { Button } from "@material-ui/core";
import React from "react";
import SearchResult from "../components/SearchResult";
import Image1 from "../assets/images/image-1.jpg";
import Image2 from "../assets/images/image-2.jpg";
import Image3 from "../assets/images/image-3.jpg";
import "../styles/searchpage.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays - 26 august to 30 august - 2 guest</p>
        <h1>Stay Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        imageUrl={Image1}
        title="Super Deluxe Room House Guest"
        location="Private room in Batu City"
        description="1 guest - 1 bedroom - 2 bed - 2 bathroom - kitchen - wifi - free parking alot"
        star="5.5"
        price="$100 / night"
        total="$1000 total"
      />
      <SearchResult
        imageUrl={Image2}
        title="Super Elegant Room House Guest"
        location="Private room in Malang City"
        description="1 guest - 1 bedroom - 2 bed - 2 bathroom - kitchen - wifi - free parking alot"
        star="5.5"
        price="$100 / night"
        total="$1000 total"
      />
      <SearchResult
        imageUrl={Image3}
        title="Super Minimalism Room House Guest"
        location="Private room in Batu City"
        description="1 guest - 1 bedroom - 2 bed - 2 bathroom - kitchen - wifi - free parking alot"
        star="5.5"
        price="$100 / night"
        total="$1000 total"
      />
    </div>
  );
};

export default SearchPage;
