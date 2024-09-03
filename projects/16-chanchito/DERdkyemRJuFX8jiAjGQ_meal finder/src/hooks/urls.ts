import { Category } from "../types";

const base = "https://www.themealdb.com/api/json/v1/1/";

export const categoriesURL = `${base}list.php?c=list`;

export const mealsURL = (category: Category) =>
  `${base}filter.php?c=${category.strCategory}`;

export const searchMealsURL = (param: string) => `${base}search.php?s=${param}`;

export const mealDetailsURL = (param: string) => `${base}lookup.php?i=${param}`;
