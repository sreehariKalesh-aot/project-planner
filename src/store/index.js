import { createStore } from "vuex";
import firebase from "firebase";
import { projectFireStore } from "../firebase/config";

import router from "../router";

export default createStore({
    
  state: {
    projects: [],
    // userId: null,
  },

  getters: {},

  mutations: {
    fetchData(state, res) {
      state.projects = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    },

    handleComplete(state, id) {
      let p = state.projects.find((project) => project.id === id);
      p.complete = !p.complete;
    },

    deleteProject(state, id) {
      state.projects = state.projects.filter((item) => item.id != id);
    },
  },

  actions: {
    async fetchData({ commit }) {
      try {
        const userId = window.sessionStorage.getItem("userID");

        const res = await projectFireStore
          .collection("projects")
          .where("user", "==", userId)
          .get();
        console.log(res.docs);

        commit("fetchData", res);

        console.log(this.state.projects);
      } catch (err) {
        console.log(err);
      }
    },

    async toggleComplete({ commit }, project) {
      console.log(project);
      let res = await projectFireStore
        .collection("projects")
        .doc(project.id)
        .update({ complete: !project.complete });

      commit("handleComplete", project.id);

    },

    async deleteProject({ commit }, id) {
      await projectFireStore.collection("projects").doc(id).delete();

      commit("deleteProject", id);

    },

    //   async handleSubmit(_,title , details) {
    //     const user = firebase.auth().currentUser;

    //     let project = {
    //       user: user.uid,
    //       title: title,
    //       details: "details",
    //       complete: false,
    //     };
    //     console.log(project);

    //     let res = await projectFireStore.collection("projects").add(project);

    //     this.toast.success("Project added successfully");

    //     this.$router.push("/home");

    //   },
  },
  modules: {},
});
