<template>
  <div id="about" class="page">
    <div class="page-content default">
      <h1>About Me</h1>
      <section id="intro">
        <img src="../../assets/img/about/profile-pic.jpg" alt="Profile Picture" />
        <p>
          Hello! My name's <strong>Ji Ho Oh</strong> (오지호) but most people call me
          <strong>Jay</strong>. With a degree in Computational Mathematics from the University of
          Waterloo under my belt, I'm currently working for Ford Motor Company as an Android
          Developer.<br /><br />
          I like making things that are
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
          , which is why I'm drawn to designing and developing front-end applications like websites
          and Android apps. Right now, I'm focusing on expanding my repetoire by exploring a variety
          of libraries and frameworks. I'm always on the lookout for new ways to elevate my work.<br /><br />
          Apart from coding, I have a wide range of creative interests. Whether I'm capturing
          moments through my lens, creating stories for my tabletop campaign, or shredding on my
          electric guitar, I'm always seeking inspiration from the world around me.
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
