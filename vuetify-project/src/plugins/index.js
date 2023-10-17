/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from "./vuetify";
import router from "../router";
import { createI18n } from "vue-i18n/dist/vue-i18n.cjs.prod.js";
//import { createI18n } from "vue-i18n";
import messages from "../locales";
const i18n = createI18n({
  legacy: false,
  locale: "en", // set locale
  messages,
});
export function registerPlugins(app) {
  app.use(vuetify).use(router).use(i18n);
}
