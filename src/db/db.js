import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyAD8um4BNK581mFIBXbyWTqlBmsk9N7dLg",
  authDomain: "sstsnaps-53ee8.firebaseapp.com",
  projectId: "sstsnaps-53ee8",
  storageBucket: "sstsnaps-53ee8.firebasestorage.app",
  messagingSenderId: "675432680523",
  appId: "1:675432680523:web:6e0365b6ae29bb5355d1ce"
  
  }

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);