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
  border-radius: 5px;
}
</style>
