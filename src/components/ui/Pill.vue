<template>
  <div class="pill">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Pill',
  components: {
  },
  data() {
    return {
    };
  },
});
</script>
<style lang="scss">
.pill {
  background-color: white;
  border-radius: var(--border-radius);
  color: var(--color-bg);
  padding: 8px;

}
</style>
