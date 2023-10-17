import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Main Style
import "@/style/style.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// Mdi Fonts
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

// Animate.js 'WoW'
import "animate.css";

// Plyr YT Vid Player
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

createApp(App).use(VuePlyr).use(store).use(vuetify).use(router).mount("#app");
