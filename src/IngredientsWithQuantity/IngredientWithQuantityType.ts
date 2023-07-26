import { IngredientType } from "./IngredientWithQuantity/Ingredient/IngredientType";

export type IngredientWithQuantityType = {
  ingredient: IngredientType;
  unit?: string;
  quantity: number;
};
