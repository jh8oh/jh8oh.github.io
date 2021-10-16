<template>
  <div id="home">
    <div id="background-image" />
    <div id="greeting">
      <span>Hi, I'm</span>
      <span id="name">Ji Ho Oh</span>
      <span>Software Developer, Programmer, Designer</span>
      <br /><br />
      <Button
        :text="'Get to know me'"
        :buttonClass="'secondary'"
        @clicked="goToAbout()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import router from "@/router";
import Button from "@/components/Button.vue";

@Options({
  components: {
    Button,
  },
})
export default class Home extends Vue {
  private goToAbout() {
    router.push("/about");
  }
}
</script>
