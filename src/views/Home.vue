<template>
  <div id="home" class="page">
    <BackgroundImage />
    <div id="greeting">
      <span>Hi, I'm</span>
      <br />
      <span id="name">Ji Ho Oh</span>
      <br />
      <span>Software Developer, Programmer, Designer</span>
      <br /><br />
      <Button :text="'Get to know me'" :buttonClass="'secondary'" @clicked="goToAbout()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import router from "@/router";
import BackgroundImage from "@/components/BackgroundImage.vue";
import Button from "@/components/Button.vue";

@Options({
  components: {
    BackgroundImage,
    Button,
  },
})
export default class Home extends Vue {
  private goToAbout() {
    router.push("/about");
  }
}
</script>
