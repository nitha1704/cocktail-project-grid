import React from "react";
import SearchItemBar from "../components/cocktail/SearchItemBar";
import CocktailListGrid from "../components/cocktail/CocktailListGrid";

const Home = () => {
  return (
    <section className="home-section1">
      <div className="inner container-cocktail-section">
        <SearchItemBar />
        <div className="cocktail-list">
          <CocktailListGrid />
        </div>
      </div>
    </section>
  );
};

export default Home;
