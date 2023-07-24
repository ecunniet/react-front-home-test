import { IngredientType } from "./IngredientType";
import Ingredient from "./Ingredient";

export const Ingredients = ({
  ingredients
}: {
  ingredients?: IngredientType[];
}) => {
  return (
    <>
      {ingredients &&
        ingredients.map((ingredient) => <Ingredient ingredient={ingredient} key={ingredient.name} />)}
    </>
  );
};

export default Ingredients;
