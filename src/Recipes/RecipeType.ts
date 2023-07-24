import { IngredientType } from "../Ingredients/IngredientType";
import { StepType } from "../Steps/StepType";
import { IngredientWithQuantityType } from "../Ingredients/IngredientsWithQuantity/IngredientWithQuantityType";
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
