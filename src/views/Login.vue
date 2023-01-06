<template>
  <div class="login-div">
    <button
      class="login-btn btn btn-danger d-flex align-items-center"
      @click="googleSignIn"
    >
      Login with google
      <span class="material-icons login-icon"> &nbsp; login </span>
    </button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null,
      uid: null,
    };
  },
  beforeMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push("/home");
        console.log(user);
      } else {
        this.$router.push("/");
      }
    });
  },
  methods: {
    googleSignIn: function () {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          firebase.auth().onAuthStateChanged((user) => {
            this.user = user;
            this.uid = user.uid;

            window.sessionStorage.setItem("userID", this.uid);

            this.$router.push("/home");
          });
        });
    },
  },
};
</script>

<style>
.login-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
}
</style>