import firebase from './firebase'
import 'firebase/storage'
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjbPcr43s3kLz5FfaRhmcwKknG5gf113o",
    authDomain: "swathitestapp.firebaseapp.com",
    projectId: "swathitestapp",
    storageBucket: "swathitestapp.appspot.com",
    messagingSenderId: "643279999988",
    appId: "1:643279999988:web:f455f1b1458cc41070dfa1"
  };
// Initialize Firebase
// const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app()
const app = initializeApp(firebaseConfig)  
// console.log(firebase.apps.length);
// const db = app.firestore()
//   const storage = firebase.storage()

//   export {db,storage}