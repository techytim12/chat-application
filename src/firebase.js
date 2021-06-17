import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcOAQQ7Ccf2PvEqH0zNgrCAMfk8IgqGKE",
    authDomain: "whatsapp-clone-b6c8e.firebaseapp.com",
    projectId: "whatsapp-clone-b6c8e",
    storageBucket: "whatsapp-clone-b6c8e.appspot.com",
    messagingSenderId: "850752276121",
    appId: "1:850752276121:web:565d524cc08664ba2e5a08",
    measurementId: "G-0EC05S9094"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;