<template>
    <div>
        <h3 v-if="inCompletedTasks.length > 0" class="status-info">In Process</h3>
        <div class="tasks" v-for="task in inCompletedTasks" v-bind:key="task.id">
            <h3>{{task.text}}</h3>
        </div>
    </div>
</template>

<script>
import { def } from '@vue/shared';

export default{
    name:"Tasks",
    props:{
        completedTasks:Array,
        inCompletedTasks:Array,
    }

}
</script>

<style>
.status_info{
    text-align: center;
    margin-top: 25px;
    color: #d2691e;
}
</style>