import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqN_NV7aADhWQP9tsqdRRynZqWTTK5oiY",
  authDomain: "team2-d860a.firebaseapp.com",
  databaseURL: "https://team2-d860a-default-rtdb.firebaseio.com",
  projectId: "team2-d860a",
  storageBucket: "team2-d860a.firebasestorage.app",
  messagingSenderId: "144144622481",
  appId: "1:144144622481:web:a8f7f09c053ae194cd7030",
  measurementId: "G-Q7QE23PLVN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);