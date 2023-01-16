import firebase from "firebase/app";
import  "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDk0zJc_MFyTOnDHzHZztieaZgl3n4_Yrc",
  authDomain: "test-divii.firebaseapp.com",
  projectId: "test-divii",
  storageBucket: "test-divii.appspot.com",
  messagingSenderId: "854239472504",
  appId: "1:854239472504:web:0933f96ffa324e0028768d"
};

  firebase.initializeApp(firebaseConfig)

  const projectFireStore = firebase.firestore()

  export {projectFireStore}