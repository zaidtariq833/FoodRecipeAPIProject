import "./App.css";
import Recipe from "./Recipe/Recipe";
import { Routes, Route } from "react-router-dom";
import RecipeInfo from "./RecipeInfo/RecipeInfo";

function App() {
  return (
    <div className="App">
      <Recipe />
    </div>
  );
}

export default App;
