import { createStore } from "vuex";
import { projectFireStore } from "../firebase/config";
import router from "../router";
import { useToast } from 'vue-toastification'
import firebase from 'firebase/app';
import 'firebase/functions';

const toast = useToast()

export default createStore({
  state: {
    projects: [],
    filteredArray: []

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

      let cp = state.filteredArray.find((project) => project.id === id);
      cp.complete = !cp.complete
      console.log(p.complete);
      
     
      console.log(p)

    },

    deleteProject(state, id) {
      state.projects = state.projects.filter((item) => item.id != id);
      state.filteredArray = state.filteredArray.filter((item) => item.id != id);

    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const userId = window.sessionStorage.getItem("userID");

        const res = await projectFireStore
          .collection("projects")
          .where("user", "==" , userId)
          .get();
        console.log(res.docs);

        commit("fetchData", res);

        console.log(this.state.projects);
      } catch (err) {
        console.log(err);
      }
    },

    
   async fetchCompleted() {

    const uid = window.sessionStorage.getItem("userID")
    const data = {
         userId: uid 
      };
      
  firebase.functions().httpsCallable("getCompletedProjects")(data).then((result) => {
      this.state.filteredArray = result.data;
      console.log(result.data);
      console.log(this.state.filteredArray);

    }) .catch(err => {
          console.log("this is the error:  ",err)
      });

  },

    async toggleComplete({ commit }, project) {
      console.log(project);
      let res = await projectFireStore
        .collection("projects")
        .doc(project.id)
        .update({ complete: !project.complete });
        console.log(project.id);

      commit("handleComplete", project.id);
    },


    async deleteProject({ commit }, id) {
      await projectFireStore.collection("projects").doc(id).delete();

      commit("deleteProject", id);
    },

    async handleSubmit({ commit }, payload) {
      const user = firebase.auth().currentUser;

      let project = {
        user: user.uid,
        title: payload.title,
        details: payload.details,
        isInternal : payload.isChecked,
        clientName : payload.clientName,
        complete: false,
      };
      console.log(project);

      let res = await projectFireStore.collection("projects").add(project);

        toast.success("Project added successfully");

      router.push("/home");
    },

    async handleEdit({ commit }, payload) {
      let res = await projectFireStore
        .collection("projects")
        .doc(payload.id)
        .update({ title: payload.title, details: payload.details , clientName :payload.clientName , isInternal : payload.isChecked });

      router.push("/home");

      console.log(payload.title, payload.id);
    },
  },
  modules: {},
});
