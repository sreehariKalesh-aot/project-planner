<template>
  <Navbar />
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
          class="mt-3"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import SingleProject from "../components/SingleProject.vue";
// import firebase from "firebase";
// import { projectFireStore } from "../firebase/config";
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    SingleProject,
    Navbar,
  },
  computed: {
    ...mapState(["projects"]),
  },

  mounted() {
    this.fetchData();
  },
  methods: {
    // handleDelete(id) {
    //   this.projects = this.projects.filter((item) => item.id != id);
    // },


    ...mapActions(["fetchData"]),
  },
};
</script>
