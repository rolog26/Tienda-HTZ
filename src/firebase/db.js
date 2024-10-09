import { 
  getFirestore,
  collection, 
  getDocs, 
  query, 
  where, 
  doc, 
  getDoc,
  addDoc
 } from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app)

 export const getProducts = async (setProducts, category = null) => {
   let q;
  
   if (category) {
     const productsRef = collection(db, "products")
     q = query(productsRef, where("category", "==", category))
 } else {
     q = collection(db, "products")
 }

 const querySnapshot = await getDocs(q)
 const products = []

 querySnapshot.forEach((doc) => {
   products.push(doc.data())
 })

 setProducts(products)
 }

 export const getProduct = async (setProduct, id) => {
   const docRef = doc(db, "products", id)
   const docSnap = await getDoc(docRef)
   
   if (docSnap.exists()) {
     setProduct(docSnap.data())
   } else {
     console.log("No such document!")
   }
}

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order)
    console.log("Document written with ID: ", docRef.id)
    return { ...order, id: docRef.id }
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}
