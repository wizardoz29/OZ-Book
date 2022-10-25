// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtLwqN8ClJtA6PL_WXcX1RQRU2dAOVb_E",
  authDomain: "oz-ebook.firebaseapp.com",
  projectId: "oz-ebook",
  storageBucket: "oz-ebook.appspot.com",
  messagingSenderId: "913048736267",
  appId: "1:913048736267:web:c130c855dd6d907c646d0e",
  measurementId: "G-T26JHQVQ3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);