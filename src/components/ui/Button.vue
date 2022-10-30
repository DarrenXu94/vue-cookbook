<template>
  <Pill class="button">
    <button @click="event => $emit('buttonClicked', event)">Search</button>
  </Pill>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pill from './Pill.vue'
export default defineComponent({
  name: 'Button',
  emits: ['buttonClicked'],
  components: {
    Pill
  },
  data() {
    return {
    };
  },
});
</script>
<style lang="scss">
.button {
  button {
    width: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable `input` types in iOS */
    -webkit-appearance: none;
  }
}
</style>