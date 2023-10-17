<template>
  <div class="navbar">
    <v-app-bar v-if="isDesktop" class="desktop hidden-sm-and-down">
      <router-link to="/">
        <v-img alt="VicenteLogo" :src="navBarLogo" min-width="350" />
      </router-link>
      <v-spacer></v-spacer>
      <navigation-component :nav-buttons="navButtons" />
      <v-spacer></v-spacer>
      <!-- <dark-mode /> -->
      <language-selector />
    </v-app-bar>
    <v-app-bar v-else class="mobile hidden-md-and-up">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="">
          <v-img
            max-height="65"
            max-width="175"
            containalt="VicenteLogo"
            :src="navBarLogo"
            contain
          />
        </router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="hidden-md-and-up"
      style="height: 100%; overflow-y: auto"
    >
      <v-list dense>
        <v-list-item>
          <router-link :to="'/'" class="button-style">
            {{ $t("message.home") }}
          </router-link>
        </v-list-item>
        <v-list-item v-for="(button, index) in navButtons" :key="index">
          <router-link :to="'/#' + (button.href || '')" class="button-style">
            {{ $t("message." + button.sectionName) }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="js">
// import DarkMode from '@/components/DarkMode.vue'
import NavigationComponent from '@/components/NavigationComponent.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
    components: {
    NavigationComponent,
    // DarkMode,
    LanguageSelector,
    },
  data() {
    return {
      isDesktop: window.innerWidth >= 960,
      navButtons: [],
      drawer: false,
      navBarLogo: "",
    };
  },
  async mounted() {
    try {
      const response = await fetch('/localdb.json');
      const data = await response.json();
      this.navButtons = data.navButtons;
      this.navBarLogo = data.navLogo;
      console.log(this.navButtons);
    } catch (error) {
      console.error('An error occurred:', error);
    }
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    handleResize() {
      this.isDesktop = window.innerWidth > 960;
    },
  scrollTo(sectionName) {
    this.$nextTick(() => {
      document.getElementById(sectionName).scrollIntoView({ behavior: 'smooth' });
    });
  },
}

};
</script>

<style scoped>
.tech-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.v-app-bar.desktop.hidden-sm-and-down {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* You can adjust the z-index as needed */
  background-color: white; /* Set the desired background color for the navbar */
  /* Add any other styles you want for the sticky navbar */
}
.v-navigation-drawer {
  position: fixed !important;
  height: max-content !important;
  width: auto !important;
}

.v-app-bar.mobile.hidden-md-and-up {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* You can adjust the z-index as needed */
  background-color: white; /* Set the desired background color for the mobile navbar */
  /* Add any other styles you want for the sticky mobile navbar */
}
.row {
  width: 100%;
}

.stack.column {
  width: auto;
}
.desktop.v-btn {
  height: auto;
  height: initial;
}
.v-application {
  max-height: 80px;
}
</style>
