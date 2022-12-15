<template>
  <div class="login_registration">
    <Button
      v-if="!isUserLoggedIn"
      color="green"
      text="Login"
      eventName="login_clicked"
      @login_clicked="handleLogin"
    />
    <Button
      v-if="!isUserLoggedIn"
      color="grey"
      text="Register"
      eventName="register_clicked"
      @register_clicked="handleRegister"
    />
    <p v-if="isRegistrationSuccessfull">
      Registration Successfull Please Login To Continue
    </p>
  </div>
  <form
    class="add-form"
    @submit="onSubmit"
    v-if="isLoginActive || isRegisterActive"
  >
    <div class="form-control">
      <label>Email</label>
      <input type="email" v-model="email" name="email" placeholder="Email" />
    </div>
    <div class="form-control">
      <label>Password</label>
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="Password"
      />
    </div>
    <input
      type="submit"
      :value="isLoginActive ? 'Login' : 'Register'"
      class="btn btn-block"
    />
  </form>
</template>

<script>
import Button from "./Button.vue";
import bcrypt from "bcryptjs";
import { localHost } from "@/urls";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      isLoginActive: false,
      isRegisterActive: false,
      isRegistrationSuccessfull: false,
    };
  },
  components: {
    Button,
  },
  props: {
    isUserLoggedIn: Boolean,
  },
  emits: ["user-authenticated"],
  methods: {
    handleLogin() {
      this.isLoginActive = !this.isLoginActive;
      this.isRegisterActive = false;
      this.isRegistrationSuccessfull = false;
    },
    handleRegister() {
      this.isRegisterActive = !this.isRegisterActive;
      this.isLoginActive = false;
      this.isRegistrationSuccessfull = false;
    },
    async onSubmit(e) {
      e.preventDefault();
      if (
        this.email.length > 6 &&
        this.email.includes("@") &&
        this.password.length > 6
      ) {
        const user = {
          email: this.email,
          password: bcrypt.hashSync(this.password, 10),
        };
        if (this.isRegisterActive) {
          const users = await fetch(`${localHost}/users?email=${this.email}`);
          const userName = await users.json();
          if (userName.length === 0) {
            const res = await fetch(`${localHost}/users`, {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(user),
            });
            if (res.status === 201) {
              this.isRegisterActive = false;
              this.isRegistrationSuccessfull = true;
            } else {
              alert("Error while registration");
            }
          } else {
            alert("User already registered please try to login");
          }
          console.log(userName);
        } else if (this.isLoginActive) {
          const existingUser = await fetch(
            `${localHost}/users?email=${this.email}`
          );
          const existingUserData = await existingUser.json();
          if (existingUserData.length > 0) {
            let doesPasswordMatch = bcrypt.compareSync(
              this.password,
              existingUserData[0].password
            );
            if (doesPasswordMatch) {
              this.$emit("user-authenticated", existingUserData[0].email);
              this.isLoginActive = false;
            } else {
              alert("Password does not match");
            }
          } else {
            alert("User Not Found");
          }
        }
      } else {
        alert("Email or Password Not valid should be greater that 6 digits ");
      }
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
.login_registration {
  text-align: center;
}
</style>
