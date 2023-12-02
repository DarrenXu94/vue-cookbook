<template>
  <div class="recipe-page content-grid">
    <Card>
      <template #content>
        <h1>
          {{ recipe?.properties.Name.title[0].text.content }}
        </h1>
        Meal type
        <div class="meal-type-container">
          <Tag
            :style="`background: ${mealType.color}`"
            v-for="mealType of recipe?.properties['Meal type'].multi_select"
            :key="mealType.id"
            :value="mealType.name"
          >
          </Tag>
        </div>

        <div>
          Ingredients
          <div class="meal-type-container">
            <Tag
              :style="`background: ${ingredient.color}`"
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
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Result } from "../models/cookbook.models";
import { useCookbookStore } from "../stores/cookbook.store";
import Tag from "primevue/tag";
import Card from "primevue/card";

export default defineComponent({
  name: "Recipie",
  components: { Tag, Card },
  beforeMount() {
    this.recipe = this.cookbook.getRecipeByName(
      this.$route.params.id as string
    );

    console.log(this.recipe, "this recp");
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
  padding-top: 2rem;
}

.meal-type-container {
  display: flex;
  gap: 0.5rem;
}
</style>
