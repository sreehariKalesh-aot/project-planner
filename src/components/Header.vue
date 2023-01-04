<template>
  <div class="header">
    <h1 class="login ps-3 pt-3" v-if="user">{{ user.displayName }}</h1>
    <h1 class="login ps-3 pt-3" v-if="!user">Login</h1>
    <h1 class="login ps-3 pt-3 pe-3 logout" v-if="user" @click="logout">
      Logout
    </h1>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    // Get the currently logged-in user
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },
  methods: {
    async logout() {
      sessionStorage.removeItem("userID");
      // Log the user out
      await firebase.auth().signOut();
      this.$router.push("/");
    },
  },
};
</script>

<style>
.header {
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  background-color: #333333;
  display: flex;
  justify-content: space-between;
}
.login {
  color: white;
  font-size: 25px;
}
.logout {
  cursor: pointer;
}
@media (max-width: 425px) {
  .login {
    font-size: 20px;
  }
  .header {
    height: 55px;
  }
}
</style>