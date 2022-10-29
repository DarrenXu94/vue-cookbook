<template>
  <div>
    <div v-for="result of cookbook.recipes.results" :key="result.id">
      <div v-for="title of result.properties.Name.title" :key="title.text.content">
        <router-link :to="`/recipe/${snakeCase(title.text.content)}`">
          {{ title.text.content }}
        </router-link>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCookbookStore } from '../stores/cookbook.store';
import snakeCase from 'lodash.snakecase'

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    const cookbook = useCookbookStore();
    return {
      cookbook
    }
  },
  data() {
    return {
      snakeCase
    };
  },
});
</script>
