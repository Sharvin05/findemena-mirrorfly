import { createApp } from "vue";
import "@/assets/styles/style.scss";
// import '@mdi/font/css/materialdesignicons.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

import 'vuetify/styles'
import component from "./components";
import App from "./App.vue";
import i18n from "@/plugins/i18n.js";
import router from "@/router/index.js";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import mitt from 'mitt';
export const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: "mdi",
  },
});

const libs = [i18n, router, vuetify];

component.forEach((component) => {
  app.component(component.name, component);
});
libs.forEach((lib) => {
  app.use(lib);
});

app.mount("#app");
