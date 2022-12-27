<template>
  <div id="portfolio" class="page">
    <div class="page-content default">
      <h1>Portfolio</h1>
      <section id="featured">
        <ul id="featured-projects">
          <li v-for="project in featuredProjects" :key="project.title">
            <FeaturedProjectCard :project="project" />
          </li>
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
import Footer from "@/components/layout/Footer.vue";
import FeaturedProjectCard from "./FeaturedProjectCard.vue";
import ArchivedProjectCard from "./ArchivedProjectCard.vue";

import { featuredProjects, archivedProjects } from "@/assets/content/projects";

@Options({
  components: {
    FeaturedProjectCard,
    ArchivedProjectCard,
    Footer,
  },
})
export default class Portfolio extends Vue {
  private featuredProjects = featuredProjects;
  private archivedProjects = archivedProjects;
}
</script>
