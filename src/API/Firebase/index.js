import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  query,
  where,
  colleccion,
  getDocs,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDAEJs4njyXkzUd1FW-ztdGX_4aIkQtjTY",
  authDomain: "alquimista-373a5.firebaseapp.com",
  projectId: "alquimista-373a5",
  storageBucket: "alquimista-373a5.appspot.com",
  messagingSenderId: "219669986293",
  appId: "1:219669986293:web:b6cd0225a7c4bea689bebc",
  measurementId: "G-7G0JLEYBTC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
const firestoreDB = getFirestore(app);
export default firestoreDB;

//otener los items

export async function getAllItems() {
  //otenermos la referencia a la colleccion
  const miColec = collectio(firebaseDB, "Beer");
  const producSnap = await getDocs(miColec);
  return producSnap.docs.map((doc) => doc.data());
}
