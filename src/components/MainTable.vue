<template>
  <table class="main-table_table">
    <thead class="main-table_head">
      <tr>
        <th
          class="main-table_head_cell"
          v-for="(header, keyColumn) in $store.state.headers"
          :key="header.id"
        >
          <div class="main-table_head_cell_container">
            <p>{{ header.title }}</p>
            <div class="main-table_button_container">
              <div class="main-table_button-sort_container">
                <ui-sort-up-column-button
                  @click="sortReverseRowList(keyColumn, header.type)"
                ></ui-sort-up-column-button>
                <ui-sort-down-column-button
                  @click="sortRowList(keyColumn, header.type)"
                ></ui-sort-down-column-button>
              </div>
              <ui-remove-column-button
                @click="removeColumn(keyColumn)"
              ></ui-remove-column-button>
            </div>
          </div>
        </th>

        <th class="main-table_head_cell main-table_head_button-column">
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
import UiRemoveColumnButton from "@/ui/UiRemoveColumnButton.vue";
import UiSortUpColumnButton from "@/ui/UiSortUpColumnButton.vue";
import UiSortDownColumnButton from "@/ui/UiSortDownColumnButton.vue";

export default {
  components: {
    MainTableRow,
    UiRemoveColumnButton,
    UiSortUpColumnButton,
    UiSortDownColumnButton,
  },

  data() {
    return {};
  },

  methods: {
    sortReverseRowList(keyColumn, columnType) {
      this.$store.commit("disableTextEditing");
      this.$store.commit("sortReverseRowList", [keyColumn, columnType]);
      this.$store.commit("setMainTable");
    },
    sortRowList(keyColumn, columnType) {
      this.$store.commit("disableTextEditing");
      this.$store.commit("sortRowList", [keyColumn, columnType]);
      this.$store.commit("setMainTable");
    },
    removeColumn(keyColumn) {
      this.$store.commit("disableTextEditing");
      this.$store.commit("removeColumn", [keyColumn]);
      this.$store.commit("setMainTable");
    },
  },
};
</script>

<style scoped>
.main-table_head_cell_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-table_button_container {
  margin-left: 5px;
  display: flex;
}
.main-table_button-sort_container {
  display: flex;
  flex-direction: column;
}

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
  word-break: break-word;

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
  margin-right: 35px;
}
.main-table_head_button-column{
  text-align: right;
  width: 100px;
}
</style>
