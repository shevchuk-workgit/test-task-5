<template>
  <tr>
    <template v-for="(rowFeature, index) in changedRow" :key="rowFeature.id">
      <td v-if="rowFeature.title" class="main-table-row_cell">
        <input
          v-if="textEditing"
          class="main-table-row_cell_font main-table-row_cell_input"
          type="text"
          v-model="changedRow[index].title"
        />
        <p v-if="!textEditing" class="main-table-row_cell_font">
          {{ rowFeature.title }}
        </p>
      </td>
    </template>
    <td class="main-table-row_cell main-table-row_cell_row-button">
      <ui-edit-row-button
        v-if="!textEditing"
        @click="startEditRow"
      ></ui-edit-row-button>
      <ui-accept-row-button
        v-if="textEditing"
        @click="acceptEditRow"
      ></ui-accept-row-button>
      <ui-remove-row-button @click="deleteRow"></ui-remove-row-button>
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
      changedRow: {},
      textEditing: false,
    };
  },

  props: {
    row: {
      type: Object,
    },
    indexRow: {
      type: Number,
    },
  },

  methods: {
    startEditRow() {
      this.textEditing = true;
    },
    acceptEditRow() {
      this.textEditing = false;

      this.$store.commit("changeRow", [this.changedRow, this.indexRow]);
    },

    deleteRow() {
      this.$store.commit("removeRow", this.indexRow);
    },
  },

  mounted() {
    this.changedRow = JSON.parse(
      JSON.stringify(this.$store.state.rowList[this.indexRow])
    );

    if (this.row.textEditing === true) {
      this.textEditing = true;
    }
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
