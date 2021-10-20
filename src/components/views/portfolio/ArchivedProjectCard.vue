<template>
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
    <p v-html="project.description" />
    <ul class="archived-project-card-tags">
      <li v-for="tag in project.tags" :key="tag">
        <code>{{ tag }}</code>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HoverIcon from "@/components/HoverIcon.vue";

class Prop {
  project!: {
    title: string;
    links: {
      to: string;
      unhoveredIcon: string;
      hoveredIcon: string;
    };
    description: string;
    tags: string[];
  };
}

@Options({
  components: {
    HoverIcon,
  },
})
export default class ArchivedProjectCard extends Vue.with(Prop) {}
</script>
