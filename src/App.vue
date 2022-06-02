<template>
  <div class="main_container">
    <main-page></main-page>
  </div>
</template>

<script>
import "@/assets/reset.css"
import MainPage from "./pages/MainPage.vue";
export default {
  components: { MainPage },
};
</script>

<style scoped>
.main_container {
  padding: 50px;
}
</style>
