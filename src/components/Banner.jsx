import React, { useState } from "react";
import { Button } from "@material-ui/core";

import "../styles/banner.css";
import Search from "./Search";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();
  const [showSearchDate, setShowSearchDate] = useState(false);

  return (
    <>
      <div className="banner__search">
        {showSearchDate && <Search />}
        <Button
          onClick={() => setShowSearchDate(!showSearchDate)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearchDate ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className={!showSearchDate ? "banner" : "banner blured"}>
        <div className="banner__info">
          <h1>Get out and stretch your imagination.</h1>
          <h5>
            Plan of the different kind, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odit, optio?
          </h5>
          <Button onClick={() => history.push("/search")} variant="outlined">
            Explore & Book Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Banner;
