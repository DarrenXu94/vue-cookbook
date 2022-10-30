<template>
  <div class="home">
    <Find />
    <SearchFilters />
    <div class="button-container">

      <Button @button-clicked="performSearch">
      </Button>
    </div>


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
import { defineComponent } from 'vue';
import { useCookbookStore } from '../stores/cookbook.store';
import snakeCase from 'lodash.snakecase'
import Find from '../components/Find.vue'
import Button from '../components/ui/Button.vue'
import SearchFilters from '../components/SearchFilters.vue'
import { useSearchStore } from '../stores/search.store';
import router from '../routes';

export default defineComponent({
  name: 'Home',
  components: {
    Find,
    SearchFilters,
    Button
  },
  methods: {
    performSearch() {
      const mealTypes = this.searchStore.mealTypes.map(mealType => mealType.name)
      router.push({ name: 'Results', query: { mealTypes: mealTypes.join(',') } })
    }
  },
  setup() {
    const cookbook = useCookbookStore();
    const searchStore = useSearchStore();

    return {
      cookbook,
      searchStore
    }
  },
  data() {
    return {
      snakeCase
    };
  },
});
</script>
<style lang="scss">
.home {
  padding: 12px;
  background-color: var(--color-bg);
  color: white;

  .button-container {
    padding: 12px 0px;
  }
}
</style>
