<template>
  <Navbar />
  <form @submit.prevent="handleSubmit(title , details)" class="addform mt-5">
    <div class="d-flex gap-3">
      <label class="label">Title</label>
      <input type="text" class="input-1 p-2"  v-model="title" />
    </div>
    <div class="d-flex gap-3">
      <label class="label">details</label>
      <textarea v-model="details" class="input-2 p-2"></textarea>
    </div>
    <button class="btn btn-primary">Add Project</button>
  </form>
</template>

<script>
import { projectFireStore } from "@/firebase/config";
import Navbar from "../components/Navbar.vue";
import firebase from "firebase/app";

import { useToast } from "vue-toastification";
import {mapActions} from "vuex";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      title: "",
      details: "",
    };
  },
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  methods: {

    async handleSubmit() {
      const user = firebase.auth().currentUser;

      let project = {
        user: user.uid,
        title: this.title,
        details: this.details,
        complete: false,
      };
      console.log(project);

      let res = await projectFireStore.collection("projects").add(project);

      this.toast.success("Project added successfully");

      this.$router.push("/home");
    },

    // ...mapActions(['handleSubmit'])

  },
};
</script>

<style>
/* .addform {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
} */
/* .form-control {
  width: 20px !important;
}
.txt-area {
  width: 20px !important;
} */
.input-1{
  width: 50vw !important;
  height: 6vh;
  border-radius: 10px;
}
.input-2{
  width: 50vw !important;
  height: 8vh;
  border-radius: 10px;
}
.label {
  font-weight: bold;
}

</style>