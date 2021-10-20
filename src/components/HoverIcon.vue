<template>
  <img @mouseover="logoHovered = true" @mouseleave="logoHovered = false" :src="logo" alt="Logo" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

class Props {
  unhoveredIcon!: string;
  hoveredIcon!: string;
}

@Options({
  computed: {
    logo() {
      return this.logoHovered ? this.hoveredIcon : this.unhoveredIcon;
    },
  },
})
export default class HoverIcon extends Vue.with(Props) {
  private logoHovered = false;
}
</script>
