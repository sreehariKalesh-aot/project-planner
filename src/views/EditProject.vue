<template>
  <Navbar />
  <form @submit.prevent="handleEdit({title,details,id})" class="editform addform mt-5">
    <div class="d-flex gap-3">
      <label class="label">Title</label>
      <input type="text" class="input-1" v-model="title" />
    </div>
    <div class="d-flex gap-3">
      <label class="label">details</label>
      <textarea v-model="details" class="input-2"></textarea>
    </div>
    <button class="btn btn-primary">Update Project</button>
  </form>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { projectFireStore } from "@/firebase/config";
import {mapActions} from "vuex"
export default {
  components: { Navbar },
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.id,

    };
  },
  mounted() {
    let editForm = async () => {
      let res = await projectFireStore
        .collection("projects")
        .doc(this.id)
        .get();
      let obj = { ...res.data(), id: res.id };
      this.title = obj.title;
      this.details = obj.details;
    };
    editForm();
  },
  methods: {
    ...mapActions(['handleEdit'])

  },
};
</script>

<style>
.editform {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
}
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