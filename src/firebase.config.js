import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9YMP-7nY0wNFTHmMpA7a6_hLJ13OacRQ",
  authDomain: "house-marketplace-app-48c8c.firebaseapp.com",
  projectId: "house-marketplace-app-48c8c",
  storageBucket: "house-marketplace-app-48c8c.appspot.com",
  messagingSenderId: "248658772165",
  appId: "1:248658772165:web:b2a0569348dbe7e41130ac",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
