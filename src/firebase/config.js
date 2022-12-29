import firebase from "firebase/app";
import  "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDPASzMOcd7j7SlovO--oRKrYZbnBL2gtM",
  authDomain: "udemy-vue-5ecc3.firebaseapp.com",
  projectId: "udemy-vue-5ecc3",
  storageBucket: "udemy-vue-5ecc3.appspot.com",
  messagingSenderId: "487748834841",
  appId: "1:487748834841:web:f3ace80a861bb7de217c88"
};

  firebase.initializeApp(firebaseConfig)

  const projectFireStore = firebase.firestore()

  export {projectFireStore}