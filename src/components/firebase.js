// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';  // Poprawny import
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl-3J9axCwLlwUZuqvFBViliyvTvXY39U",
  authDomain: "online-store-3e359.firebaseapp.com",
  projectId: "online-store-3e359",
  storageBucket: "online-store-3e359.firebasestorage.app",
  messagingSenderId: "1024858878205",
  appId: "1:1024858878205:web:4e8290bcfe0cde7eb34e94",
  measurementId: "G-W3Y689F8RS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);