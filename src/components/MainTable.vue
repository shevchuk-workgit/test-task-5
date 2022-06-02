<template>
  <table class="main-table_table">
    <thead class="main-table_head">
      <tr>
        <th
          class="main-table_head_cell"
          v-for="(header, index) in headers"
          :key="index"
        >
          {{ header }}
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
        v-for="(user, index) in usersList"
        :key="index"
        :user="user"
        @changeUser="changeUserFeature"
      >
      </main-table-row>
      <!-- @changeUser="$emit(`changeUser`, changedUser,index)" -->
    </tbody>
  </table>
</template>

<script>
import MainTableRow from "./MainTableRow.vue";

export default {
  components: { MainTableRow },

  data() {
    return {
      // newUserList: [],
    };
  },

  props: {
    headers: {
      type: Array,
    },
    usersList: {
      type: Array,
    },
  },

  methods: {
    changeUserFeature(newUser, index) {
      // this.newUserList=this.usersList
      // this.newUserList
      // this.$emit()
      console.log(newUser, index);

      this.$emit("changeUser", newUser);

      // console.log(index)
    },
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
