// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt8GA639UhoeodQSzPV6epuQh-iRirQR4",
  authDomain: "impostor-e6fbe.firebaseapp.com",
  projectId: "impostor-e6fbe",
  storageBucket: "impostor-e6fbe.firebasestorage.app",
  messagingSenderId: "818490390572",
  appId: "1:818490390572:web:facad0079bf381fcf9f989",
  measurementId: "G-5EK8HVPM16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);