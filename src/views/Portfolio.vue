<template>
  <div id="portfolio" class="page">
    <div id="portfolio-content" class="page-content">
      <h1>Portfolio</h1>
      <section id="featured">
        <ul>
          <li v-for="project in featuredProjects" :key="project.title"></li>
        </ul>
      </section>
      <section id="archive">
        <h2>Archive</h2>
        <ul id="archive-projects">
          <li v-for="project in archivedProjects" :key="project.title">
            <ArchivedProjectCard :project="project" />
          </li>
        </ul>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ArchivedProjectCard from "@/components/views/portfolio/ArchivedProjectCard.vue";
import Footer from "@/components/layout/Footer.vue";

import {
  oneStoryADay,
  weekPlanner,
  yearFacts,
  personalWebsiteV1,
  cppChess,
  colorPicker,
} from "@/assets/content/projects";

@Options({
  components: {
    ArchivedProjectCard,
    Footer,
  },
})
export default class Portfolio extends Vue {
  private featuredProjects = [];
  private archivedProjects = [
    oneStoryADay,
    weekPlanner,
    yearFacts,
    personalWebsiteV1,
    cppChess,
    colorPicker,
  ];
}
</script>
