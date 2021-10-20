<template>
  <Header />
  <div id="content">
    <router-view v-slot="{ Component, route }">
      <transition
        :name="route.meta.transitionName"
        :mode="route.meta.transitionName === '' ? 'out-in' : 'in-out'"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <SidebarLinks v-if="isContent" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/layout/Header.vue";
import SidebarLinks from "@/components/layout/SidebarLinks.vue";

@Options({
  components: {
    Header,
    SidebarLinks,
  },
  computed: {
    isContent() {
      const routeName = this.$route.name;
      return !(routeName === "Home" || routeName === "NotFound");
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" src="./scss/main.scss" />
