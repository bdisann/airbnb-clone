import React from "react";
import Banner from "../components/Banner";
import HomeSection from "../components/HomeSection";
import { ITEM_CARD_ONE, ITEM_CARD_TWO } from "../data/itemCard";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <HomeSection itemCard={ITEM_CARD_ONE} />
      <HomeSection itemCard={ITEM_CARD_TWO} />
    </div>
  );
};

export default Home;
