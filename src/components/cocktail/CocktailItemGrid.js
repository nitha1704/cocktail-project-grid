import React from "react";
import { Link } from "react-router-dom";

const CocktailItemGrid = ({ id, name, thumbnail, glassType, alcoholType }) => {
  return (
    <div className="cocktail-item-grid">
      <div className="wrap-cocktail-image-grid-background">
        <div
          className="img-background"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
      </div>
      <div className="cocktail-item-content-grid">
        <p className="cocktail-name">{name}</p>
        <p className="cocktail-glass-type">{glassType}</p>
        <p className="cocktail-alcohol-type">{alcoholType}</p>
        <div className="wrap-button-cocktail-grid">
          <Link
            to={`/cocktail/${id}`}
            className="btn btn-success"
          >
            More Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CocktailItemGrid;
