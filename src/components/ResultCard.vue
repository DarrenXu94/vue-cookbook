<template>
  <div>
    <router-link :to="`recipe/${snakeCase(recipe.properties.Name.title[0].plain_text)}`">
      <h1>
        {{ recipe.properties.Name.title[0].plain_text }}
      </h1>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Result } from '../models/cookbook.models';
import snakeCase from 'lodash.snakecase'

export default defineComponent({
  name: 'ResultCard',
  components: {
  },
  props: {
    recipe: {
      type: Object as PropType<Result>,
      required: true
    }
  },
  data() {
    return {
      snakeCase
    };
  },
});
</script>
