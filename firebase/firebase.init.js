// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCotKImyzYrLN5yIM5Baf6QSWBQvsZdmgw",
  authDomain: "simple-firebase-27ef3.firebaseapp.com",
  projectId: "simple-firebase-27ef3",
  storageBucket: "simple-firebase-27ef3.appspot.com",
  messagingSenderId: "500392542371",
  appId: "1:500392542371:web:f043b15c4714e092507f16",
  measurementId: "G-WHCPQ962YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {analytics};