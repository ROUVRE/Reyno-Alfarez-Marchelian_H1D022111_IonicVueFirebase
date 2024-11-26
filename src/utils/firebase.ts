import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwFHuq1xlSKqKLdzFRz0CWpjkuxjH9-5I",
  authDomain: "vue-firebase-6e86b.firebaseapp.com",
  projectId: "vue-firebase-6e86b",
  storageBucket: "vue-firebase-6e86b.firebasestorage.app",
  messagingSenderId: "1003759385006",
  appId: "1:1003759385006:web:bd2c61ac6450380947703f",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };
