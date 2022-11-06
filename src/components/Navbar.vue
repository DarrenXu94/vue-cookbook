<template>
  <div>
    <router-link :to="'/'">
      <p>Home</p>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  components: {
  },
  data() {
    return {
    };
  },
});
</script>
