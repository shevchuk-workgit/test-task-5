<template>
  <button class="button">
    <img class="button_img" src="@/assets/icons/remove-icon.svg" />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  background-color: #fff;
  border: 2px solid rgb(180, 180, 180);
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: 0.2s;
}
.button:hover {
  background-color: rgb(200, 200, 200);
}
.button:active {
  background-color: rgb(217, 90, 0);
}
.button_img {
  height: 35px;
  width: 35px;
}
</style>
