<template>
  <router-link
    :to="`recipe/${snakeCase(recipe.properties.Name.title[0].plain_text)}`"
  >
    <Card>
      <template #title>
        {{ recipe.properties.Name.title[0].plain_text }}
      </template>
    </Card>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Result } from "../models/cookbook.models";
import snakeCase from "lodash.snakecase";
import Card from "primevue/card";

export default defineComponent({
  name: "ResultCard",
  components: {
    Card,
  },
  props: {
    recipe: {
      type: Object as PropType<Result>,
      required: true,
    },
  },
  data() {
    return {
      snakeCase,
    };
  },
});
</script>
