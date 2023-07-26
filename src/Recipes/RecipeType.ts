import { IngredientType } from "../IngredientsWithQuantity/IngredientWithQuantity/Ingredient/IngredientType";
import { StepType } from "../Steps/StepType";
import { IngredientWithQuantityType } from "../IngredientsWithQuantity/IngredientWithQuantityType";
import { TagType } from "../Tags/TagType";

export type RecipeType = {
  name: string;
  description: string;
  imageURL: string;
  ingredients?: IngredientType[];
  steps?: StepType[];
  ingredientsWithQuantity: IngredientWithQuantityType[];
  tags: TagType[];
};

export type ListOfRecipes = RecipeType[];
