<template>
  <main-page-modal-create-column v-if="$store.state.showModalCreateColumn"></main-page-modal-create-column>
  <div class="main-page_container">
    <ui-add-button class="ui-add-button_column" @click="createNewColumn"
      >Add column</ui-add-button
    >

    <main-table></main-table>
    <ui-add-button class="ui-add-button_row" @click="createNewRow"
      >Add New Row</ui-add-button
    >
  </div>
</template>

<script>
import UiAddButton from "@/ui/UiAddButton.vue";
import MainTable from "@/components/MainTable.vue";
import MainPageModalCreateColumn from '@/components/MainPageModalCreateColumn.vue';

export default {
  components: { UiAddButton, MainTable, MainPageModalCreateColumn },

  data() {
    return {};
  },

  methods: {
    createNewColumn() {
      this.$store.commit("changeShowModalCreateColumn");

      // this.$store.commit("disableTextEditing");

      // this.$store.commit("createNewColumn");
    },
    createNewRow() {
      this.$store.commit("createNewRow");
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
