<template>
  <button class="button">
    <img class="icon_add" src="@/assets/icons/add-icon.svg">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  background-color: rgb(77, 187, 255);
  border: none;
  border-radius: 5px;
  padding: 7px;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: white;
  transition: 0.2s;
}
.button:hover {
  background-color: rgb(25, 137, 207);
}
.button:active {
  background-color: rgb(217, 90, 0);
}
.icon_add {
  height: 16px;
  width: 16px;
  margin-right: 5px;
}
</style>
