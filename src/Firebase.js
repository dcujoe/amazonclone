import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBza4axcxgbiKgH8oO3UAiuyFRcniHXVp8",
    authDomain: "kode49-1ee52.firebaseapp.com",
    projectId: "kode49-1ee52",
    storageBucket: "kode49-1ee52.appspot.com",
    messagingSenderId: "973845219775",
    appId: "1:973845219775:web:f65490776580da453e390a",
    measurementId: "G-V1YGKD8VSM"
  };


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  const auth = getAuth(firebaseApp);

  

  
  export { db, auth };