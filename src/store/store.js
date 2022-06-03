import { createStore } from "vuex";

export default createStore({
  state: () => ({
    headers: {
      column_1: { title: "Name", type: "text", id: 1 },
      column_2: { title: "Gental", type: "text", id: 2 },
      column_3: { title: "email", type: "text", id: 3 },
      column_4: { title: "Birthday", type: "date", id: 4 },
    },
    
    rowList: [
      {
        id: 1,
        textEditing: false,
        column_1: { title: "James", type: "text", id: 1 },
        column_2: { title: "Male", type: "text", id: 2 },
        column_3: { title: "asfasfsf@hotmail.com", type: "text", id: 3 },
        column_4: { title: "22.01.1993", type: "date", id: 4 },
      },
      {
        id: 2,
        textEditing: false,
        column_1: { title: "Sams", type: "text", id: 1 },
        column_2: { title: "Male", type: "text", id: 2 },
        column_3: { title: "dfdfhdfhdfh@hotmail.com", type: "text", id: 3 },
        column_4: { title: "17.04.1999", type: "date", id: 4 },
      },
      {
        id: 3,
        textEditing: false,
        column_1: { title: "Mary", type: "text", id: 1 },
        column_2: { title: "Female", type: "text", id: 2 },
        column_3: { title: "jgfgdfdfg@hotmail.com", type: "text", id: 3 },
        column_4: { title: "05.05.1995", type: "date", id: 4 },
      },
      {
        id: 4,
        textEditing: false,
        column_1: { title: "Ashly", type: "text", id: 1 },
        column_2: { title: "Female", type: "text", id: 2 },
        column_3: { title: "afhdfhr@hotmail.com", type: "text", id: 3 },
        column_4: { title: "31.08.1996", type: "date", id: 4 },
      },
      {
        id: 5,
        textEditing: false,
        column_1: { title: "Eden", type: "text", id: 1 },
        column_2: { title: "Male", type: "text", id: 2 },
        column_3: { title: "asfsaffw@hotmail.com", type: "text", id: 3 },
        column_4: { title: "22.11.2001", type: "date", id: 4 },
      },
    ],
    currentColumnValue: 4,
  }),

  getters: {},

  mutations: {
    createNewColumn(state) {
      // // console.log(Object.keys(this.headers).length)

      state.currentColumnValue += 1;

      const newColumnValue = `column_${state.currentColumnValue}`;

      console.log(newColumnValue);

      state.headers[newColumnValue] = { title: "NewColumn", type: "text" };

      // console.log(state.headers);

      const newRowList = JSON.parse(JSON.stringify(state.rowList));

      newRowList.map((item) => {
        // console.log(item);

        item[newColumnValue] = {
          title: "NewColumn",
          type: "text",
          id: Date.now(),
        };
      });
      console.log(newRowList);
      // console.log(state.rowList);


      state.rowList = JSON.parse(JSON.stringify(newRowList));
      console.log(state.rowList);

    },

    createNewRow(state, n) {
      const newRowListItem = {
        id: Date.now(),
        textEditing: true,
      };

      Object.assign(newRowListItem, JSON.parse(JSON.stringify(state.headers)));

      state.rowList.push(newRowListItem);
    },

    changeRow(state, [newRow, indexRow]) {
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
  },

  actions: {},
});
