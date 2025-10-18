// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAl7PO3MPtbwlpy46hnTiuUVFsEs1yZUU",
  authDomain: "dev-deakin-task-8-1d.firebaseapp.com",
  projectId: "dev-deakin-task-8-1d",
  storageBucket: "dev-deakin-task-8-1d.firebasestorage.app",
  messagingSenderId: "201020448057",
  appId: "1:201020448057:web:073f9914d84fe070801ce8",
  measurementId: "G-3BVBM5FVT5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };