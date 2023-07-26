import { IngredientWithQuantityType } from "../IngredientsWithQuantity/IngredientWithQuantityType";

export type StepType = {
  description: string;
  order: number;
  ingredients?: IngredientWithQuantityType[];
};
