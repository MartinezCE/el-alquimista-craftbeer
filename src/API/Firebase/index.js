import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  collection,
  Timestamp,
  // setDoc,
  addDoc,
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

/* export async function dataToFirebase() {
  const PRODUCTS = [
    { title: "IPA", stock: 7, price: 8524, type: "blonde" },
    { title: "APA", stock: 40, price: 1356, type: "red" },
    { title: "GOLDEN", stock: 71, price: 3815, type: "blonde" },
    { title: "RED", stock: 68, price: 6545, type: "red" },
    { title: "PORTER", stock: 12, price: 55, type: "black" },
    { title: "HONNEY", stock: 64, price: 5059, type: "blonde" },
    { title: "FRUTADA", stock: 85, price: 7082, type: "blonde" },
    { title: "CITRICA.", stock: 70, price: 7736, type: "blond" },
    { title: "PILSEN", stock: 93, price: 324, type: "blonde" },
    { title: "SESSION", stock: 16, price: 7506, type: "blonde" },
  ];

  const miColecccion = collection(firestoreDB, "Beer");

  PRODUCTS.forEach((item) => {
    const newDoc = doc(miColecccion);
    setDoc(newDoc, item)
      .then(() => {
        console.log("Document written with id:", newDoc.id);
      })
      .catch((err) => {
        console.error("Error adding document:", err);
      });
  });
} */

export async function createBuyOrder(orderData) {
  const buyTimestamp = Timestamp.now();
  const orderWithDate = {
    ...orderData,
    date: buyTimestamp,
  };
  const miColec = collection(firestoreDB, "buyOrders");
  const orderDoc = await addDoc(miColec, orderWithDate);
  alert(`Compra realizada con exito\nNumero de id ${orderDoc.id}`);
}
