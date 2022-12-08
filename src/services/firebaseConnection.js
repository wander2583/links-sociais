import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC7fqlQh6izCXN8ZTdf3qKtS5vTXu_tTsA",
  authDomain: "devlinks-2afb1.firebaseapp.com",
  projectId: "devlinks-2afb1",
  storageBucket: "devlinks-2afb1.appspot.com",
  messagingSenderId: "39966595161",
  appId: "1:39966595161:web:8becab13530dbd7f033948",
  measurementId: "G-90QPLNN96F"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };
