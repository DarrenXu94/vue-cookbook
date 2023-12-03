<template>
  <Card>
    <template #title>
      {{ recipe.properties.Name.title[0].plain_text }}
    </template>
    <template #content
      >Updated {{ formatDate(recipe.last_edited_time) }}</template
    >
    <template #footer>
      <router-link
        :to="`recipe/${snakeCase(recipe.properties.Name.title[0].plain_text)}`"
      >
        See more
      </router-link>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Result } from "../models/cookbook.models";
import snakeCase from "lodash.snakecase";
import Card from "primevue/card";
import dayjs from "dayjs";

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

  methods: {
    formatDate(date: string) {
      return dayjs(date).format("DD MMM YY");
    },
  },
  data() {
    return {
      snakeCase,
    };
  },
});
</script>
