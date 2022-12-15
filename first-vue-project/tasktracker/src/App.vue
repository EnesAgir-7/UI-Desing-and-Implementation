<template>
  <div class="container">
    <Header
      title="Task Tracker"
      v-bind:showAddTask="showAddTask"
      @toggle-AddTask="toggleAddTask"
      v-bind:isUserLoggedIn="isLoggedIn"
      @user-authenticated="userAuthenticated"
      @user-notAuthenticated="userNotAuthenticated"
    />
    <router-view
      v-bind:showAddTask="showAddTask"
      v-bind:userName="userName"
      v-if="isLoggedIn"
    ></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { localHost } from "./urls";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
      isLoggedIn: false,
      userName: null,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    userAuthenticated(email) {
      this.isLoggedIn = true;
      this.userName = email;
      const encodedEmail = window.btoa(email); // encode a string
      sessionStorage.setItem("username", encodedEmail);
    },
    userNotAuthenticated() {
      this.isLoggedIn = false;
      sessionStorage.setItem("username", "");
    },
  },
  async created() {
    let userName = sessionStorage.getItem("username");
    const decodedEmail = window.atob(userName); // decode the string
    const users = await fetch(`${localHost}/users?email=${decodedEmail}`);
    const user = await users.json();
    if (user.length === 1) {
      this.userName = decodedEmail;
      this.isLoggedIn = true;
    }
  },
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
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
