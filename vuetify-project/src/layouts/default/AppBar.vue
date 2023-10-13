<template>
  <v-app-bar v-if="isDesktop" class="desktop hidden-sm-and-down">
    <!-- <v-toolbar-title>
      </v-toolbar-title> -->
    <a href="#">
      <v-img alt="VicenteLogo" src="@/assets/navbarlogo.png" min-width="350" />
    </a>
    <v-spacer></v-spacer>
    <v-tabs>
      <v-btn
        id="menuBtns"
        v-for="(button, index) in navButtons"
        :key="index"
        :href="button.href"
        variant="text"
      >
        {{ button.sectionName }}
      </v-btn>
    </v-tabs>
  </v-app-bar>
  <v-app-bar v-else class="mobile hidden-md-and-up">
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <a href="">
        <v-img
          max-height="65"
          max-width="175"
          containalt="VicenteLogo"
          src="@/assets/navbarlogo.png"
          contain
        />
      </a>
    </v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app class="hidden-md-and-up">
    <v-list dense>
      <v-list-item
        v-for="(button, index) in navButtons"
        :key="index"
        :href="button.href"
      >
        {{ button.sectionName }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!-- Add this navigation drawer for mobile -->
</template>

<script lang="js">
export default {
  name: "AppHeader",
  data() {
    return {
      isDesktop: window.innerWidth > 960,
      navButtons: [
        {
          sectionName: "Home",
          href: "#",
        },
        {
          sectionName: "About",
          href: "#about",
        },
        {
          sectionName: "Projects",
          href: "#projects",
        },
        {
          sectionName: "Contact",
          href: "#contact",
        },
      ],
      drawer: false,
    };
  },
  mounted() {
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

.v-tabs {
  align-items: center;
  justify-content: center;
  height: 50%;
}
</style>
