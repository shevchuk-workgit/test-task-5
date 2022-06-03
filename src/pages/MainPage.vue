<template>
  <div class="main-page_container">
    <ui-add-button class="ui-add-button_column" @click="createNewColumn"
      >Add column</ui-add-button
    >
    <main-table
      :headers="headers"
      :rowList="rowList"
      @changeRow="changeRow"
      @removeRow="removeRow"
    ></main-table>
    <ui-add-button class="ui-add-button_row" @click="createNewRow"
      >Add New Row</ui-add-button
    >
  </div>
</template>

<script>
import UiAddButton from "@/ui/UiAddButton.vue";
import MainTable from "@/components/MainTable.vue";

export default {
  components: { UiAddButton, MainTable },

  data() {
    return {
      currentColumnValue: 4,
      headers: {
        column_1: { title: "Name", type: "text" },
        column_2: { title: "Gental", type: "text" },
        column_3: { title: "email", type: "text" },
        column_4: { title: "Birthday", type: "date" },
      },

      rowList: [
        {
          id: 1,
          textEditing: false,
          column_1: { title: "James", type: "text" },
          column_2: { title: "Male", type: "text" },
          column_3: { title: "asfasfsf@hotmail.com", type: "text" },
          column_4: { title: "22.01.1993", type: "date" },
        },
        {
          id: 2,
          textEditing: false,
          column_1: { title: "Sams", type: "text" },
          column_2: { title: "Male", type: "text" },
          column_3: { title: "dfdfhdfhdfh@hotmail.com", type: "text" },
          column_4: { title: "17.04.1999", type: "date" },
        },
        {
          id: 3,
          textEditing: false,
          column_1: { title: "Mary", type: "text" },
          column_2: { title: "Female", type: "text" },
          column_3: { title: "jgfgdfdfg@hotmail.com", type: "text" },
          column_4: { title: "05.05.1995", type: "date" },
        },
        {
          id: 4,
          textEditing: false,
          column_1: { title: "Ashly", type: "text" },
          column_2: { title: "Female", type: "text" },
          column_3: { title: "afhdfhr@hotmail.com", type: "text" },
          column_4: { title: "31.08.1996", type: "date" },
        },
        {
          id: 5,
          textEditing: false,
          column_1: { title: "Eden", type: "text" },
          column_2: { title: "Male", type: "text" },
          column_3: { title: "asfsaffw@hotmail.com", type: "text" },
          column_4: { title: "22.11.2001", type: "date" },
        },
      ],
    };
  },

  methods: {
    createNewColumn() {
      // console.log(Object.keys(this.headers).length)
      this.currentColumnValue += 1;

      const newColumnValue = `column_${this.currentColumnValue}`;

      this.headers = Object.assign(this.headers, {
        [newColumnValue]: { title: "NewColumn", type: "text" },
      });
      // console.log(this.headers);

      // this.rowList.forEach((element, item) => {
      //   console.log(this.rowList[item]);
      //   this.rowList[item] = Object.assign(this.rowList[item], {
      //     [newColumnValue]: { title: "NewColumn", type: "text" },
      //   });
      // });

      console.log(this.rowList)
    },
    createNewRow() {
      const newRowListItem = {
        id: Date.now(),
        textEditing: true,
      };

      Object.assign(newRowListItem, JSON.parse(JSON.stringify(this.headers)));

      console.log(newRowListItem);
      this.rowList.push(newRowListItem);
    },
    changeRow(newRow, index) {
      const newRowList = [
        ...this.rowList.slice(0, [index]),
        newRow,
        ...this.rowList.slice([index + 1]),
      ];
      this.rowList = newRowList;
    },
    removeRow(index) {
      const newRowList = [
        ...this.rowList.slice(0, [index]),
        ...this.rowList.slice([index + 1]),
      ];
      this.rowList = newRowList;
    },
  },
};
</script>

<style scoped>
.main-page_container {
  display: flex;
  flex-direction: column;
}
.ui-add-button_column {
  align-self: end;
}
.ui-add-button_row {
  align-self: center;
}
</style>
