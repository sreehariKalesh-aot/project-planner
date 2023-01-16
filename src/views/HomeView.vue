<template>
  <Navbar
   @filterChange="current = $event" :current="current" 
   
   />
  <div class="home">
    <div v-if="projects.length">
      

      <div v-if="current === 'active'">
        <div v-for="project in projects" :key="project.id">
          <SingleProject
            :project="project"
            class="mt-3"
          />
        </div>
      </div>

<!-- 
      <div v-if="current === 'completed'">compeleted
        <div v-for="project in filteredProjects" :key="project.id">
          <SingleProject
            :project="project"
            class="mt-3"
          />

        </div>
      </div> -->

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
  data() {
    return {
      current: "active",
    };
  },
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
