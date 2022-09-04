import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAjDncqpStntXs_UE7JdUKVO7IWNqJmmHU",
  authDomain: "social-network-1628d.firebaseapp.com",
  projectId: "tutorial-e06c1",
  storageBucket: "tutorial-e06c1.appspot.com",
  messagingSenderId: "863505404334",
  appId: "1:863505404334:web:132118b0d6acd7dfa3f83f",
  measurementId: "G-SW2M0FYQG5",
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = app.firestore();

export {
    auth,
    db
}