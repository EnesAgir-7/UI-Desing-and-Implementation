<template>
  <div class="home">

    <Tasks v-bind:completedTasks="completedTasks" v-bind:inCompletedTasks="inCompletedTasks"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Tasks from '@/components/Tasks.vue'

export default {
  name: 'HomeView',
  components: {
    Tasks
  },
  data(){
    return{
      completedTasks:[],
      inCompletedTasks:[]
    }
  },
  created(){
    this.completedTask=[{
      text:"Learn Vue",
      day:"March 24th at 1:30",
      reminder: true,
      completed:true,
      createdBy:"test@gmail.com",
      id:1
    }];
    this.inCompletedTask=[{
      text:"Go to dentist",
      day:"March 24th at 1:30",
      reminder: false,
      completed:false,
      createdBy:"test@gmail.com",
      id:2
    }]
  }
}
</script>
