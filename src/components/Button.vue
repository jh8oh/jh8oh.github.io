<template>
  <button @click="emitClicked()" :class="buttonClass">
    <strong>{{ text }}</strong>
  </button>
</template>

<script lang="ts">
import { Vue, prop } from "vue-class-component";

class Props {
  text!: string;
  buttonClass = prop<string>({ default: "" });
}

export default class Button extends Vue.with(Props) {
  private emitClicked() {
    setTimeout(() => this.$emit("clicked"), 100);
  }
}
</script>
