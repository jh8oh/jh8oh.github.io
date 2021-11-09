<template>
  <div class="featured-project-card">
    <transition-group name="slide">
      <img
        class="featured-project-card-img"
        v-for="index in [currentImage]"
        :key="index"
        :src="project.imageLinks[currentImage]"
      />
    </transition-group>
    <div>
      <div class="featured-project-card-heading">
        <h3>{{ project.title }}</h3>
        <ul>
          <li v-for="link in project.links" :key="link.to">
            <a :href="link.to" target="_blank">
              <HoverIcon :unhoveredIcon="link.unhoveredIcon" :hoveredIcon="link.hoveredIcon" />
            </a>
          </li>
        </ul>
      </div>
      <p v-html="project.description" />
      <ul class="featured-project-card-tags">
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
export default class FeaturedProjectCard extends Vue.with(Prop) {
  private currentImage = 0;

  mounted(): void {
    setInterval(() => {
      if (this.currentImage < this.project.getImageLinkLength() - 1) {
        this.currentImage++;
      } else {
        this.currentImage = 0;
      }
    }, 5000);
  }
}
</script>
