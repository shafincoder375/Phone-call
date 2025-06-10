// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5tGapvf0uQVQpnLopJBMJEMS8jxyONLo",
  authDomain: "any-dex-73a23.firebaseapp.com",
  databaseURL: "https://any-dex-73a23-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "any-dex-73a23",
  storageBucket: "any-dex-73a23.firebasedatabase.app",
  messagingSenderId: "464980822152",
  appId: "1:464980822152:web:4a97da8d8c84a88947b73d",
  measurementId: "G-LQKM57CCN8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
