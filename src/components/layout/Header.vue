<template>
  <header>
    <nav>
      <router-link id="logo" to="/">
        <img
          @mouseover="logoHovered = true"
          @mouseleave="logoHovered = false"
          :src="logo"
          alt="Logo"
        />
      </router-link>
      <input id="toggle-menu" type="checkbox" />
      <label id="menu-icon" for="toggle-menu" />
      <ul id="content_links">
        <li
          v-for="route in contentRoutes"
          :key="route.path"
          :class="{ right: route.path === '/contact' }"
        >
          <router-link :to="route.path">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import router from "@/router";
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
  private contentRoutes = router.options.routes.filter((r) => r.path != "/");
}
</script>
