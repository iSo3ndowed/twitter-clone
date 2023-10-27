// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIZYkoQoEouhijUTNNWc9Yth4HLbycRgE",
  authDomain: "twitter-clone-42cdb.firebaseapp.com",
  projectId: "twitter-clone-42cdb",
  storageBucket: "twitter-clone-42cdb.appspot.com",
  messagingSenderId: "884133980314",
  appId: "1:884133980314:web:b9ca912e8197ce76ff5723",
  measurementId: "G-73KVGLE734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)

export {auth, app, firestore}
