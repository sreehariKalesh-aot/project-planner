<template>
  <Navbar />
  <form
  @submit.prevent="handleSubmit({title,details})"
  class="addform mt-5">
    <div class="d-flex gap-3"> 
      <label class="label">Title</label>
      <input type="text" class="input-1 p-2"  v-model="title" />
    </div>
    <div class="d-flex gap-3">
      <label class="label">details</label>
      <textarea v-model="details" class="input-2 p-2"></textarea>
    </div>
    <button class="btn btn-primary" >Add Project</button>
  </form>
</template>

<script>

import Navbar from "../components/Navbar.vue";
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
  methods: {
    ...mapActions(['handleSubmit'])

  },
};
</script>

<style>
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