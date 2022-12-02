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
  methods:{
    async fetchTasks(){
      const res = await fetch("http://localhost:5001/tasks");
      const data = await res.json();
      return data;
    },
    async onDelete(id){
      console.log("Home Component" + id)
      const res = await fetch(`http://localhost:5001/tasks/${id}`,{
        method: "DELETE",
      });
        if(res.status ==200){
          this.inCompletedTasks = this.inCompletedTasks.filter(
            (task)=> task.id !=id
          )
        }else{
          alert("Error Deleting Data");
        }
        console.log(res.status)
      }
    },
    async created(){
    const tasks = await this.fetchTasks();
    this.completedTasks = tasks.filter((task)=> task.completed === true);
    this.inCompletedTasks = tasks.filter((task)=> task.completed === false);
  }
}
</script>
