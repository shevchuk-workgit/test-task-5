<template>
  <button class="button">
    <img class="button_img" src="@/assets/icons/arrow-up.svg" />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  background-color: rgb(50, 50, 50);
  border: none;
  border-top-left-radius: 5px;
  transition: 0.2s;
  padding: 0;
}
.button:hover {
  background-color: rgb(10, 10, 10);
}
.button:active {
  background-color: rgb(217, 90, 0);
}
.button_img {
  display: block; 
  height: 15px;
  width: 15px;
}
</style>