<template>
  <div id="details">
    <h3>
      {{ activeExperience.position }} @
      <a :href="activeExperience.website">{{ activeExperience.employer }}</a>
    </h3>
    <span id="dates">{{ activeExperience.dates }}</span>
    <p v-html="activeExperience.description" />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Experience } from "@/assets/content/experience";

class Props {
  activeExperience!: Experience;
}

export default class ExperienceCard extends Vue.with(Props) {}
</script>
