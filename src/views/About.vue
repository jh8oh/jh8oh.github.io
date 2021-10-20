<template>
  <div class="page">
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/layout/Footer.vue";

@Options({
  components: {
    Footer,
  },
})
export default class About extends Vue {}
</script>
