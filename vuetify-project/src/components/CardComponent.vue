<template>
  <!-- this component is a v-card component with an image, title, subtitle, expansive text card and a bold text row under the expansive text -->
  <v-card>
    <div class="card-image">
      <a @click.prevent="openInNewTab(itemHref)">
        <v-img :src="itemImage" alt="Project Image"> </v-img>
      </a>
    </div>
    <v-card-title>
      {{ itemTittle }}
    </v-card-title>
    <v-card-subtitle>
      {{ itemSubtitle }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text" @click="toggleCard(index)">
        {{ expandMsg }}
      </v-btn>
      <v-spacer />
      <v-btn
        :icon="show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="toggleCard(index)"
      />
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show[index]">
        <v-divider></v-divider>
        <v-card-text>
          {{ itemContent }}
        </v-card-text>
        <v-card-text v-if="itemTasks">
          <strong>Tasks:</strong>
          <ul>
            <li v-for="(task, taskKey) in itemTasks" :key="taskKey">
              {{ $t(itemTranslationKey + "." + task) }}
            </li>
          </ul>
        </v-card-text>
      </div>
    </v-expand-transition>
    <v-card-text v-if="underText">
      <strong> Technologies: {{ underText }} </strong>
    </v-card-text>
  </v-card>
</template>
<script lang="js">
export default {
    props: {
  index: Number,
  expandMsg: String,
  itemImage: String,
  itemTittle: String,
  itemSubtitle: String,
  itemTittleKey: String,
  itemContent: String,
  itemHref: String,
  itemContentList: Array,
  itemTranslationKey: String,
  underText: String,
  itemTasks: Array, // Add this line for the itemTasks prop
},

    data() {
        return {
            show: [],
        };
    },
    methods: {
        toggleCard(index) {
            this.show[index] = !this.show[index];
      },
        openInNewTab(href) {
          window.open(href, "_blank");
      },
    },
};
</script>
<style scoped>
.v-card-subtitle {
  white-space: pre-wrap;
}
.v-card-text ul {
  list-style-type: disc;
  padding-left: 2rem;
}
</style>
