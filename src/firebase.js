
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqXka9RTnnU2s6BXdPCIqsQxseQUwybcY",
  authDomain: "pruebatssac-db037.firebaseapp.com",
  projectId: "pruebatssac-db037",
  storageBucket: "pruebatssac-db037.firebasestorage.app",
  messagingSenderId: "503732373509",
  appId: "1:503732373509:web:f13c8f8e426fa96e79746c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
