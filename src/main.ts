import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.scss";
import App from "./App.vue";
import { useCookbookStore } from "./stores/cookbook.store";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

const cookbookStore = useCookbookStore();
cookbookStore.initStore();

app.mount("#app");
