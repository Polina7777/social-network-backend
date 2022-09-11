import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAjDncqpStntXs_UE7JdUKVO7IWNqJmmHU',
  authDomain: 'social-network-1628d.firebaseapp.com',
  projectId: 'social-network-1628d',
  storageBucket: 'social-network-1628d.appspot.com',
  messagingSenderId: '51838455626',
  appId: '1:51838455626:web:e50feece32d9719fa63bb3',
  measurementId: 'G-H7PDWC18HL',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
