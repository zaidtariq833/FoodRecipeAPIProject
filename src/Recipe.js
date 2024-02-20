import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Recipe.css";
import RecipeInfo from "./RecipeInfo";
import { Link } from "react-router-dom";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const userSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      const api = `https://api.edamam.com/search?q=${search}&app_id=8cace501&app_key=dbf682ac950f7e11429b2af073644609`;
      const fetch = await axios.get(api);
      setRecipes(fetch.data.hits);
    };
    fetchRecipes();
  }, [search]);

  console.log(recipes, "recipes checking");
  return (
    <>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => userSearch(e)}
        className="input_search_recipe"
        placeholder="Search Recipe..."
      />
      {search === "" ? (
        <div className="search_empty">
          <h1 className="search_empty_text">Search Your Favourite Recipe</h1>
        </div>
      ) : (
        <div className="cards_recipe">
          {recipes.map((data, index) => (
            <div className="mainDiv" key={index}>
              {console.log(index, "index")}
              <div className="div_img">
                <img
                  src={data.recipe.image}
                  alt={data.recipe.cuisineType}
                  className="image_recipe"
                />
                <div className="info_Recipe">
                  <div className="recipe_name">
                    <span className="recipeLabel">Name:</span>
                    <h4 className="recipeType">{data.recipe.label}</h4>
                  </div>
                  <div className="cuisine_type">
                    <span className="cuisineTypeLabel">Cuisine Type:</span>
                    <h4 className="cuisineType">
                      {data.recipe.cuisineType[0]}
                    </h4>
                  </div>
                  <div className="calories">
                    <span className="cuisineTypeLabel">Calories:</span>
                    <span className="calories_num">
                      {data.recipe.calories.toFixed(2)}
                    </span>
                  </div>
                  <div className="health_labels">
                    <span className="health_text">Health Labels:</span>
                    <div className="healthDiv">
                      {data.recipe.healthLabels
                        .slice(0, 3)
                        .map((health, index) => (
                          <span key={index} className="healthLabels">
                            {health}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Recipe;
