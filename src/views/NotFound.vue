<template>
  <div id="not-found" class="page">
    <div id="not-found-content">
      <span class="display">404</span>
      <br /><br />
      <Button :text="'Back to home'" :buttonClass="'secondary no-border'" @clicked="goToHome()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/Button.vue";

@Options({
  components: {
    Button,
  },
})
export default class NotFound extends Vue {
  private goToHome() {
    this.$router.push("/");
  }
}
</script>
