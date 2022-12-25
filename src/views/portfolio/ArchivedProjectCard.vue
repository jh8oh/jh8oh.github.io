<template>
  <div class="archived-project-card-wrapper">
    <div class="archived-project-card">
      <div class="archived-project-card-heading">
        <h4>{{ project.title }}</h4>
        <ul class="archived-project-card-links">
          <li v-for="link in project.links" :key="link.to">
            <a :href="link.to" target="_blank">
              <HoverIcon :unhoveredIcon="link.unhoveredIcon" :hoveredIcon="link.hoveredIcon" />
            </a>
          </li>
        </ul>
      </div>
      <p class="body2" v-html="project.description" />
      <ul class="archived-project-card-tags">
        <li v-for="tag in project.tags" :key="tag">
          <code>{{ tag }}</code>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Project } from "@/assets/content/projects";
import HoverIcon from "@/components/HoverIcon.vue";

class Prop {
  project!: Project;
}

@Options({
  components: {
    HoverIcon,
  },
})
export default class ArchivedProjectCard extends Vue.with(Prop) {}
</script>
