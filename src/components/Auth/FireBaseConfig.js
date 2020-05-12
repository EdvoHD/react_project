import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyC6eSlLRnbE2LYdEHalFKNrd-la7PsuFL4",
    authDomain: "test-app-ab80b.firebaseapp.com",
    databaseURL: "https://test-app-ab80b.firebaseio.com",
    projectId: "test-app-ab80b",
    storageBucket: "test-app-ab80b.appspot.com",
    messagingSenderId: "522789891200",
    appId: "1:522789891200:web:b6ff165995d953a9b90a65",
    measurementId: "G-8QD0W6W7CH"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots:true});

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase 