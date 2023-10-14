<template>
  <div class="hero-container">
    <div class="hero-card">
      <div class="row">
        <div class="column">
          <div class="photo-container">
            <img :src="heroPicture" alt="Hero" class="hero-photo" />
          </div>
        </div>
        <div class="column">
          <h1>{{ title }}</h1>
          <h2>{{ subtitle }}</h2>
          <div class="resume-paragraph"></div>
          <p>{{ introParagraph }}</p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="tech-container">
      <div class="row">
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

            <v-img
              v-for="(item, index) in techStackPngs"
              :key="index"
              :src="item.icon"
              alt="Tech Icon"
              class="tech-icon"
            >
              <v-tooltip activator="parent" location="bottom">
                {{ item.name }}</v-tooltip
              >
            </v-img>
          </div>
        </div>
      </div>
      <div class="row">
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
  },
};
</script>

<style scoped>
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
  padding: 2.5rem;
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

.tech-icon {
  transition: transform 0.3s ease;
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
