<template>
  <div>
    <!-- Incomplete TASKS -->
    <h3 v-if="inCompleteTasks.length > 0" class="status_info">In Progress</h3>
    <div class="tasks" v-for="task in inCompleteTasks" v-bind:key="task.id">
      <Task
        @delete-task="onDelete(task.id)"
        @toggle-reminder="onReminder(task.id)"
        @complete-toggle="completeToggle(task.id)"
        @edit-task="editTask"
        v-bind:task="task"
        v-bind:completed="false"
      />
    </div>

    <!-- COmpleted TASKS -->
    <h3 v-if="completedTasks.length > 0" class="completed status_info">
      Completed
    </h3>
    <div class="tasks" v-for="task in completedTasks" v-bind:key="task.id">
      <Task
        v-bind:task="task"
        v-bind:completed="true"
        @complete-toggle="completeToggle(task.id)"
      />
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "TasksComponent",
  props: {
    completedTasks: Array,
    inCompleteTasks: Array,
  },
  components: {
    Task,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
    },
    onReminder(id) {
      this.$emit("toggle-reminder", id);
    },
    completeToggle(id) {
      this.$emit("complete-toggle", id);
    },
    editTask(newTask) {
      this.$emit("edit-task", newTask);
    },
  },
  emits: ["delete-task", "toggle-reminder", "complete-toggle", "edit-task"],
};
</script>

<style scoped>
.status_info {
  text-align: center;
  margin-top: 25px;
  color: #d2691e;
}

.completed {
  border-top: 2px solid grey;
}
</style>
