<template>
  <button class="button">
    <img class="button_img" src="@/assets/icons/accept-font.svg" />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  background-color: rgb(0, 229, 0);
  border: 2px solid rgb(180, 180, 180);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  transition: 0.2s;
}
.button:hover {
  background-color:rgb(0, 161, 0);
}
.button:active {
  background-color: rgb(217, 90, 0);
}
.button_img {
  height: 35px;
  width: 35px;
}
</style>