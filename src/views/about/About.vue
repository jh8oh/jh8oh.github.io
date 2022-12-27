<template>
  <div id="about" class="page">
    <div class="page-content default">
      <h1>About Me</h1>
      <section id="intro">
        <img src="../../assets/img/about/profile-pic.jpg" alt="Profile Picture" />
        <p>
          Hello! My name's <strong>Ji Ho Oh</strong> (오지호) but I go by <strong>Jay</strong> as
          well. I'm a 4th-year Computational Mathematrics undergrad at the University of
          Waterloo.<br /><br />
          I like the things I make to be
          <span id="wave">
            <span>『</span>
            <span>ａ</span>
            <span>ｅ</span>
            <span>ｓ</span>
            <span>ｔ</span>
            <span>ｈ</span>
            <span>ｅ</span>
            <span>ｔ</span>
            <span>ｉ</span>
            <span>ｃ</span>
            <span>』</span>
          </span>
          which has led me to designing and developing user-facing applications, such as websites or
          Android apps. At the moment, I'm focusing on expanding my repetoire of libraries and
          frameworks over specializing in one specific aspect. However, I am also looking for a
          field that might capture my interest and lead me to diving deeper.<br /><br />
          Apart from coding, I have a wide range of creative interests: landscape art, shot
          composition, and most of all music (big indie rock fan).
        </p>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <div id="experience-content">
          <ul id="timeline">
            <div class="navigation-bar-scroll-wrapper">
              <h4 class="navigation-bar-content">
                <li
                  v-for="(experience, index) in experiences"
                  :key="index"
                  @click="activeExperience = experience"
                  :class="{ active: activeExperience === experience }"
                >
                  {{ experience.employer }}
                </li>
              </h4>
            </div>
          </ul>
          <transition name="flicker" mode="out-in">
            <ExperienceCard :activeExperience="activeExperience" />
          </transition>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/layout/Footer.vue";
import ExperienceCard from "./ExperienceCard.vue";
import { experiences } from "@/assets/content/experience";

@Options({
  components: {
    ExperienceCard,
    Footer,
  },
})
export default class About extends Vue {
  private experiences = experiences;
  private activeExperience = experiences[0];
}
</script>
