<template>
  <div id="not-found" class="page">
    <BackgroundImage />
    <div id="not-found-content">
      <span id="code">404</span>
      <span id="description">Page not found</span>
      <Button :text="'Back to home'" :buttonClass="'secondary'" @clicked="goToHome()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BackgroundImage from "@/components/BackgroundImage.vue";
import Button from "@/components/Button.vue";

@Options({
  components: {
    BackgroundImage,
    Button,
  },
})
export default class NotFound extends Vue {
  private goToHome() {
    this.$router.push("/");
  }
}
</script>
