// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB1wIqYo360nXCK_AeHl8utUQL0UfMQpE",
  authDomain: "cinebuddy-a4829.firebaseapp.com",
  projectId: "cinebuddy-a4829",
  storageBucket: "cinebuddy-a4829.appspot.com",
  messagingSenderId: "788993550903",
  appId: "1:788993550903:web:6bc8178d2df0bcb3cfadb2",
  measurementId: "G-WQ541QES7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();