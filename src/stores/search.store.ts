import { defineStore } from "pinia";
import { MultiSelect } from "../models/cookbook.models";

export const useSearchStore = defineStore("search", {
  state: () => ({
    mealTypes: [] as MultiSelect[],
  }),
  getters: {},
  actions: {
    setMealTypes(mealTypes: MultiSelect[]) {
      this.mealTypes = mealTypes;
    },
  },
});
