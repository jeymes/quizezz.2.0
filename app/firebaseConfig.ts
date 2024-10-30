import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqeZ2CIrXKFuDn6wQk-g6cTRjUXeF2pmk",
  authDomain: "appsbuildings.firebaseapp.com",
  projectId: "appsbuildings",
  storageBucket: "appsbuildings.appspot.com",
  messagingSenderId: "733587268565",
  appId: "1:733587268565:web:a3e85ce343332a67f0d35c",
  measurementId: "G-Y3H345R3GJ"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp)
export { db, auth, storage };
