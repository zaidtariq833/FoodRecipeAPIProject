import React from "react";
import { Link, useParams } from "react-router-dom";
import "./RecipeInfo.css";

const RecipeInfo = () => {
  const { id } = useParams();
  const jsonParsing = JSON.parse(id);
  document.title = `${jsonParsing.label}`;
  return (
    <>
      <div className="recipe_Info">
        <Link to="/" style={{ color: "orangered" }}>
          {"<"} Back
        </Link>
        <div className="img_recipe_detail">
          <img
            className="img_food"
            src={jsonParsing.image}
            alt={jsonParsing.label}
          />
        </div>
        <div className="recipes_information">
          <div className="recipe_Details">
            <h3 className="label_Details">Food Name:</h3>
            <span className="recipe_detail_text">{jsonParsing.label}</span>
          </div>
          <div className="recipe_Details">
            <h3 className="label_Details">Calories:</h3>
            <span className="recipe_detail_text">
              {jsonParsing.calories.toFixed(2)}
            </span>
          </div>
          <div className="recipe_Details">
            <h3 className="label_Details">Cautions:</h3>
            <span>
              {jsonParsing?.cautions?.map((caution) => {
                return <span className="recipe_detail_text">{caution}</span>;
              })}
            </span>
          </div>
          <div className="recipe_Details">
            <h3 className="label_Details">Meal Type:</h3>
            {jsonParsing?.mealType?.map((meal) => {
              return <span className="recipe_detail_text">{meal}</span>;
            })}
          </div>
          <div className="lists">
            <h3 className="lists_text">Ingredients:</h3>
            {jsonParsing?.ingredients?.map((caution, index) => {
              return (
                <ul>
                  <li key={index} style={{ margin: "10px" }}>
                    <span className="lists_num">{caution.text}</span>
                    <span
                      className="lists_wieghtage"
                      style={{ fontWeight: "bold", marginLeft: "10px" }}
                    >
                      Quantity:
                    </span>
                    <span className="lists_we" style={{ marginLeft: "10px" }}>
                      {caution.quantity}
                    </span>
                    <span
                      className="lists_qu"
                      style={{ fontWeight: "bold", marginLeft: "10px" }}
                    >
                      Weights:
                    </span>
                    <span className="lists_qu1" style={{ marginLeft: "10px" }}>
                      {caution.weight.toFixed(2)}
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="recipe_Details">
            <h3 className="label_Details">Total Weight:</h3>
            <span className="total_weight_text">
              {jsonParsing.totalWeight.toFixed(2)}
            </span>
          </div>
          <div className="recipe_Details">
            <h3 className="label_Details">Yield:</h3>
            <span className="yield_text">{jsonParsing.yield}</span>
          </div>
          <div className="lists">
            <h3 style={{ color: "orange" }} className="digest_text">
              Digest:
            </h3>
            {jsonParsing?.digest?.map((digest, index) => {
              return (
                <ul>
                  <li key={index} style={{ margin: "10px" }}>
                    <span
                      style={{ color: "red", fontWeight: "bold" }}
                      className="digest_fat"
                    >
                      {digest.label}
                    </span>
                    <span
                      style={{ fontWeight: "bold", marginLeft: "10px" }}
                      className="digest_tags"
                    >
                      Tag:
                    </span>
                    <span
                      style={{ marginLeft: "10px" }}
                      className="digest_tags"
                    >
                      {digest.tag}
                    </span>
                    <span
                      style={{ fontWeight: "bold", marginLeft: "10px" }}
                      className="digest_tags"
                    >
                      Total:
                    </span>
                    <span
                      style={{ marginLeft: "10px" }}
                      className="digest_tags"
                    >
                      {digest.total.toFixed(2)}
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeInfo;
