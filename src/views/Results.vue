<template>
  <div>
    <h1>
      Results

    </h1>

    <p v-for="k of Object.keys($route.query)" :key="k">You searched for {{ startCase(k) }}: {{ $route.query[k] }} </p>

    {{ results }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SearchQuery } from '../models/search.models';
import { useCookbookStore } from '../stores/cookbook.store';
import startCase from "lodash.startcase";
import { Result } from '../models/cookbook.models';

export default defineComponent({
  name: 'Results',
  components: {
  },
  setup() {
    const cookbook = useCookbookStore();

    return {
      cookbook,
    }
  },
  beforeMount() {
    const queryParams = this.$route.query as SearchQuery;
    console.log({ queryParams });

    const res = this.cookbook.getSearchResult(queryParams)

    // fetch data from store with query

    this.results = res

  },
  data() {
    return {
      startCase,
      results: [] as Result[]
    };
  },
});
</script>
