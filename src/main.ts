import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import "./style.scss";
import App from "./App.vue";
import { useCookbookStore } from "./stores/cookbook.store";

import router from "./routes/index";

import "primevue/resources/themes/lara-light-green/theme.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(PrimeVue);

const cookbookStore = useCookbookStore();
cookbookStore.initStore();

app.mount("#app");
