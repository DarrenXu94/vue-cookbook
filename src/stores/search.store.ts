import { defineStore } from "pinia";
import { MultiSelect } from "../models/cookbook.models";

export const useSearchStore = defineStore("search", {
  state: () => ({
    mealTypes: [] as MultiSelect[],
    ingredients: [] as string[],
  }),
  getters: {},
  actions: {
    setMealTypes(mealTypes: MultiSelect[]) {
      this.mealTypes = mealTypes;
    },
    setIngredients(ingredients: string[]) {
      this.ingredients = ingredients;
    },
  },
});
