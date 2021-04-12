import React, { useState } from "react";
import "../styles/search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router";

const Search = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelection = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelection} />
      <div className="search__text">
        <h2>
          Number of Guests
          <PeopleIcon />
        </h2>

        <input type="number" min={0} defaultValue={2} />
        <Button onClik={() => history.push("/search")}>Search Airbnb</Button>
      </div>
    </div>
  );
};

export default Search;
