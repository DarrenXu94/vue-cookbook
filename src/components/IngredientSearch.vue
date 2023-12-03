<template>
  <div>
    <AutoComplete
      multiple
      v-model="value"
      :suggestions="items"
      @complete="search"
    />
  </div>
</template>

<script setup lang="ts">
import AutoComplete from "primevue/autocomplete";
import { useCookbookStore } from "../stores/cookbook.store";
import { storeToRefs } from "pinia";

import { ref } from "vue";

const cookbook = useCookbookStore();

const { ingredients } = storeToRefs(cookbook);

const value = ref([]);
const items = ref<string[]>([]);

const search = (event: any) => {
  items.value = ingredients.value
    .map((e) => e.name)
    .filter((e) => e.includes(event.query));
};
</script>
