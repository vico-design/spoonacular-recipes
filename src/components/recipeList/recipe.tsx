import React from "react";
import { Link } from "react-router-dom";
import { IRecipe } from "../../pages/search";
import "./styles.css";

interface IRecipeItem {
  recipe: IRecipe;
}

const RecipeItem = (props: IRecipeItem) => {
  return (
    <div className="recipe-container">
      <img src={props.recipe.image} />
      <Link to={`/recipe/${props.recipe.id}`} className="recipe-link">
        <h1>{props.recipe.title}</h1>
      </Link>
    </div>
  );
};

export default RecipeItem;
