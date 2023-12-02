<template>
  <div class="main">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
});
</script>
<style lang="scss">
.main {
  min-height: 100vh;
  background-color: var(--color-bg);
}
</style>
