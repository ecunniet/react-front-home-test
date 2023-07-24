import { IngredientWithQuantityType } from "../Ingredients/IngredientsWithQuantity/IngredientWithQuantityType";

export type StepType = {
  description: string;
  order: number;
  ingredients?: IngredientWithQuantityType[];
};
