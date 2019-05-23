import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBZ5PFan8ow3hFitEaYdiIUHUGyvKbXrCw",
    authDomain: "the-bar-library.firebaseapp.com",
    databaseURL: "https://the-bar-library.firebaseio.com",
    projectId: "the-bar-library",
    storageBucket: "the-bar-library.appspot.com",
    messagingSenderId: "438880850492",
    appId: "1:438880850492:web:934331f5a0fe55f6"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots:true })

  export default firebase;
