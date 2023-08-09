// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJrLnEK1zsvrbwvP9LsTQVO7qRd_3KP6w",
  authDomain: "stockoneq-fcm.firebaseapp.com",
  projectId: "stockoneq-fcm",
  storageBucket: "stockoneq-fcm.appspot.com",
  messagingSenderId: "935948153821",
  appId: "1:935948153821:web:fb6cad88cf6ac72849bc34",
  measurementId: "G-E3DBQCLJJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);