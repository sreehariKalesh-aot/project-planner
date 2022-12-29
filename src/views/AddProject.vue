<template>
  <Navbar />
  <form @submit.prevent="handleSubmit" class="addform">
    <div class="d-flex gap-3">
      <label class="label">Title</label>
      <input type="text" class="form-control" v-model="title" />
    </div>
    <div class="d-flex gap-3">
      <label class="label">details</label>
      <textarea v-model="details" class="form-control txt-area"></textarea>
    </div>
    <button class="btn btn-primary">Add Project</button>
  </form>
</template>

<script>
import { projectFireStore } from "@/firebase/config";
import Navbar from "../components/Navbar.vue";
import firebase from "firebase/app";

import { useToast } from "vue-toastification";

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
  },
};
</script>

<style>
.addform {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
}
.form-control {
  width: 410px !important;
}
.txt-area {
  width: 400px !important;
}
.label {
  font-weight: bold;
}
</style>