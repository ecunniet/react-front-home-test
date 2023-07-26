import { IngredientWithQuantityType } from "./IngredientWithQuantityType";
import IngredientWithQuantity from "./IngredientWithQuantity/IngredientWithQuantity";

const IngredientsWithQuantity = ({
  ingredientsWithQuantity
}: {
  ingredientsWithQuantity: IngredientWithQuantityType[];
}) => {
  return (
    <>
      {ingredientsWithQuantity.map((obj) => (
        <IngredientWithQuantity ingredientWithQuantity={obj} key={obj.ingredient.name} />
      ))}
    </>
  );
};

export default IngredientsWithQuantity;
