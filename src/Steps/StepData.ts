import {
  beer,
  butter,
  chocolate,
  cream,
  egg,
  flour,
  milk,
  oliveOil,
  redFruits,
  salt,
  sugar,
  vanillaSugar,
} from "../Ingredients/IngredientData";

import { StepType } from "./StepType";

export const stepsBretonPancakes: StepType[] = [
  {
    description: "Dans un saladier, mettre la farine et les œufs. Puis progressivement, ajouter le lait et la bière tout en mélangeant avec un fouet.",
    order: 1,
    ingredients: [
      { ingredient: flour, quantity: 300, unit: "g" },
      { ingredient: egg, quantity: 4 },
      { ingredient: milk, quantity: 500, unit: "cl" },
      { ingredient: beer, quantity: 20, unit: "cl" },
    ],
  },
  {
    description:
      "Ajouter le sucre vanillé et la pincée de sel.",
    order: 2,
    ingredients: [
      { ingredient: vanillaSugar, quantity: 1, unit: " sachet" },
      { ingredient: salt, quantity: 1, unit: " pincée" },
    ],
  },
  {
    description:
      "Laisser reposer 1h environ en recouvrant la pâte d'un torchon.",
    order: 3,
  },
  {
    description:
      "Au bout d'une heure, faire chauffer une poêle, une fois chaude, verser un peu d'huile pour graisser la poêle.",
    order: 4,
    ingredients: [
      { ingredient: oliveOil, quantity: 1, unit: " cuillère à soupe" }
    ]
  },
  {
    description:
      "Au bout d'une heure, faire chauffer une poêle, une fois chaude, verser un peu d'huile pour graisser la poêle.",
    order: 5,
    ingredients: [
      { ingredient: oliveOil, quantity: 1, unit: " cuillère à soupe" }
    ]
  },
  {
    description: "Verser une demi-louche de la pâte à crêpe et faire cuire 1 à 2 minutes par face. Répeter l'opération pour chaque crêpe.",
    order: 6,
  }
];

export const stepsChocolateFondant: StepType[] = [
  {
    description: "Faire fondre le chocolat avec le beurre au bain-marie.",
    order: 1,
    ingredients: [
      { ingredient: chocolate, quantity: 200, unit: "g" },
      { ingredient: butter, quantity: 150, unit: "g" },
    ],
  },
  {
    description:
      "Pendant ce temps,séparer les jaunes des blancs d'oeufs. Monter ces derniers en neige ferme.",
    order: 2,
    ingredients: [{ ingredient: egg, quantity: 3 }],
  },
  {
    description: "Ajouter les jaunes d'oeufs au mélange beurre chocolat.",
    order: 3,
  },
  {
    description: "Incorporer le sucre et la farine puis les blancs d'oeufs.",
    order: 4,
    ingredients: [
      { ingredient: flour, quantity: 50, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Verser la préparation dans un moule beurré et fariné. Enfourner 15mn à 180°.",
    order: 5,
  },
];

export const stepsPavlova: StepType[] = [
  {
    description: "Préparer la meringue française.",
    ingredients: [
      { ingredient: sugar, quantity: 100 },
      { ingredient: egg, quantity: 3 },
    ],
    order: 1,
  },
  {
    description: "Préparer la chantilly.",
    ingredients: [
      { ingredient: sugar, quantity: 50, unit: "g" },
      { ingredient: cream, quantity: 20, unit: "cl" },
    ],

    order: 2,
  },
  {
    description: "Recouvrir la meringue de chantilly.",
    order: 3,
  },
  {
    description: "Disposer les fruits rouges sur le dessus.",
    order: 4,
    ingredients: [{ ingredient: redFruits, quantity: 100, unit: "g" }],
  },
];

export const stepsPearPie: StepType[] = [
  {
    description: "Préparer la pâte sablée.",
    order: 1,
    ingredients: [
      { ingredient: butter, quantity: 200, unit: "g" },
      { ingredient: flour, quantity: 150, unit: "g" },
      { ingredient: egg, quantity: 1 },
    ],
  },
  {
    description:
      "Pour la garniture, travailler le beurre et le sucre au batteur électrique.",
    order: 3,
    ingredients: [
      { ingredient: butter, quantity: 100, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Incorporer les oeufs puis ajouter les amandes moulues et la farine",
    order: 4,
  },
  {
    description:
      "Verser la préparation sur le fond de la pâte. Disposer les poires. Enfourner 50 mn à 180°",
    order: 5,
  },
];
