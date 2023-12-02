<template>
  <Menubar :model="items">
    <template #start>
      <img src="../assets/img/favicon-32x32.png" />
    </template>
    <template #item="{ item, props }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
    </template>
  </Menubar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menubar from "primevue/menubar";

export default defineComponent({
  name: "Navbar",
  components: {
    Menubar,
  },
  data() {
    return {
      items: [{ label: "Home", route: "/" }],
    };
  },
});
</script>
<style lang="scss"></style>
