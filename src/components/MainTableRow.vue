<template>
  <tr>
    <td
      class="main-table-row_cell"
      v-for="(userFeature, index) in changedUser"
      :key="index"
    >
      <input
        v-if="textEditing"
        class="main-table-row_cell_font main-table-row_cell_input"
        type="text"
        v-model="changedUser[index]"
      />
      <p v-if="!textEditing" class="main-table-row_cell_font">
        {{ userFeature }}
      </p>
    </td>
    <td class="main-table-row_cell main-table-row_cell_row-button">
      <ui-edit-row-button
        v-if="!textEditing"
        @click="startEditRow"
      ></ui-edit-row-button>
      <ui-accept-row-button
        v-if="textEditing"
        @click="acceptEditRow"
      ></ui-accept-row-button>
      <ui-remove-row-button></ui-remove-row-button>
    </td>
  </tr>
</template>

<script>
import UiEditRowButton from "@/ui/UiEditRowButton.vue";
import UiRemoveRowButton from "@/ui/UiRemoveRowButton.vue";
import UiAcceptRowButton from "@/ui/UiAcceptRowButton.vue";
export default {
  components: { UiEditRowButton, UiRemoveRowButton, UiAcceptRowButton },

  data() {
    return {
      changedUser: false,
      textEditing: false,
    };
  },

  props: {
    user: {
      type: Array,
    },
  },

  methods: {

    startEditRow() {
      this.textEditing = true;
    },
    acceptEditRow() {
      this.textEditing = false;
    },
  },

  mounted() {
    this.changedUser = this.user;
  },
};
</script>

<style scoped>
.main-table-row_cell {
  padding: 10px;
  text-align: center;
}

.main-table-row_cell_input {
  box-sizing: border-box;
  width: 100%;

  background-color: white;

  border: 1px solid black;
}
.main-table-row_cell_font {
  word-break: break-word;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
}

.main-table-row_cell_input:hover {
  outline: 1px solid black;
}
.main-table-row_cell_input:focus {
  outline: 2px solid black;
}
.main-table-row_cell_row-button {
  width: 100px;
}
</style>
