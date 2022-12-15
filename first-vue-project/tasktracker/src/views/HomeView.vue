<template>
  <div v-if="showAddTask">
    <AddTask @new-task="addNewTask" v-bind:userName="userName" />
  </div>
  <Tasks
    v-bind:completedTasks="$store.state.completedTasks"
    v-bind:inCompleteTasks="$store.state.inCompleteTasks"
    @delete-task="onDelete"
    @toggle-reminder="onToggleReminder"
    @complete-toggle="completeToggle"
    @edit-task="editTask"
  />
</template>

<script>
// @ is an alias to /src
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
import { localHost } from "../urls";

export default {
  name: "HomeView",
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      completedTasks: [],
      inCompleteTasks: [],
    };
  },
  props: {
    showAddTask: Boolean,
    userName: String,
  },
  methods: {
    async fetchTask(id) {
      const res = await fetch(`${localHost}/tasks/${id}`);
      const data = await res.json();
      return data;
    },
    async fetchTasks() {
      const res = await fetch(
        `${localHost}/tasks?createdBy=${window.atob(
          sessionStorage.getItem("username")
        )}`
      );
      const data = await res.json();
      return data;
    },
    async onDelete(id) {
      console.log("Home Component " + id);
      const res = await fetch(`${localHost}/tasks/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        this.inCompleteTasks = this.inCompleteTasks.filter(
          (task) => task.id != id
        );
      } else {
        alert("Error Deleting Data");
      }
      console.log(res.status);
    },
    async onToggleReminder(id) {
      console.log("Home Toggle " + id);
      const taskToToggle = await this.fetchTask(id);
      const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
      const res = await fetch(`${localHost}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await res.json();
      this.inCompleteTasks = this.inCompleteTasks.map((task) => {
        if (task.id === id) {
          task.reminder = data.reminder;
          return task;
        }
        return task;
      });
    },
    async completeToggle(id) {
      const taskToComplete = await this.fetchTask(id);
      taskToComplete.completed = !taskToComplete.completed;
      taskToComplete.reminder = false;

      const res = await fetch(`${localHost}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(taskToComplete),
      });

      const data = await res.json();
      if (data.completed) {
        this.completedTasks = [...this.completedTasks, data];
        this.inCompleteTasks = this.inCompleteTasks.filter(
          (task) => task.id !== id
        );
      } else {
        this.inCompleteTasks = [...this.inCompleteTasks, data];
        this.completedTasks = this.completedTasks.filter(
          (task) => task.id !== id
        );
      }
    },
    async editTask(updatedTask) {
      const id = updatedTask.id;
      delete updatedTask.id;

      await fetch(`${localHost}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
    },
    async addNewTask(newTask) {
      const res = await fetch(`${localHost}/tasks`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      const data = await res.json();

      this.inCompleteTasks = [...this.inCompleteTasks, data];
    },
  },
  async created() {
    this.$store.dispatch("fetchTasks");
  },
};
</script>
