<template>
  <div class="home content-grid">
    <!-- <Find /> -->
    <SearchFilters />
    <div class="button-container">
      <Button @click="performSearch" label="Search" />
    </div>

    <p>Or search by ingredient</p>

    <IngredientSearch />

    <!-- <div v-for="result of cookbook.recipes.results" :key="result.id">
      <div v-for="title of result.properties.Name.title" :key="title.text.content">
        <router-link :to="`/recipe/${snakeCase(title.text.content)}`">
          {{ title.text.content }}
        </router-link>

      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCookbookStore } from "../stores/cookbook.store";
import snakeCase from "lodash.snakecase";
import Find from "../components/Find.vue";
// import Button from '../components/ui/Button.vue'
import SearchFilters from "../components/SearchFilters.vue";
import { useSearchStore } from "../stores/search.store";
import router from "../routes";
import Button from "primevue/button";
import IngredientSearch from "../components/IngredientSearch.vue";

export default defineComponent({
  name: "Home",
  components: {
    Find,
    SearchFilters,
    Button,
    IngredientSearch,
  },
  methods: {
    performSearch() {
      const mealTypes = this.searchStore.mealTypes.map(
        (mealType) => mealType.name
      );
      router.push({
        name: "Results",
        query: { mealTypes: mealTypes.join(",") },
      });
    },
  },
  setup() {
    const cookbook = useCookbookStore();
    const searchStore = useSearchStore();

    return {
      cookbook,
      searchStore,
    };
  },
  data() {
    return {
      snakeCase,
    };
  },
});
</script>
<style lang="scss">
.home {
  padding: 12px;

  .button-container {
    padding: 12px 0px;
  }
}
</style>
