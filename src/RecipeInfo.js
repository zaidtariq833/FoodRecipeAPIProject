import React, { useLayoutEffect } from "react";
import { Link, json, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
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
            <span>{jsonParsing.label}</span>
          </div>
          <div className="recipe_Details">
            <h3 className="label_Details">Calories:</h3>
            <span>{jsonParsing.calories}</span>
          </div>
          <div className="recipe_Details">
            <h3 className="label_Details">Cautions:</h3>
            <span>
              {jsonParsing?.cautions?.map((caution) => {
                return <span>{caution}</span>;
              })}
            </span>
          </div>
          <div className="recipe_Details">
            <h3 className="label_Details">Meal Type:</h3>
            {jsonParsing?.mealType?.map((meal) => {
              return <span>{meal}</span>;
            })}
          </div>
          <div className="lists">
            <h3 style={{ color: "orange" }}>Ingredients:</h3>
            {jsonParsing?.ingredients?.map((caution, index) => {
              return (
                <ul>
                  <li key={index} style={{ margin: "10px" }}>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {caution.text}
                    </span>
                    <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                      Quantity:
                    </span>
                    <span style={{ marginLeft: "10px" }}>
                      {caution.quantity}
                    </span>
                    <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                      Weights:
                    </span>
                    <span style={{ marginLeft: "10px" }}>{caution.weight}</span>
                  </li>
                </ul>
              );
            })}
          </div>
          <div>
            <h3 className="label_Details">Preparation:</h3>
            {jsonParsing?.tags?.map((prepare) => {
              return <span>{prepare}</span>;
            })}
          </div>
          <div className="recipe_Details">
            <h3 className="label_Details">Total Weight:</h3>
            <span>{jsonParsing.totalWeight.toFixed(2)}</span>
          </div>
          <div className="recipe_Details">
            <h3 className="label_Details">Yield:</h3>
            <span>{jsonParsing.yield}</span>
          </div>
          <div className="lists">
            <h3 style={{ color: "orange" }}>Digest:</h3>
            {jsonParsing?.digest?.map((digest, index) => {
              return (
                <ul>
                  <li key={index} style={{ margin: "10px" }}>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {digest.label}
                    </span>
                    <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                      Tag:
                    </span>
                    <span style={{ marginLeft: "10px" }}>{digest.tag}</span>
                    <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                      Total:
                    </span>
                    <span style={{ marginLeft: "10px" }}>
                      {digest.total.toFixed(2)}
                    </span>
                    <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                      hasRDI:
                    </span>
                    <span style={{ marginLeft: "10px" }}>{digest.hasRDI}</span>
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
