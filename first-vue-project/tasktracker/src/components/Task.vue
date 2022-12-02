<template>
    <div v-bind:class="[task.reminder?'reminder':'','task']">
        <div v-bind:class="completed? 'completed':''">
            <div class="header">
                <h3>
                    {{task.text}}
                </h3>
                <div class="icons">
                    <i class="fas fa-times" v-if="!completed" @click="onDelete()"></i>
                    <i class="fa fa-pencil" v-if="!completed"></i>
                    <i class="fa fa-check" v-if="!completed"></i>
                    <i class="fa-solid fa-arrow-ups" v-else></i>
                </div>
            </div>
            <p>
                {{ task.day}}
            </p>
        </div>
    </div>
</template>

<script scope>
    export default {
        name: "TaskComponent",
        props: {
            task: Object,
            completed: Boolean,
            isEditable: false,
        },
        methods:{
            onDelete(){
                this.$emit("delete-task");
            },
        },
        emits:["delete-task"]
    }
</script>

<style scoped>
    .fas {
        color: red;
    }

    .fa-check {
        color: green;
        margin-left: 13px;
    }

    .fa-pencil {
        margin-left: 13px;
        font-size: 13px;
    }

    .task {
        background: white;
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

    .fa-solid{
        opacity: 1px;
    }
</style>