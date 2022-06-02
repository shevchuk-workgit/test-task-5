<template>
  <div class="main-page_container">
    <ui-add-button class="ui-add-button_column">Add column</ui-add-button>
    <main-table :headers="headers" :usersList="usersList" @changeUser="changeUser"></main-table>
    <ui-add-button class="ui-add-button_row" @click="createNewUser"
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
      headers: ["Name", "Gental", "email", "Birthday"],
      usersList: [
        ["James", "Male", "asfasfsf@hotmail.com", "22.01.1993"],
        ["Sams", "Male", "dfdfhdfhdfh@hotmail.com", "17.04.1999"],
        ["Mary", "Female", "jgfgdfdfg@hotmail.com", "05.05.1995"],
        ["Ashly", "Female", "afhdfhr@hotmail.com", "31.08.1996"],
        ["Eden", "Male", "asfsaffw@hotmail.com", "22.11.2001"],
      ],
      // usersList: [
      //   {
      //     id: 1,
      //     column_1: "James",
      //     column_2: "Male",
      //     column_3: "asfasfsf@hotmail.com",
      //     column_4: "22.01.1993",
      //   },
      //   {
      //     id: 2,
      //     column_1: "Sams",
      //     column_2: "Male",
      //     column_3: "dfdfhdfhdfh@hotmail.com",
      //     column_4: "17.04.1999",
      //   },
      //   {
      //     id: 3,
      //     column_1: "Mary",
      //     column_2: "Female",
      //     column_3: "jgfgdfdfg@hotmail.com",
      //     column_4: "05.05.1995",
      //   },
      //   {
      //     id: 4,
      //     column_1: "Ashly",
      //     column_2: "Female",
      //     column_3: "afhdfhr@hotmail.com",
      //     column_4: "31.08.1996",
      //   },
      //   {
      //     id: 5,
      //     column_1: "Eden",
      //     column_2: "Male",
      //     column_3: "asfsaffw@hotmail.com",
      //     column_4: "22.11.2001",
      //   },
      // ],
    };
  },

  methods: {
    changeUser(user,index){
      console.log(user,index)
      console.log(this.usersList[index])
    },

    createNewUser() {
      console.log(this.usersList);
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
