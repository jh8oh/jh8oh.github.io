<template>
  <div id="sidebar-links">
    <nav>
      <ul>
        <li v-for="link in links" :key="link.title">
          <a :href="link.to" target="_blank">
            <HoverIcon :unhoveredIcon="link.unhoveredIcon" :hoveredIcon="link.hoveredIcon" />
          </a>
          <span class="body2">{{ link.title }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HoverIcon from "@/components/HoverIcon.vue";

import githubDark from "@/assets/ico/sidebar-links/github-dark.png";
import githubPrimary from "@/assets/ico/sidebar-links/github-primary.png";
import linkedInDark from "@/assets/ico/sidebar-links/linkedin-dark.png";
import linkedInPrimary from "@/assets/ico/sidebar-links/linkedin-primary.png";
import resumeDark from "@/assets/ico/sidebar-links/resume-dark.png";
import resumePrimary from "@/assets/ico/sidebar-links/resume-primary.png";
import resumeTo from "@/assets/docs/resume.pdf";

@Options({
  components: {
    HoverIcon,
  },
})
export default class SidebarLinks extends Vue {
  private githubLink = {
    title: "Github",
    unhoveredIcon: githubDark,
    hoveredIcon: githubPrimary,
    to: "https://github.com/jh8oh",
  };

  private linkedInLink = {
    title: "LinkedIn",
    unhoveredIcon: linkedInDark,
    hoveredIcon: linkedInPrimary,
    to: "https://www.linkedin.com/in/ji-ho-oh-63b590191/",
  };

  private resumeLink = {
    title: "Resume",
    unhoveredIcon: resumeDark,
    hoveredIcon: resumePrimary,
    to: resumeTo,
  };

  private links = [this.githubLink, this.linkedInLink, this.resumeLink];
}
</script>
