<template>
  <div id="about" class="page">
    <div id="about-content" class="page-content">
      <h1>About Me</h1>
      <section id="intro">
        <img src="../assets/img/about/profile-pic.jpg" alt="Profile Picture" />
        <p>
          Hello! I'm Ji Ho Oh (오지호) but I also go by Jay. I'm a 3rd-year undergrad at the
          University of Waterloo.<br /><br />
          I like creating user-facing software mostly because I want the things I make to look
          <span><em>a e s t h e t i c</em></span
          >. This has led to me building websites, Android applications, and games. At the moment, I
          am focusing on learning new libraries and frameworks over specializing in one specific
          aspect. However, I am also looking for a field that might capture my interest and allow me
          to dive deeper.<br /><br />Aside from coding, my hobbies include playing video games,
          reading manga, and world-building.
        </p>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/layout/Footer.vue";

@Options({
  components: {
    Footer,
  },
})
export default class About extends Vue {}
</script>
