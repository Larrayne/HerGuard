import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Authentication
import { getFirestore } from "firebase/firestore"; // Firestore
import { getDatabase } from "firebase/database"; // Realtime Database
import { getStorage } from "firebase/storage"; // Storage

const firebaseConfig = {
  apiKey: "AIzaSyARhtTXyMaAmuFgZCO-zFJPbh60oAEHYAo",
  authDomain: "herguard-f2f29.firebaseapp.com",
  databaseURL: "https://herguard-f2f29-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "herguard-f2f29",
  storageBucket: "herguard-f2f29.appspot.com",
  messagingSenderId: "147105309671",
  appId: "1:147105309671:web:eac8ba8cbbb76e96a31342",
  measurementId: "G-K8FK8MG01Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Authentication
const db = getFirestore(app); // Firestore
const database = getDatabase(app); // Realtime Database
const storage = getStorage(app); // Storage

// Export the initialized services for use in other parts of your app
export { auth, db, database, storage };