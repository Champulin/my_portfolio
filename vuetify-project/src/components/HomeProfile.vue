<template>
  <div
    id="home"
    v-if="isDesktop"
    class="hero-container desktop hidden-sm-and-down"
  >
    <div class="hero-card">
      <div class="row">
        <div class="column">
          <div class="photo-container">
            <img :src="heroPicture" alt="Hero" class="hero-photo" />
          </div>
          <div class="column">
            <h1>{{ $t("message.title") }}</h1>
            <h2>{{ $t("message.subtitle") }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="hero-container mobile hidden-md-and-up">
    <div class="hero-card">
      <div class="row">
        <div class="column">
          <div class="photo-container">
            <img :src="heroPicture" alt="Hero" class="hero-photo" />
          </div>
        </div>
      </div>
      <div class="column">
        <h1>{{ $t("message.title") }}</h1>
        <h2>{{ $t("message.subtitle") }}</h2>
      </div>
    </div>
  </div>
  <div class="tech-container">
    <div class="tech-row">
      <div class="stack column">
        <p>Tech Stack |</p>
      </div>
      <div class="column">
        <div class="tech-stack">
          <div v-for="(item, index) in techStackIcons" :key="index">
            <v-icon
              :icon="'mdi-' + item.icon"
              alt="Tech Icon"
              class="tech-icon"
            >
            </v-icon>
            <v-tooltip activator="parent" location="bottom">
              {{ item.name }}</v-tooltip
            >
          </div>

          <!-- <v-img
            v-for="(item, index) in techStackPngs"
            :key="index"
            :src="item.icon"
            alt="Tech Icon"
            class="tech-icon"
          >
            <v-tooltip activator="parent" location="bottom">
              {{ item.name }}</v-tooltip
            >
          </v-img> -->
        </div>
      </div>
    </div>
    <div class="tech-row">
      <div class="stack column">
        <p>Dev Tools |</p>
      </div>
      <div class="column">
        <div class="tech-stack">
          <div v-for="(item, index) in devTools" :key="index">
            <v-icon
              :icon="'mdi-' + item.icon"
              alt="Tech Icon"
              class="tech-icon"
            >
            </v-icon>
            <v-tooltip activator="parent" location="bottom">
              {{ item.name }}</v-tooltip
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      heroPicture: "",
      title: "",
      subtitle: "",
      introParagraph: "",
      isDesktop: window.innerWidth >= 960,
      techStackPngs: [],
      techStackIcons: [],
      devTools: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch("/localdb.json");
      const data = await response.json();
      this.heroPicture = data.heroPicture;
      this.title = data.title;
      this.subtitle = data.subtitle;
      this.introParagraph = data.introParagraph;
      this.techStackPngs = data.techStackPngs;
      this.techStackIcons = data.techStackIcons;
      this.devTools = data.devTools;
    } catch (error) {
      console.error("An error occurred:", error);
    }
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isDesktop = window.innerWidth > 960;
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .tech-container {
    display: flex;
    flex-wrap: wrap;
  }
  .tech-container.row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.stack.column {
  display: flex;
  align-items: center;
}
.column p {
  font-size: 0.8rem;
}
.stack.column p {
  width: 100px;
}

.hero-container {
  padding: 1.5rem;
}
.hero-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 512px;
  margin: auto;
  /* margin-top: 9vh; */
}

.resume-paragraph {
  width: 100% !important;
}

.row {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.tech-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: start;
}

.tech-icon {
  transition: transform 0.3s ease;
}
.stack p {
  font-weight: bold;
}
.tech-icon:hover {
  transform: scale(1.2);
}
.photo-container {
  width: 200px; /* Adjust as needed */
  height: 200px; /* Adjust as needed */
  border-radius: 70%;
  overflow: hidden;
}

.hero-photo {
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.hero-photo:hover {
  transform: scale(1.05);
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
  background-color: transparent;
}

.tech-stack {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  /* flex-grow: 1; */
}
.tech-icon {
  width: 50px; /* Adjust as needed */
  height: 50px; /* Adjust as needed */
  transition: all 0.3s ease;
  object-fit: fit-content;
}
@keyframes breathe {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.photo-container {
  animation: breathe 5s ease-in-out infinite;
}
.resume-paragraph {
  width: 100%;
  margin-top: 5vh;
}
</style>
