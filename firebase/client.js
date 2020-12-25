import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMZoqQjr6cJbwlx0Ly5L8kI67KL4QInOw",
  authDomain: "voidi-83875.firebaseapp.com",
  projectId: "voidi-83875",
  storageBucket: "voidi-83875.appspot.com",
  messagingSenderId: "408259795882",
  appId: "1:408259795882:web:0062f8efb56fd9a0a429d3",
  measurementId: "G-TRTCXB7BST"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const loginWithGoogle = ()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(googleProvider);
}