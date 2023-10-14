<template>
  <v-app-bar v-if="isDesktop" class="desktop hidden-sm-and-down">
    <router-link to="/">
      <v-img alt="VicenteLogo" src="@/assets/navbarlogo.png" min-width="350" />
    </router-link>
    <v-spacer></v-spacer>
    <navigation-component :nav-buttons="navButtons" />
    <v-spacer></v-spacer>
    <!-- <dark-mode /> -->
  </v-app-bar>
  <v-app-bar v-else class="mobile hidden-md-and-up">
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link to="">
        <v-img
          max-height="65"
          max-width="175"
          containalt="VicenteLogo"
          src="@/assets/navbarlogo.png"
          contain
        />
      </router-link>
    </v-toolbar-title>
  </v-app-bar>
  <!-- <language-selector /> -->
  <v-navigation-drawer v-model="drawer" app class="hidden-md-and-up">
    <v-list dense>
      <v-list-item v-for="(button, index) in navButtons" :key="index">
        <router-link :to="button.href" class="button-style">
          {{ button.sectionName }}
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="js">
// import DarkMode from '@/components/DarkMode.vue'
import NavigationComponent from '@/components/NavigationComponent.vue'
// import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
    components: {
    NavigationComponent,
    // DarkMode,
    // LanguageSelector,
    },
  data() {
    return {
      isDesktop: window.innerWidth > 960,
      navButtons: [],
      drawer: false,
    };
  },
  async mounted() {
    try {
      const response = await fetch('/localdb.json');
      const data = await response.json();
      this.navButtons = data.navButtons;
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
    }
  },
};
</script>

<style scoped>
.tech-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
