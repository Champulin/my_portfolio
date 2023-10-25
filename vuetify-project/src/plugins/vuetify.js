/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */
// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// Composables
import { createVuetify } from "vuetify";
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme:
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    themes: {
      dark: {
        background: "#121212", // Deep, rich background color
        surface: "#121212", // Same as background color
        primary: "#F5F5F5", // Off-white font color
        // Any other colors can go here
      },
    },
  },
});
