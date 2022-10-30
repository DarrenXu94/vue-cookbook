<template>
  <div class="search-filters">
    Search filters
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
import FilterBlock from './FilterBlock.vue'

export default defineComponent({
  name: 'SearchForm',
  components: {
    FilterBlock
  },
  setup() {
    const cookbook = useCookbookStore();
    return {
      cookbook
    }
  },
  methods: {
    onSelectionChange(updatedList: MultiSelect[]) {
      console.log(updatedList)
    }
  },
  data() {
    return {
    };
  },
});
</script>
<style lang="scss">
.search-filters {
  background-color: gray;
}
</style>
