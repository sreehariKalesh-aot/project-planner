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
import firebase from "firebase";
import { projectFireStore } from "../firebase/config";

export default {
  name: "HomeView",
  components: {
    SingleProject,
    Navbar,
  },
  data() {
    return {
      projects: [],

      userId: null,
    };
  },
  mounted() {
    const fetchData = async () => {
      try {
     
        this.userId = window.sessionStorage.getItem("userID");

        const res = await projectFireStore
          .collection("projects")
          .where("user", "==", this.userId)
          .get();
        console.log(res.docs);
        this.projects = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log(this.projects);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((item) => item.id != id);
    },
    handleComplete(id) {
      let p = this.projects.find((project) => project.id === id);
      p.complete = !p.complete;
    },
  },
};
</script>
