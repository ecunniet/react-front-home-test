import { RecipeType } from "./RecipeType";
import { ListOfRecipes } from "./RecipeType";

import {
  almondPowder,
  beer,
  butter,
  chocolate,
  cream,
  cucumber,
  egg,
  feta,
  flour,
  milk,
  oliveOil,
  pear,
  redFruits,
  salad,
  salt,
  sugar,
  vanillaSugar,
} from "../Ingredients/IngredientData";

import {
  stepsBretonPancakes,
  stepsChocolateFondant,
  stepsPavlova,
  stepsPearPie,
} from "../Steps/StepData";

import {
  appetizer,
  autumn,
  breton,
  dessert,
  noEggs,
  summer,
  vegan,
  winter,
} from "../Tags/TagData";

const bretonPancakes: RecipeType = {
  name: "Crêpes bretonnes",
  description: "Les crêpes bretonnes, c'est le dessert parfait pour les soirées entre amis.",
  imageURL:
    "https://img-3.journaldesfemmes.fr/f6FIccfzYhulDAJMYidb17q4dO0=/750x500/smart/3343a1bf04ac4c68ab9bc1ff3b6834bf/recipe-jdf/358116.jpg",
  ingredients: [flour, egg, milk, beer, salt, vanillaSugar, oliveOil],
  steps: stepsBretonPancakes,
  ingredientsWithQuantity: [
    { ingredient: flour, quantity: 300, unit: "g" },
    { ingredient: egg, quantity: 4 },
    { ingredient: milk, quantity: 500, unit: "cl" },
    { ingredient: beer, quantity: 20, unit: "cl" },
    { ingredient: salt, quantity: 1, unit: " pincée" },
    { ingredient: vanillaSugar, quantity: 1, unit: " sachet" },
    { ingredient: oliveOil, quantity: 1, unit: " cuillère à soupe" }
  ],
  tags: [dessert, breton],
};

const chocolateFondant: RecipeType = {
  name: "Fondant au chocolat",
  description:
    "Le fondant au chocolat est un gâteau au chocolat qui fond en bouche",
  imageURL:
    "https://www.guydemarle.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXZtQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e927b89d4b6b139ff121371a5c4ac7990913ab3a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VWTI5dFltbHVaVjl2Y0hScGIyNXpld2c2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpvR1JWUTZER2R5WVhacGRIbEpJZ3REWlc1MFpYSUdPd2RVT2dsamNtOXdTU0lRTmpBd2VEWXdNQ3N3S3pBR093ZFUiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--929a1958a8630156464b089800ca739f1b4570de/fondant-chocolat-38701.webp",
  ingredients: [chocolate, egg, flour, butter, sugar],
  steps: stepsChocolateFondant,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 200, unit: "g" },
    { ingredient: flour, quantity: 50, unit: "g" },
    { ingredient: chocolate, quantity: 200, unit: "g" },
    { ingredient: butter, quantity: 150, unit: "g" },
  ],
  tags: [dessert, winter],
};

const pavlova: RecipeType = {
  name: "Pavlova",
  description: "La pavlova est un dessert à base de meringue et de fruits",
  imageURL:
    "https://www.mycake.fr/wp-content/uploads/2019/10/rs_Pavlova_4x3.jpg",
  ingredients: [sugar, flour, redFruits, egg, cream],
  steps: stepsPavlova,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 100, unit: "g" },
    { ingredient: egg, quantity: 3 },
    { ingredient: redFruits, quantity: 100, unit: "g" },
    { ingredient: cream, quantity: 20, unit: "cl" },
  ],
  tags: [summer, dessert],
};

const pearPie: RecipeType = {
  name: "Tarte amandine aux poires",
  description:
    "La tarte au poire est une tarte faite à base d'un appareil à l'amande, d'une pâte sablée et de poires",
  imageURL:
    "https://assets.afcdn.com/recipe/20201228/116793_w1200h800c1cx1060cy707cxb2121cyb1414.webp",
  ingredients: [almondPowder, sugar, butter, flour, pear, egg],
  steps: stepsPearPie,
  ingredientsWithQuantity: [
    { ingredient: pear, quantity: 2 },
    { ingredient: almondPowder, quantity: 50, unit: "g" },
    { ingredient: sugar, quantity: 100, unit: "g" },
    { ingredient: egg, quantity: 3 },
    { ingredient: flour, quantity: 175, unit: "g" },
    { ingredient: butter, quantity: 300, unit: "g" }
  ],
  tags: [dessert, autumn],
};

const waldorfSalad: RecipeType = {
  name: "Salade Waldorf",
  description: "La salade greque est parfaite pour l'été",
  imageURL:
    "https://assets.afcdn.com/recipe/20190704/94666_w420h420c1cx2689cy1920cxb5378cyb3840.webp",
  ingredients: [salad, cucumber, feta],
  ingredientsWithQuantity: [
    { ingredient: salad, quantity: 1 },
    {
      ingredient: cucumber,
      quantity: 1,
    },
    { ingredient: feta, quantity: 150, unit: "g" },
  ],
  tags: [appetizer, summer, vegan, noEggs],
};

export const allRecipes: ListOfRecipes = [
  bretonPancakes,
  chocolateFondant,
  pavlova,
  pearPie,
  waldorfSalad,
];


export const sugarRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );
  return ingredientsList && ingredientsList.includes("sucre");
});

export const chocolateRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );

  return ingredientsList && ingredientsList.includes("chocolat");
});


export const chocolateDessertRecipes: RecipeType[] = allRecipes.filter(
  (recette) => {
    const tagsString: string[] = recette.tags.map((tag) => tag.id);
    const ingredientString: string[] = recette.ingredients
      ? recette.ingredients.map((ingredient) => ingredient.name)
      : [];
    return (
      tagsString.includes("dessert") && ingredientString.includes("chocolat")
    );
  }
);

export const noEggsRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsString: string[] = recette.ingredients
    ? recette.ingredients.map((ingredient) => ingredient.name)
    : [];
  return !ingredientsString.includes("oeuf");
});


export const filterRecipes = (activeTagFilters: string[]) => allRecipes.filter((recipe) => {
  const recipesTags = recipe.tags.map((tag) => tag.id);
  return activeTagFilters.every(tagFilter => recipesTags.includes(tagFilter));
});