import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI__E9_k3BCDyy6NSmC1ZQrF7S9CD8maA",
  authDomain: "oz--ebook.firebaseapp.com",
  projectId: "oz--ebook",
  storageBucket: "oz--ebook.appspot.com",
  messagingSenderId: "327493476382",
  appId: "1:327493476382:web:ac48d764cfca304f318e0f",
  measurementId: "G-2E0G52TKHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);