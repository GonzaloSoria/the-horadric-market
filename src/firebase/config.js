// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyBYHpOF9COWS9Q5nlcmDfU9xVUdvSVtw",
  authDomain: "the-horadric-market-fbddc.firebaseapp.com",
  projectId: "the-horadric-market-fbddc",
  storageBucket: "the-horadric-market-fbddc.appspot.com",
  messagingSenderId: "933715274178",
  appId: "1:933715274178:web:4f56b8861e8fd47a900e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);