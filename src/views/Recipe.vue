<template>
  <div class="recipe-page content-grid">
    <h1>
      {{ recipe?.properties.Name.title[0].text.content }}
    </h1>
    <div>
      Meal type
      <div class="meal-type-container">
        <Tag
          v-for="mealType of recipe?.properties['Meal type'].multi_select"
          :key="mealType.id"
          :value="mealType.name"
        >
        </Tag>
      </div>
    </div>
    <div>
      Ingredients
      <div class="meal-type-container">
        <Tag
          v-for="ingredient of recipe?.properties.Ingredients.multi_select"
          :key="ingredient.id"
          :value="ingredient.name"
        >
        </Tag>
      </div>
    </div>
    <div>
      Steps
      <div
        v-for="steps of recipe?.properties.Steps.rich_text"
        :key="steps.plain_text"
      >
        <div v-html="steps.text.content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Result } from "../models/cookbook.models";
import { useCookbookStore } from "../stores/cookbook.store";
import Tag from "primevue/tag";

export default defineComponent({
  name: "Recipie",
  components: { Tag },
  beforeMount() {
    this.recipe = this.cookbook.getRecipeByName(
      this.$route.params.id as string
    );
  },
  setup() {
    const cookbook = useCookbookStore();
    return {
      cookbook,
    };
  },
  data() {
    return {
      recipe: undefined as Result | undefined,
    };
  },
});
</script>
<style lang="scss">
.recipe-page {
  white-space: pre-line;
}

.meal-type-container {
  display: flex;
  gap: 0.5rem;
}
</style>
