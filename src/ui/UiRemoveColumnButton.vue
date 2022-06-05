<template>
  <button class="button">
    <img class="button_img" src="@/assets/icons/remove-white-icon.svg" />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  background-color: rgb(50, 50, 50);
  border: none;
  border-radius: 8px;
  transition: 0.2s;
  padding: 5px;
}
.button:hover {
  background-color: rgb(10, 10, 10);
}
.button:active {
  background-color: rgb(217, 90, 0);
}
.button_img {
  display: block; 
  height: 20px;
  width: 20px;
}
</style>
