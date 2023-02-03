// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0WNt4cUupN1-AZ_IYrnofhLbRVZTxO8Y",
  authDomain: "todos-d2a6d.firebaseapp.com",
  databaseURL:
    "https://todos-d2a6d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todos-d2a6d",
  storageBucket: "todos-d2a6d.appspot.com",
  messagingSenderId: "675423689818",
  appId: "1:675423689818:web:b53f753dec98fe907b8c63",
  measurementId: "G-L3F9HLEH4X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
