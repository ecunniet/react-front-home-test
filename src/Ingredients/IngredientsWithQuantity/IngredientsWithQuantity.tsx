import { IngredientWithQuantityType } from "./IngredientWithQuantityType";
import { IngredientWithQuantity } from "./IngredientWithQuantity/IngredientWithQuantity";

export const IngredientsWithQuantity = ({
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
