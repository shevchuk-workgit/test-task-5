<template>
  <tr>
    <template v-for="(rowFeature, index) in changedRow" :key="rowFeature.id">
      <td
        v-if="rowFeature.title || rowFeature.title == ''"
        class="main-table-row_cell"
      >
        <input
          v-if="row.textEditing && rowFeature.type !== 'number'"
          class="main-table-row_cell_font main-table-row_cell_input"
          type="text"
          v-model="changedRow[index].title"
        />
        <input
          v-if="row.textEditing && rowFeature.type === 'number'"
          class="main-table-row_cell_font main-table-row_cell_input"
          type="number"
          v-model="changedRow[index].title"
          :step="changedRow[index].step"
          @keypress.stop="
            inputTypeNumber(
              changedRow[index].title,
              changedRow[index].step,
              $event
            )
          "

        />
        <p v-if="!row.textEditing" class="main-table-row_cell_font">
          {{ rowFeature.title }}
        </p>
      </td>
    </template>
    <td class="main-table-row_cell main-table-row_cell_row-button">
      <ui-edit-row-button
        v-if="!row.textEditing"
        @click="startEditRow"
      ></ui-edit-row-button>
      <ui-accept-row-button
        v-if="row.textEditing"
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
      changedRow: [],
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
    asf(a) {
      console.log(a);
    },
    inputTypeNumber(title, step, event) {
      let quantitySymbols;
      if (step.length <= 2) {
        quantitySymbols = 0;
      } else if (step.length > 2) {
        quantitySymbols = step.length - 2;
      }

      let calculate = title - Math.floor(title);
      calculate =
        Math.floor(calculate * Math.pow(10, quantitySymbols)) /
        Math.pow(10, quantitySymbols);

      // console.log("calculate", calculate);
      calculate = `${calculate}`;
      // console.log("calculate", calculate.length);
      // console.log("quantitySymbols", quantitySymbols);

      let newTitle =
        Math.floor(title * Math.pow(10, quantitySymbols)) /
        Math.pow(10, quantitySymbols);

      if (calculate.length >= quantitySymbols + 2) {
        // event.target.value =event.target.value.slice(0,-1)
        // event.target.value = event.target.value.slice(0,`${newTitle}`.length)
        event.target.value = newTitle;
        // event.preventDefault();
      }

      // item.preventDefault();
      // console.log(item.target.value.length);
      // if (item.target.value.length > 4) {
      //   item.preventDefault();
      // }
    },

    startEditRow() {
      this.$store.commit("changeTextEditing", [true, this.indexRow]);
    },

    acceptEditRow() {
      this.$store.commit("changeRow", [this.changedRow, this.indexRow]);
      this.$store.commit("changeTextEditing", [false, this.indexRow]);
    },

    deleteRow() {
      this.$store.commit("removeRow", this.indexRow);
    },
  },

  updated() {
    if (!this.row.textEditing) {
      this.watchRowList;
    }
  },

  mounted() {
    this.changedRow = JSON.parse(
      JSON.stringify(this.$store.state.rowList[this.indexRow])
    );
  },

  computed: {
    watchRowList() {
      this.changedRow = this.changedRow = JSON.parse(
        JSON.stringify(this.$store.state.rowList[this.indexRow])
      );
    },
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
