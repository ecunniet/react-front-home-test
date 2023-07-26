import Ingredient from "./Ingredient/Ingredient";
import { IngredientWithQuantityType } from "../IngredientWithQuantityType";
import './IngredientWithQuantity'

const IngredientWithQuantity = ({
  ingredientWithQuantity,
}: {
  ingredientWithQuantity: IngredientWithQuantityType;
}) => {

  const unitAndPrefixText = ingredientWithQuantity.unit ? `${ingredientWithQuantity.unit}\xA0${ingredientWithQuantity.ingredient.prefix}\xA0` : ''

  return (
    <div className="ingredient_with_quantity-container">
      {ingredientWithQuantity.quantity}
      &nbsp;
      {unitAndPrefixText}
      <Ingredient
        ingredient={ingredientWithQuantity.ingredient}
        quantity={ingredientWithQuantity.quantity}
      />
    </div>
  );
};

export default IngredientWithQuantity;
