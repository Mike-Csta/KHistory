// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2QWaTmimWiCVz7T4CVxX5l_vyFqbRo2Y",
  authDomain: "khistory-f5051.firebaseapp.com",
  databaseURL:
    "https://khistory-f5051-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "khistory-f5051",
  storageBucket: "khistory-f5051.appspot.com",
  messagingSenderId: "295173935598",
  appId: "1:295173935598:web:e0695a53303a134187beff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
