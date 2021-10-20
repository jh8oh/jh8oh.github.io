<template>
  <header>
    <nav>
      <router-link id="logo" to="/">
        <HoverIcon :unhoveredIcon="logoWhite" :hoveredIcon="logoAccent" />
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
import HoverIcon from "@/components/HoverIcon.vue";
import logoWhite from "@/assets/ico/header/logo-white.png";
import logoAccent from "@/assets/ico/header/logo-accent.png";

@Options({
  components: {
    HoverIcon,
  },
})
export default class Header extends Vue {
  private logoWhite = logoWhite;
  private logoAccent = logoAccent;

  private contentRoutes = router.options.routes.filter(
    (r) => r.path != "/" && r.path != "/:catchAll(.*)"
  );
}
</script>
