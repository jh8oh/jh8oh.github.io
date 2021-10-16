<template>
  <header>
    <nav>
      <router-link to="/">
        <img
          @mouseover="logoHovered = true"
          @mouseleave="logoHovered = false"
          :src="logo"
          alt="Logo"
        />
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import logoWhite from "@/assets/ico/header/logo-white.png";
import logoAccent from "@/assets/ico/header/logo-accent.png";

@Options({
  computed: {
    logo() {
      return this.logoHovered ? logoAccent : logoWhite;
    },
  },
})
export default class Header extends Vue {
  private logoHovered = false;
}
</script>
