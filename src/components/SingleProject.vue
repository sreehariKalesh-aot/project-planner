<template>
  <div class="details d-flex" :class="{ complete: project.complete }">
    <p @click="showDetails = !showDetails" class="p-3 title">
      {{ project.title }}
    </p>
    <p v-if="showDetails" class="p-3 title">{{ project.details }}</p>
    <div class="d-flex gap-3 p-3">
      <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
        <span class="material-icons edit">edit</span>
      </router-link>
      <span class="material-icons delete" @click="deleteProject(project.id)">
        delete
      </span>
      <span
        class="material-icons done"
        @click="toggleComplete(project)"
        v-if="!project.complete"
      >
        done
      </span>
      <!-- <span class="material-icons" ></span> -->
      <span
        class="material-icons"
        @click="toggleComplete(project)"
        v-if="project.complete"
      >
        close
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },

  methods: {
    ...mapActions(["toggleComplete", "deleteProject"]),
  },
};
</script>

<style>
.details {
  background-color: lightgrey;
  width: 70%;
  margin: auto;
  justify-content: space-between;
  border-radius: 10px;
}
.complete {
  background-color: aquamarine;
}
.material-icons {
  cursor: pointer;
}
.delete {
  color: crimson;
}
.done {
  color: green;
}
.title {
  font-weight: bold;
  cursor: pointer;
}
.edit {
  color: black;
}
@media (max-width: 769px) {
  .details {
    width: 90%;
  }
}
@media (max-width: 470px) {
  .details {
    width: 90%;
  }
}
</style>