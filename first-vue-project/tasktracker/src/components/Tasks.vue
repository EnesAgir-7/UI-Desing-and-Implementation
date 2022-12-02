<template>
    <div>
        <!-- InCompleted TASKS -->
        <div class="inCompleted">
            <h3 v-if="inCompletedTasks.length > 0" class="status-info">In Process</h3>
            <div class="tasks" v-for="task in inCompletedTasks" v-bind:key="task.id">
                <Task @delete-task="onDelete(task.id)" v-bind:task="task" v-bind:completed="false" />
            </div>
        </div>

        <div class="completed">
            <!-- Completed TASKS -->
            <h3 v-if="completedTasks.length > 0" class="status-info">Completed</h3>
            <div class="tasks" v-for="task in completedTasks" v-bind:key="task.id">
                <Task v-bind:task="task" v-bind:completed="true" />
            </div>
        </div>
    </div>
</template>

<script>
    import Task from './Task.vue'

    export default {
        name: "Tasks",
        components:{
            Task,
        },
        methods:{
            onDelete(id){
                this.$emit("delete-task",id)
            },
        },
        emits: ["delete-task"],
        props: {
            completedTasks: Array,
            inCompletedTasks: Array,
        }

    }
</script>

<style scoped>
    .status-info {
        text-align: center;
        margin-top: 25px;
        color: #d2691e;
    }

    .inCompleted {
        border: 1px solid steelblue;
    }

    .completed {
        border: 1px solid steelblue;
    }
</style>