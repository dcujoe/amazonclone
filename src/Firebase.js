import firebase from 'firebase';


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


  const FirebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();


  export { db, auth };