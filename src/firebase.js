import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDA1h6zv5uE8TnQyO7v-MKVaGD6E-WmRHA",
  authDomain: "anshir-portfolio.firebaseapp.com",
  projectId: "anshir-portfolio",
  storageBucket: "anshir-portfolio.appspot.com",
  messagingSenderId: "1001124261435",
  appId: "1:1001124261435:web:f4e4069aa226379c75f61e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();