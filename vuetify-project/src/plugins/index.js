/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from "./vuetify";
import router from "../router";
import { createI18n } from "vue-i18n";
import messages from "@/locales";

// Function to detect user's language and set the default locale
function detectUserLocale() {
  const userLanguage =
    window.navigator.language || window.navigator.userLanguage;

  // Check if userLanguage is French
  if (userLanguage.startsWith("fr")) {
    return "fr";
  } else {
    return "en"; // Default to English for other cases
  }
}
const i18n = createI18n({
  legacy: false,
  locale: detectUserLocale(),
  messages,
});
export function registerPlugins(app) {
  app.use(vuetify).use(router).use(i18n);
}
