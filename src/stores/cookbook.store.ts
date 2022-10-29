import { defineStore } from "pinia";
import { CookbookResponse } from "../models/cookbook.models";
import { CookbookService } from "../services/cookbook.service";

const cookbookService = new CookbookService();

export const useCookbookStore = defineStore("cookbook", {
  state: () => ({ recipes: null as unknown as CookbookResponse }),
  actions: {
    async initStore() {
      const res = await cookbookService.getCookbook();
      if (res.status == 200) {
        this.recipes = res.data.response;
      }
    },
  },
});
