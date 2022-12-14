<template>
  <div
    v-bind:class="[task.reminder ? 'reminder' : '', 'task']"
    @dblclick="onToggleReminder"
  >
    <div v-bind:class="[completed ? 'completed' : '']">
      <div class="header">
        <h3 v-bind:contenteditable="isEditable" ref="task_header">
          {{ task.text }}
        </h3>
        <div class="icons">
          <i class="fas fa-times" v-if="!completed" @click="onDelete"></i>

          <!-- Editing Tasks -->
          <i
            class="fa fa-pencil"
            v-if="!completed && !isEditable"
            @click="onEdit"
          ></i>
          <i
            class="fa-solid fa-pen-to-square"
            v-if="!completed && isEditable"
            @click="onEdit"
          ></i>

          <!-- Toggle Complete section -->
          <i
            class="fa fa-check"
            v-if="!completed"
            @click="onCompleteToggle"
          ></i>
          <i class="fa-solid fa-arrow-up" v-else @click="onCompleteToggle"></i>
        </div>
      </div>
      <p v-bind:contenteditable="isEditable" ref="task_day">
        {{ task.day }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskComponent",
  props: {
    task: Object,
    completed: Boolean,
  },
  data() {
    return {
      isEditable: false,
    };
  },
  methods: {
    onDelete() {
      this.$emit("delete-task");
    },
    onToggleReminder() {
      this.$emit("toggle-reminder");
    },
    onCompleteToggle() {
      this.$emit("complete-toggle");
    },
    onEdit() {
      if (this.isEditable) {
        let taskHeader = this.$refs.task_header.innerText;
        let taskDay = this.$refs.task_day.innerText;

        if (taskHeader.length > 0 && taskDay.length > 0) {
          const editedTask = {
            id: this.task.id,
            text: taskHeader,
            day: taskDay,
            reminder: this.task.reminder,
            completed: this.task.completed,
            createyBy: "test@gmail.com",
          };
          this.$emit("edit-task", editedTask);
        } else {
          this.$refs.task_header.innerText = this.task.text;
          this.$refs.task_day.innerText = this.task.day;
        }
      }
      this.isEditable = !this.isEditable;
    },
  },
  emits: ["delete-task", "toggle-reminder", "complete-toggle", "edit-task"],
};
</script>

<style scoped>
.fas {
  color: red;
}
.fa-check,
.fa-solid {
  color: green;
  margin-left: 13px;
}
.fa-pencil {
  margin-left: 13px;
  font-size: 13px;
}
.task {
  background: rgb(227, 224, 224);
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.completed {
  text-decoration: line-through;
  text-decoration-thickness: 2px;
  text-decoration-color: red;
  opacity: 0.3;
}
</style>
