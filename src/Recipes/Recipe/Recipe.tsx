import { RecipeType } from "../RecipeType";
import Steps from "../../Steps/Steps";
import IngredientsWithQuantity from "../../IngredientsWithQuantity/IngredientsWithQuantity";
import { useState } from "react";
import { Tags } from "../../Tags/Tags";
import './Recipe.css'

export const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const [showSteps, setShowSteps] = useState<Boolean>(false);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);

  return (
    <div className="recipe-container" >

      <div className="recipe-image"
        style={{
          backgroundImage: `url(${recipe.imageURL})`,
        }}
      />

      <div className="recipe-infos-container">

        <h2>{recipe.name}</h2>

        <div className="recipe-description">
          <p>{recipe.description}</p>
        </div>

        <div className="recipe-tag-container">
          <Tags tags={recipe.tags} />
        </div>

        <div className="recipe-ingredient-list-container">
          Ingrédients:
          <button onClick={() => setShowIngredients(!showIngredients)}>
            {showIngredients ? "Masquer" : "Afficher"}
          </button>
          {showIngredients && (
            <IngredientsWithQuantity
              ingredientsWithQuantity={recipe.ingredientsWithQuantity}
            />
          )}
        </div>
        {recipe.steps && (
          <div className="recipe-steps-container">
            <div className="recipe-steps-controls">
              Etapes de la recette:
              <button onClick={() => setShowSteps(!showSteps)}>
                {showSteps ? "Masquer" : "Afficher"}
              </button>
            </div>
            {showSteps && <Steps steps={recipe.steps} />}
          </div>
        )}
      </div>
    </div >
  );
};

export default Recipe;
