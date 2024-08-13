// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFRw_M6_rjpr_qXNsl7txHEWr1r2k5SY0",
  authDomain: "inventario-4a3e0.firebaseapp.com",
  databaseURL: "https://inventario-4a3e0-default-rtdb.firebaseio.com",
  projectId: "inventario-4a3e0",
  storageBucket: "inventario-4a3e0.appspot.com",
  messagingSenderId: "578136743800",
  appId: "1:578136743800:web:6a35d0b9417ba46771728d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
