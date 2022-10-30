import { defineStore } from "pinia";
import { CookbookResponse, MultiSelect } from "../models/cookbook.models";
import { CookbookService } from "../services/cookbook.service";
import snakeCase from "lodash.snakecase";

const cookbookService = new CookbookService();

export const useCookbookStore = defineStore("cookbook", {
  state: () => ({
    recipes: null as unknown as CookbookResponse,
    ingredients: [] as MultiSelect[],
    mealTypes: [] as MultiSelect[],
  }),
  getters: {
    getRecipeByName: (state) => {
      return (name: string) =>
        state.recipes.results.find(
          (recipe) =>
            recipe.properties.Name.title.length &&
            snakeCase(recipe.properties.Name.title[0].text.content) === name
        );
    },
  },
  actions: {
    populateMealsAndIngredients(response: CookbookResponse) {
      // Ingredients
      const ing = response.results.reduce((acc, result) => {
        return [...acc, ...result.properties.Ingredients.multi_select];
      }, [] as MultiSelect[]);
      const key = "id";
      const ingredientArrayUniqueByKey = [
        ...new Map(ing.map((item) => [item[key], item])).values(),
      ];
      this.ingredients = ingredientArrayUniqueByKey;

      // Meal types
      const meal = response.results.reduce((acc, result) => {
        return [...acc, ...result.properties["Meal type"].multi_select];
      }, [] as MultiSelect[]);
      const mealTypeArrayUniqueByKey = [
        ...new Map(meal.map((item) => [item[key], item])).values(),
      ];
      this.mealTypes = mealTypeArrayUniqueByKey;
    },
    async initStore() {
      const res = await cookbookService.getCookbook();
      if (res.status == 200) {
        this.recipes = res.data.response;
        this.populateMealsAndIngredients(res.data.response);
      }
    },
  },
});
