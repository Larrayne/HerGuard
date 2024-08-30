// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);