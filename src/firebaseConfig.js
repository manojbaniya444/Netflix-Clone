import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCUGU0r19ZpGtFcY8DIrlIXlw49_zuEVtE",
  authDomain: "netflix-clone-c5eaa.firebaseapp.com",
  projectId: "netflix-clone-c5eaa",
  storageBucket: "netflix-clone-c5eaa.appspot.com",
  messagingSenderId: "389856216805",
  appId: "1:389856216805:web:0f1e255bfa19d6c532b60c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);