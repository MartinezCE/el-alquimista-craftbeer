import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  query,
  where,
  colleccion,
  getDocs,
  collection,
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
  const miColec = collection(firestoreDB, "Beer");
  const producSnap = await getDocs(miColec);
  return producSnap.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

//filtrat items

export async function getItemsByCategory(categoryId) {
  const miColec = collection(firestoreDB, "Beer");
  const queryBeer = query(miColec, where("type", "==", categoryId));
  const producSnap = await getDocs(queryBeer);

  return producSnap.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

//obetener un solo item --- itemDitail

export async function getItem(id) {
  const miColec = collection(firestoreDB, "Beer");
  const beerRef = doc(miColec, id);
  const producSnap = await getDoc(beerRef);
  return {
    ...producSnap.data(),
    id: producSnap.id,
  };
}
