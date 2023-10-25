<template>
  <v-container
    v-if="isDesktop"
    class="hero-container desktop hidden-sm-and-down"
  >
    <div class="hero-card">
      <div class="row">
        <div class="column">
          <div class="photo-container">
            <v-img
              :src="heroPicture"
              alt="Vicente Zurita Profile"
              class="hero-photo"
            />
          </div>
        </div>
        <div class="column">
          <h1>{{ $t("homeProfile.title") }}</h1>
          <h2>{{ $t("homeProfile.subtitle") }}</h2>
        </div>
      </div>
    </div>
  </v-container>
  <v-container v-else class="hero-container mobile hidden-md-and-up">
    <div class="hero-card">
      <div class="row">
        <div class="column">
          <div class="photo-container">
            <v-img
              :src="heroPicture"
              alt="VicenteZuritaProfile"
              class="hero-photo"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <h1>{{ $t("homeProfile.title") }}</h1>
          <h2>{{ $t("homeProfile.subtitle") }}</h2>
        </div>
      </div>
    </div>
  </v-container>
  <v-container class="tech-container">
    <div class="tech-row">
      <div class="stack-column">
        <p>Tech Stack</p>
      </div>
      <div class="column">
        <div class="tech-stack">
          <div v-for="(item, index) in techStackIcons" :key="index">
            <v-icon
              :icon="'mdi-' + item.icon"
              :alt="item.name"
              class="tech-icon"
            >
            </v-icon>
            <v-tooltip activator="parent" location="top">
              {{ item.name }}</v-tooltip
            >
          </div>
        </div>
      </div>
    </div>
    <div class="tech-row">
      <div class="stack-column">
        <p>Dev Tools</p>
      </div>
      <div class="column">
        <div class="tech-stack">
          <div v-for="(item, index) in devTools" :key="index">
            <v-icon
              :icon="'mdi-' + item.icon"
              :alt="item.name"
              class="tech-icon"
            >
            </v-icon>
            <v-tooltip activator="parent" location="top">
              {{ item.name }}</v-tooltip
            >
          </div>
        </div>
      </div>
    </div>
  </v-container>
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
h1 {
  text-decoration: none; /* to remove underline generated from main.scss */
}
/* responsiveness related styles */
@media screen and (max-width: 960px) {
  .tech-container {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 3rem;
  }
  .row {
    padding-bottom: 1.5rem;
  }
  .tech-container .row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
/* styles for elements inside hero-container */
.hero-container {
  padding: 1.5rem;
  .hero-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 512px;
    margin: auto;
    .row {
      display: flex;
      justify-content: center;
      gap: 1rem;
      .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .photo-container {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        animation: breathe 5s ease-in-out infinite;
        overflow: hidden;
        .hero-photo {
          width: 100%;
          height: auto;
          max-height: fit-content;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
          object-fit: cover;
          transition: all 0.3s ease;
        }
      }
    }
  }
}
/* styles for elements inside tech-container */
.tech-container {
  display: flex;
  flex-direction: column;
  .tech-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
    .stack-column {
      display: flex;
      align-items: center;
    }
    .stack-column p {
      font-size: 0.8rem;
      font-weight: bold;
    }

    .tech-stack {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      gap: 0.25rem;
      flex-wrap: wrap;
    }
    .tech-icon {
      width: 50px;
      height: 50px;
      transition: all 0.3s ease;
      object-fit: fit-content;
    }
    .tech-icon {
      transition: transform 0.3s ease;
      :hover {
        transform: scale(1.2);
      }
    }
  }
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
</style>
