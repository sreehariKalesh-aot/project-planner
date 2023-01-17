<template>
  <Navbar @filterChange="current = $event" :current="current" />
  <div class="home">
    <div>
      <div v-for="project in filteredArray" :key="project.id">
        <SingleProject :project="project" class="mt-3" />
      </div>
      <h1 v-if="filteredArray.length === 0" class="d-flex justify-content-center mt-5">No items to display</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import SingleProject from "../components/SingleProject.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";

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
    ...mapState(["filteredArray"]),
  },
  mounted() {
    this.fetchCompleted();
  },
  methods: {
    ...mapActions(["fetchCompleted"]),
  },
  
};
</script>
