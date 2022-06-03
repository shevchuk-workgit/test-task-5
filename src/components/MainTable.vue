<template>
  <table class="main-table_table">
    <thead class="main-table_head">
      <tr>
        <th
          class="main-table_head_cell"
          v-for="header in $store.state.headers"
          :key="header.id"
        >
          {{ header.title }}
        </th>
        <th class="main-table_head_cell">
          <img
            class="main-table_settings-icon"
            src="@/assets/icons/settings-icon.svg"
          />
        </th>
      </tr>
    </thead>
    <tbody class="main-table_body">
      <main-table-row
        class="main-table_body_row"
        v-for="(row, index) in $store.state.rowList"
        :key="row.id"
        :row="row"
        :indexRow="index"
      >
      </main-table-row>
    </tbody>
  </table>
</template>

<script>
import MainTableRow from "./MainTableRow.vue";

export default {
  components: { MainTableRow },

  data() {
    return {};
  },

  props: {
    // headers: {
    //   type: Object,
    // },
    // rowList: {
    //   type: Array,
    // },
  },

  methods: {
    // changeRowFeature(newRow, indexRow) {
    //   this.$emit("changeRow", newRow, indexRow);
    // },
    // removeRow(indexRow) {
    //   this.$emit("removeRow", indexRow);
    // },
  },
};
</script>

<style scoped>
.main-table_table {
  margin-bottom: 16px;
  table-layout: fixed;
  width: 100%;
}
.main-table_head {
  color: white;
  background-color: rgb(50, 50, 50);
}
.main-table_head_cell {
  padding: 10px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: white;
}
.main-table_body {
  background-color: rgb(245, 245, 245);
}
.main-table_body tr:nth-child(even) {
  background-color: rgb(220, 220, 220);
}
.main-table_body_row {
  border-bottom: 2px solid rgb(180, 180, 180);
}

.main-table_settings-icon {
  height: 30px;
}
</style>
