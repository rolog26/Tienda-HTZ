import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWDiYrMuPv-NznYYvKIkwjNXGKK2e07J4",
  authDomain: "tiendahtz.firebaseapp.com",
  projectId: "tiendahtz",
  storageBucket: "tiendahtz.appspot.com",
  messagingSenderId: "802480762142",
  appId: "1:802480762142:web:74339da7478e5356882d0f"
};

export const app = initializeApp(firebaseConfig);