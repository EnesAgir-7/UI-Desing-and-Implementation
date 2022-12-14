<template>
  <header>
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
    <Login v-bind:isUserLoggedIn="isUserLoggedIn" />
    <div class="buttons" v-if="isUserLoggedIn">
      <Button
        eventName="Add-Task"
        v-bind:text="showAddTask ? 'Close Task' : 'Add Task'"
        v-bind:color="showAddTask ? 'red' : 'green'"
        @Add-Task="handleToggleAddTask"
      />
    </div>
  </header>
</template>

<script>
import Button from "./Button.vue";
import Login from "./Login.vue";

export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean,
    isUserLoggedIn: Boolean,
  },
  components: {
    Button,
    Login,
  },
  methods: {
    handleToggleAddTask() {
      this.$emit("toggle-AddTask");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
}
.header {
  display: flex;
  align-items: center;
}
.buttons {
  display: flex;
}
</style>
