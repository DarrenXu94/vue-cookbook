import { defineStore } from "pinia";
import { CookbookResponse } from "../models/cookbook.models";
import { CookbookService } from "../services/cookbook.service";
import snakeCase from "lodash.snakecase";

const cookbookService = new CookbookService();

export const useCookbookStore = defineStore("cookbook", {
  state: () => ({ recipes: null as unknown as CookbookResponse }),
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
    async initStore() {
      const res = await cookbookService.getCookbook();
      if (res.status == 200) {
        this.recipes = res.data.response;
      }
    },
  },
});
