import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBRh0HKNcfZ5TTXIFMpaDJJOLvhXjjeSNg",
    authDomain: "storyhub-7befd.firebaseapp.com",
    projectId: "storyhub-7befd",
    storageBucket: "storyhub-7befd.appspot.com",
    messagingSenderId: "1099244522693",
    appId: "1:1099244522693:web:564222f9a6e21975a7f4ac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()
  


  