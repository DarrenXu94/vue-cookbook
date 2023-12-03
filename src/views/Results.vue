<template>
  <div class="content-grid">
    <h1>Results</h1>

    <p v-for="k of Object.keys($route.query)" :key="k">
      You searched for {{ startCase(k) }}: {{ $route.query[k] }}
    </p>
    <div class="d-flex result-card-container">
      <ResultCard v-for="result of results" :key="result.id" :recipe="result" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SearchQuery } from "../models/search.models";
import { useCookbookStore } from "../stores/cookbook.store";
import startCase from "lodash.startcase";
import { Result } from "../models/cookbook.models";
import ResultCard from "../components/ResultCard.vue";

export default defineComponent({
  name: "Results",
  components: {
    ResultCard,
  },
  setup() {
    const cookbook = useCookbookStore();

    return {
      cookbook,
    };
  },
  beforeMount() {
    const queryParams = this.$route.query as SearchQuery;
    console.log({ queryParams });

    const res = this.cookbook.getSearchResult(queryParams);

    // fetch data from store with query

    this.results = res;
  },
  data() {
    return {
      startCase,
      results: [] as Result[],
    };
  },
});
</script>
<style lang="scss">
.result-card-container {
  gap: 2rem;
}
</style>
