export type Category = {
  strCategory: string;
};

export type CategoriesResponse = {
  meals: Category[];
};

export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type MealsResponse = {
  meals: Meal[];
};

export type HeaderSearchForm = {
  search: string;
};

export type MealDetails = {
  [key: string]: string;
};

export type MealDetailsResponse = {
  meals: MealDetails[];
};
