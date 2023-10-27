<template>
  <div :class="{ navbar: true, 'navbar-scrolled': isScrolled }">
    <v-app-bar v-if="isDesktop" class="desktop hidden-sm-and-down">
      <div class="nav-title-container">
        <v-app-bar-title>
          {{ navBarLogo.logo }}
        </v-app-bar-title>
      </div>
      <v-img class="logo-image" :alt="navBarLogo.alt" :src="navBarLogo.src" />
      <v-spacer> </v-spacer>
      <navigation-component :nav-buttons="navButtons" />
      <dark-mode-component />
      <language-selector />
    </v-app-bar>
    <v-app-bar v-else class="mobile hidden-md-and-up">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <dark-mode-component />
      <v-btn icon>
        <language-selector />
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="hidden-md-and-up"
      style="height: 100%; overflow-y: auto"
    >
      <v-list color="transparent">
        <router-link :to="'/'" class="button-style">
          <v-list-item @click="toggleDrawer">
            {{ $t("navBar.home") }}
          </v-list-item>
        </router-link>
        <router-link
          v-for="(button, index) in navButtons"
          :key="index"
          :to="'/#' + button.href"
          class="button-style"
        >
          <v-list-item @click="toggleDrawer">
            {{ $t("navBar." + button.sectionName) }}
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="js">
import DarkModeComponent from '@/components/DarkModeComponent.vue'
import NavigationComponent from '@/components/NavigationComponent.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
  components: {
    NavigationComponent,
    DarkModeComponent,
    LanguageSelector,
},
  data() {
    return {
      isDesktop: window.innerWidth >= 960,
      navButtons: [],
      drawer: false,
      navBarLogo: "",
      isScrolled: false,
    };
  },
  async mounted() {
    try {
      const response = await fetch('/localdb.json');
      const data = await response.json();
      this.navButtons = data.navigation.navButtons;
      this.navBarLogo = data.navigation.navLogo;
    } catch (error) {
      console.error('An error occurred:', error);
    }
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll); // Added event listener for scrolling
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll); // Removed event listener
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    handleResize() {
      this.isDesktop = window.innerWidth > 960;
    },
    scrollTo(sectionName) {
      const offset = this.isDesktop ? 100 : 80; // Adjust this value as needed

      this.$nextTick(() => {
        const targetElement = document.getElementById(sectionName);
        if (targetElement) {
          const targetOffset = targetElement.getBoundingClientRect().top;
          const scrollToPosition = targetOffset - offset;
          window.scrollTo({
            top: window.scrollY + scrollToPosition,
            behavior: 'smooth',
          });
        }
      });
    },

    handleScroll() {
      // Calculate scroll position
      const scrollPosition = window.scrollY;
      // Set the isScrolled to true if the scrollPosition is greater than 0
      this.isScrolled = scrollPosition > 0;
      // Update navbar class based on isScrolled
      const navbar = document.querySelector(".navbar");
      if (this.isScrolled) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    },
  },
  //create a method to close my navigation drawer once a link is clicked

  //trigger toggle drawer again when a link on the drawer is clicked




};
</script>

<style scoped>
.nav-title-container {
  padding-left: 2rem;
}
.v-app-bar-title {
  min-width: none;
  font-size: 1.5rem;
}
.v-app-bar.desktop.hidden-sm-and-down,
.v-app-bar.mobile.hidden-md-and-up {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.v-img {
  height: 35px;
}
.v-navigation-drawer {
  position: fixed !important;
  height: max-content !important;
  width: auto !important;
}
.v-application {
  max-height: 80px;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
