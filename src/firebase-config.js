
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBJQcjSI1JDkkq7_7DcnzaI9EqS23t10I",
  authDomain: "blogfirebase1-84f6d.firebaseapp.com",
  projectId: "blogfirebase1-84f6d",
  storageBucket: "blogfirebase1-84f6d.appspot.com",
  messagingSenderId: "810588099648",
  appId: "1:810588099648:web:6f19e78cadf4a33a9f7ba5"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();