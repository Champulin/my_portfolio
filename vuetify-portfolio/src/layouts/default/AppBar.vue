<template>
  <v-app>
    <v-app-bar class="desktop d-none d-sm-flex">
      <v-toolbar-title>
        <a href="">
          <v-img alt="VicenteLogo" src="@/assets/navbarlogo.png" />
        </a>
      </v-toolbar-title>
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

    <v-app-bar class="mobile d-flex d-sm-none">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <a href="">
          <v-img alt="VicenteLogo" src="@/assets/navbarlogo.png" />
        </a>
      </v-toolbar-title>
    </v-app-bar>
    <!-- Add this navigation drawer for mobile -->
    <v-navigation-drawer v-model="drawer" app class="d-flex d-sm-none">
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
  </v-app>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
  data() {
    return {
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
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
@media (max-width: 600px) {
  .mobile.v-toolbar-title {
    max-height: 50px;
  }
}

.desktop.v-btn {
  height: auto;
  height: initial;
}
</style>
