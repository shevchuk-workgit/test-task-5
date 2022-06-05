<template>
  <div class="MainPageModal_container" @click.self="closeModalCreateColumn">
    <div class="MainPageModal_wrapper">
      <h1 class="MainPageModal_header">ADD COLUMN</h1>

      <label class="MainPageModal_label"
        >NAME
        <input
          type="text"
          class="MainPageModal_input"
          placeholder="NAME"
          v-model="modalName"
      /></label>
      <label class="MainPageModal_label">
        TYPE
        <select class="MainPageModal_select" v-model="currentState">
          <option class="MainPageModal_option" value="text" selected>
            Текстовый
          </option>
          <option class="MainPageModal_option" value="number">Числовой</option>
          <option class="MainPageModal_option" value="date">Дата</option>
        </select>
      </label>
      <label v-if="currentState === 'number'" class="MainPageModal_label"
        >FORMAT
        <input
          type="text"
          class="MainPageModal_input"
          v-model="optionTextValue"
          @keypress="inputOptionText"
        />
      </label>
      <label v-if="currentState === 'date'" class="MainPageModal_label"
        >FORMAT
        <input
          type="text"
          class="MainPageModal_input"
          v-model="optionDateValue"
        />
      </label>
      <ui-add-button class="MainPageModal_button" @click="createNewColumn"
        >Add column</ui-add-button
      >
    </div>
  </div>
</template>

<script>
import UiAddButton from "@/ui/UiAddButton.vue";
export default {
  components: { UiAddButton },
  data() {
    return {
      modalName: "",
      currentState: "text",
      optionTextValue: "0.000",
      optionDateValue: "дд.мм.гггг",
    };
  },

  methods: {
    createNewColumn() {
      this.$store.commit("disableTextEditing");

      let columnName = this.modalName;
      if (columnName === "") {
        columnName = "New Column";
      }

      let currentTypeProperty;
      if (this.currentState === "text") {
        currentTypeProperty = columnName;
      }
      if (this.currentState === "number") {
        currentTypeProperty = this.optionTextValue;
      }
      if (this.currentState === "date") {
        if (this.optionDateValue == false) {
          currentTypeProperty = "дд.мм.гггг";
        } else {
          currentTypeProperty = this.optionDateValue;
        }
      }

      this.$store.commit("createNewColumn", [
        columnName,
        this.currentState,
        currentTypeProperty,
      ]);

      this.closeModalCreateColumn();
      this.$store.commit("setMainTable");
    },

    inputOptionText(item) {
      item.preventDefault();
      this.optionTextValue += 0;
    },

    closeModalCreateColumn() {
      this.$store.commit("changeShowModalCreateColumn");
    },
  },

  watch: {
    optionTextValue() {
      if (this.optionTextValue === "") {
        this.optionTextValue = "0";
      }
      if (this.optionTextValue === "0.") {
        this.optionTextValue = "0";
      }
      if (this.optionTextValue === "00") {
        this.optionTextValue = "0.0";
      }
    },
  },
};
</script>

<style scoped>
.MainPageModal_container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
.MainPageModal_wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px 30px;
  border-radius: 10px;
  width: 350px;

  background-color: rgb(50, 50, 50);
}
.MainPageModal_header {
  align-self: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: rgb(200, 240, 255);

  margin-bottom: 15px;
}
.MainPageModal_label {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: rgb(255, 255, 255);

  margin-bottom: 15px;
}
.MainPageModal_input {
  margin-left: 15px;
  box-sizing: border-box;
  width: 250px;
  background-color: white;
  border: none;
  border-radius: 5px;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 20px;
}
.MainPageModal_input:hover {
  outline: 1px solid rgb(200, 240, 255);
}
.MainPageModal_input:focus {
  outline: 2px solid rgb(200, 240, 255);
}
.MainPageModal_select {
  width: 250px;
  margin-left: 20px;
  box-sizing: border-box;
  background-color: white;
  border: none;
  border-radius: 5px;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
}
.MainPageModal_select:hover {
  outline: 1px solid rgb(200, 240, 255);
}
.MainPageModal_select:focus {
  outline: 2px solid rgb(200, 240, 255);
}
.MainPageModal_option {
  font-weight: 700;
}
.MainPageModal_button {
  width: 250px;
  justify-content: center;
}
</style>
