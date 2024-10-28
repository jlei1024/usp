// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWRJUrbnZKOdlxqo_e5q87vSIFH53gPmo",
  authDomain: "the-usp.firebaseapp.com",
  projectId: "the-usp",
  storageBucket: "the-usp.appspot.com",
  messagingSenderId: "62370728623",
  appId: "1:62370728623:web:e1061e7e83f223640be25a",
  measurementId: "G-M33399948Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);