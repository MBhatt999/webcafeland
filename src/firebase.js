// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARoIWpTtVjwyLN1WZqRyuZohE7JBxQTuk",
  authDomain: "webcafelanding-61f22.firebaseapp.com",
  projectId: "webcafelanding-61f22",
  storageBucket: "webcafelanding-61f22.firebasestorage.app",
  messagingSenderId: "27239818852",
  appId: "1:27239818852:web:e47ec9f009ece8475a2171",
  measurementId: "G-05NJS15RGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);