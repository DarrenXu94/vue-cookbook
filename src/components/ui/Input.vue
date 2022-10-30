<template>
  <div class="custom-input">
    <input type="text" placeholder="Find a recipe">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  components: {
  },
  data() {
    return {
    };
  },
});
</script>
<style lang="scss">
.custom-input {
  input {

    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
}
</style>