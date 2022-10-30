<template>
  <div class="search-filters">
    <p>
      You can select more than one option
    </p>
    <FilterBlock title="Meal type" :items="cookbook.mealTypes" @updated-selection="onSelectionChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MultiSelect } from '../models/cookbook.models';
import { useCookbookStore } from '../stores/cookbook.store';
import { useSearchStore } from '../stores/search.store';
import FilterBlock from './FilterBlock.vue'

export default defineComponent({
  name: 'SearchForm',
  components: {
    FilterBlock
  },
  setup() {
    const cookbook = useCookbookStore();
    const searchStore = useSearchStore();
    return {
      cookbook,
      searchStore
    }
  },
  methods: {
    onSelectionChange(updatedList: MultiSelect[]) {
      this.searchStore.setMealTypes(updatedList)
    }
  },
  data() {
    return {
    };
  },
});
</script>

