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
import Navbar from "../components/Navbar.vue";
import SingleProject from "../components/SingleProject.vue";
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
    ...mapActions(["fetchData"]),
  },
};
</script>
