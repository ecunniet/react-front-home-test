import { ListOfRecipes } from "./RecipeType";
import Recipe from "./Recipe/Recipe";
import './Recipes.css';

export const Recipes = ({ recipes }: { recipes: ListOfRecipes }) => {
  return (
    <div className="recipes-list-container">

      <div className="recipes-list">
        {recipes.map((obj) => (
          <Recipe recipe={obj} key={obj.name} />
        ))}
      </div>

    </div>
  );
};

export default Recipes;
