<template>
  <Navbar @filterChange="current = $event" :current="current" />
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in filtered" :key="project.id">
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
  data(){
    return{
      current: "active"
    }
  },
  components: {
    SingleProject,
    Navbar,
  },
  computed: {
    ...mapState(["projects"]),

    filtered(){
      if(this.current === "active"){
        return this.projects.filter(obj=>obj.complete === false)
      }
       if(this.current === "completed"){
        return this.projects.filter(obj=>obj.complete === true)
      }
    }
  },

  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
};
</script>
