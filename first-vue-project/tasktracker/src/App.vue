<template>
  <div class="container">
  <Header  title="Task Tracker"/>
  <router-view></router-view>
  <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
  export default {
    name: "App",
    components:{
      Header,
      Footer
    }
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Poppins", sans-serif;
  }

  .container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    border: 1px solid steelblue;
    min-height: 300px;
    padding: 30px;
    border-radius: 5px;
  }
</style>