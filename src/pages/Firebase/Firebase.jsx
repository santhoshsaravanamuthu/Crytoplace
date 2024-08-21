import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGTGokVMwtNk9q45HLI00tJopjX_q1XRk",
  authDomain: "cryptoplace-32bfa.firebaseapp.com",
  projectId: "cryptoplace-32bfa",
  storageBucket: "cryptoplace-32bfa.appspot.com",
  messagingSenderId: "486055389258",
  appId: "1:486055389258:web:0be1136c957935474d5eb3"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;