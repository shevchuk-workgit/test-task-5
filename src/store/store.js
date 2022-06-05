import { createStore } from "vuex";

export default createStore({
  state: () => ({
    headers: {
      column_1: { title: "Name", rowTitle: "Name", type: "text", id: 1 },
      column_2: { title: "Gental", rowTitle: "Gental", type: "text", id: 2 },
      column_3: { title: "email", rowTitle: "email", type: "text", id: 3 },
      column_4: {
        title: "Birthday",
        rowTitle: "Birthday",
        type: "date",
        id: 4,
      },
    },

    rowList: [
      {
        id: 1,
        textEditing: false,
        column_1: { rowTitle: "James", type: "text", id: 1 },
        column_2: { rowTitle: "Male", type: "text", id: 2 },
        column_3: { rowTitle: "asfasfsf@hotmail.com", type: "text", id: 3 },
        column_4: { rowTitle: "22.01.1993", type: "date", id: 4 },
      },
      {
        id: 2,
        textEditing: false,
        column_1: { rowTitle: "Sams", type: "text", id: 1 },
        column_2: { rowTitle: "Male", type: "text", id: 2 },
        column_3: { rowTitle: "dfdfhdfhdfh@hotmail.com", type: "text", id: 3 },
        column_4: { rowTitle: "17.04.1999", type: "date", id: 4 },
      },
      {
        id: 3,
        textEditing: false,
        column_1: { rowTitle: "Mary", type: "text", id: 1 },
        column_2: { rowTitle: "Female", type: "text", id: 2 },
        column_3: { rowTitle: "jgfgdfdfg@hotmail.com", type: "text", id: 3 },
        column_4: { rowTitle: "05.05.1995", type: "date", id: 4 },
      },
      {
        id: 4,
        textEditing: false,
        column_1: { rowTitle: "Ashly", type: "text", id: 1 },
        column_2: { rowTitle: "Female", type: "text", id: 2 },
        column_3: { rowTitle: "afhdfhr@hotmail.com", type: "text", id: 3 },
        column_4: { rowTitle: "31.08.1996", type: "date", id: 4 },
      },
      {
        id: 5,
        textEditing: false,
        column_1: { rowTitle: "Eden", type: "text", id: 1 },
        column_2: { rowTitle: "Male", type: "text", id: 2 },
        column_3: { rowTitle: "asfsaffw@hotmail.com", type: "text", id: 3 },
        column_4: { rowTitle: "22.11.2001", type: "date", id: 4 },
      },
    ],
    currentColumnValue: 4,
    showModalCreateColumn: false,
  }),

  getters: {},

  mutations: {
    removeColumn(state,[keyColumn]){
      console.log(keyColumn)

      // state.rowList.forEach((item)=>{
      //   // console.log(item[keyColumn])
      //   console.log(item)

      // })
      const newHeaders = JSON.parse(JSON.stringify(state.headers))
      delete newHeaders[keyColumn]
      state.headers = JSON.parse(JSON.stringify(newHeaders))

      const newRowList = state.rowList.map((item)=>{
        // console.log(item)
        delete item[keyColumn]
        return item
      })
      // console.log(newRowList)

      state.rowList = JSON.parse(JSON.stringify(newRowList))

      


      


    },
    changeShowModalCreateColumn(state) {
      state.showModalCreateColumn = !state.showModalCreateColumn;
      // console.log(state.showModalCreateColumn)
    },
    disableTextEditing(state) {
      state.rowList.map((item) => {
        item.textEditing = false;
      });
    },
    createNewColumn(state, [columnName, type, TypeProperty]) {
      let stepNumber;
      if (type === "number") {
        stepNumber = `${TypeProperty.slice(0, -1)}1`;
      }

      state.currentColumnValue += 1;

      const newColumnValue = `column_${state.currentColumnValue}`;

      state.headers[newColumnValue] = {
        title: columnName,
        rowTitle: TypeProperty,
        type: type,
        step: stepNumber,
      };

      const newRowList = JSON.parse(JSON.stringify(state.rowList));

      newRowList.map((item) => {
        item[newColumnValue] = {
          rowTitle: TypeProperty,
          type: type,
          step: stepNumber,
          id: Date.now(),
        };
      });

      state.rowList = JSON.parse(JSON.stringify(newRowList));
    },

    createNewRow(state) {
      const newRowListItem = {
        id: Date.now(),
        textEditing: true,
      };

      Object.assign(newRowListItem, JSON.parse(JSON.stringify(state.headers)));

      console.log(newRowListItem);

      state.rowList.push(newRowListItem);
    },

    changeRow(state, [newRow, indexRow]) {
      for (let item in newRow) {
        if (newRow[item].step) {
          let quantitySymbols;

          if (newRow[item].step.length <= 2) {
            quantitySymbols = 0;
          } else if (newRow[item].step.length > 2) {
            quantitySymbols = newRow[item].step.length - 2;
          }

          let newTitle =
            Math.floor(newRow[item].rowTitle * Math.pow(10, quantitySymbols)) /
            Math.pow(10, quantitySymbols);

          if (newRow[item].rowTitle != newTitle) {
            newRow[item].rowTitle = newTitle;
          }

        }
      }

      const newRowList = [
        ...state.rowList.slice(0, [indexRow]),
        newRow,
        ...state.rowList.slice([indexRow + 1]),
      ];

      state.rowList = JSON.parse(JSON.stringify(newRowList));
    },

    removeRow(state, indexRow) {
      const newRowList = [
        ...state.rowList.slice(0, [indexRow]),
        ...state.rowList.slice([indexRow + 1]),
      ];

      state.rowList = JSON.parse(JSON.stringify(newRowList));
    },

    changeTextEditing(state, [currentTextEditing, indexRow]) {
      state.rowList[indexRow].textEditing = currentTextEditing;
    },
  },

  actions: {},
});
