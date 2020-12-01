import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

// Component
import Loading from "../../components/Loading";

const CocktailSinglePageGrid = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const [loading, setLoading] = useState(true);
  const [singleCocktail, setSingleCocktail] = useState([]);

  const { id } = useParams();

  const fetchSingleCocktail = useCallback(async () => {
    setLoading(true);

    try {

      const data = await fetch(`${url}${id}`).then((res) => res.json());
      const { drinks } = data;

      if (drinks) {
        const newDrink = drinks.map((item) => {
          return {
            idSingleCocktail: item.idDrink,
            name: item.strDrink,
            thumbnail: item.strDrinkThumb,
            category: item.strCategory,
            alcoholType: item.strAlcoholic,
            glassType: item.strGlass,
            instructions: item.strInstructions,
            ingredients: [
              item.strIngredient1,
              item.strIngredient2,
              item.strIngredient3,
              item.strIngredient4,
              item.strIngredient5,
            ],
          };
        });
        setSingleCocktail(newDrink);
      } else {
        setSingleCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setSingleCocktail(null);
      setLoading(false);
    }
  },[id]);

  useEffect(() => {
    fetchSingleCocktail();
  }, [id, fetchSingleCocktail]);

  if (loading) {
    return <Loading />;
  }

  if (!singleCocktail) {
    return (
      <div className="no-cocktail-match">
        <div className="wrap-no-cocktail-match">
          No Cocktail Matched Your Search Criteria
        </div>
      </div>
    );
  }

  const {
    name,
    thumbnail,
    category,
    glassType,
    instructions,
    ingredients,
  } = singleCocktail[0];
  return (
    <section className="cocktail-single-page">
      <h1 className="title">{name}</h1>
      <div className="cocktail-single-page-grid">
        <div className="cocktail-single-page-thumbnail">
          <img src={thumbnail} alt="" className="img-fit" />
        </div>
        <div className="cocktail-single-page-content">
          <div className="name drink-data">
            <span className="drink-info">Name :</span>
            <span className="bold">{name}</span>
          </div>
          <div className="category drink-data">
            <span className="drink-info">Category :</span>
            <span className="bold">{category}</span>
          </div>
          {/* <div className="alcoholType drink-data">
              <span className="drink-info">Drink Type :</span>
              <span className="bold">{alcoholType}</span>
            </div> */}
          <div className="glassType drink-data">
            <span className="drink-info">Glass Type :</span>
            <span className="bold">{glassType}</span>
          </div>
          <div className="instructions drink-data">
            <span className="drink-info">Instructions :</span>
            <span className="bold">{instructions}</span>
          </div>
          <div className="ingredients drink-data">
            <span className="drink-info">Ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? (
                <span key={index} className="bold">{(index ? ", " : "") + item}</span>
              ) : null;
            })}
          </div>
        </div>
      </div>
      <div className="wrap-button">
        <Link to="/" className="btn btn-success">
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default CocktailSinglePageGrid;
