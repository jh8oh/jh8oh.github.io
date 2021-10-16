<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/layout/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" src="./scss/main.scss"/>
