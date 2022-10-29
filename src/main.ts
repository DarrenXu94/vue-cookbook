import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.scss";
import App from "./App.vue";
import { useCookbookStore } from "./stores/cookbook.store";

import router from "./routes/index";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

const cookbookStore = useCookbookStore();
cookbookStore.initStore();

app.mount("#app");
