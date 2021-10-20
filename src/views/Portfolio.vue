<template>
  <div id="portfolio" class="page">
    <div id="portfolio-content" class="page-content">
      <h1>Portfolio</h1>
      <section id="archive">
        <ul id="archive-projects">
          <li v-for="project in archivedProjects" :key="project.id">
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
} from "@/assets/content/projects";

@Options({
  components: {
    ArchivedProjectCard,
    Footer,
  },
})
export default class Portfolio extends Vue {
  private archivedProjects = [oneStoryADay, weekPlanner, yearFacts, personalWebsiteV1, cppChess];
}
</script>
