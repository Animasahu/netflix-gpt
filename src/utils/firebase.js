// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS5s9JKbCB-9K3RiWMUkrU4HKfY0cg7LM",
  authDomain: "netflixgpt-9fd80.firebaseapp.com",
  projectId: "netflixgpt-9fd80",
  storageBucket: "netflixgpt-9fd80.appspot.com",
  messagingSenderId: "197279414157",
  appId: "1:197279414157:web:af3380cf17a888d4126fc4",
  measurementId: "G-0127VW68QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();