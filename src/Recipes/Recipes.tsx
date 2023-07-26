import { ListOfRecipes } from "./RecipeType";
import Recipe from "./Recipe/Recipe";
import './Recipes.css';
import { useContext, useMemo } from "react";
import { ActiveFilterContext } from "../App";
import { filterRecipes } from "./RecipeData";

const Recipes = () => {
  const { activeFilters } = useContext(ActiveFilterContext)

  const recipesList: ListOfRecipes = useMemo(() => filterRecipes(activeFilters), [activeFilters])

  return (
    <div className="recipes-list-container">

      <div className="recipes-list">
        {recipesList.length > 0 ? recipesList.map((obj) => (
          <Recipe recipe={obj} key={obj.name} />
        )) : "Aucune recette ne semble correspondre à votre recherche."}
      </div>

    </div>
  );
};

export default Recipes;
