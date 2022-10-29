<template>
  <div class="recipe-page">
    <h1>
      {{ recipe?.properties.Name.title[0].text.content }}
    </h1>
    <div>
      Meal type
      <div v-for="mealType of recipe?.properties['Meal type'].multi_select" :key="mealType.id">
        {{ mealType.name }}
      </div>
    </div>
    <div>
      Ingredients
      <div v-for="ingredient of recipe?.properties.Ingredients.multi_select" :key="ingredient.id">
        {{ ingredient.name }}
      </div>
    </div>
    <div>
      Steps
      <div v-for="steps of recipe?.properties.Steps.rich_text" :key="steps.plain_text">
        <div v-html="steps.text.content">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Result } from '../models/cookbook.models';
import { useCookbookStore } from '../stores/cookbook.store';

export default defineComponent({
  name: 'Recipie',
  components: {
  },
  beforeMount() {
    this.recipe = this.cookbook.getRecipeByName(this.$route.params.id as string)
  },
  setup() {
    const cookbook = useCookbookStore();
    return {
      cookbook
    }
  },
  data() {
    return {
      recipe: undefined as Result | undefined
    };
  },
});
</script>
<style lang="scss">
.recipe-page {
  white-space: pre-line;
}
</style>