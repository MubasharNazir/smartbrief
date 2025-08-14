// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCU428L_pbQGOf2TUojhCzKXAEMzjAd_To",
//   authDomain: "newsiq-6d817.firebaseapp.com",
//   projectId: "newsiq-6d817",
//   storageBucket: "newsiq-6d817.firebasestorage.app",
//   messagingSenderId: "1071904845608",
//   appId: "1:1071904845608:web:9300ab566d3316323aaa1d",
//   measurementId: "G-VCPZNJDFSQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Commented out to avoid unused import warning
import { getFirestore } from "firebase/firestore"; // <-- Add this line

const firebaseConfig = {
  apiKey: "AIzaSyCU428L_pbQGOf2TUojhCzKXAEMzjAd_To",
  authDomain: "newsiq-6d817.firebaseapp.com",
  projectId: "newsiq-6d817",
  storageBucket: "newsiq-6d817.firebasestorage.app",
  messagingSenderId: "1071904845608",
  appId: "1:1071904845608:web:9300ab566d3316323aaa1d",
  measurementId: "G-VCPZNJDFSQ"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Commented out to avoid unused variable warning
const db = getFirestore(app); // <-- Add this line

export { db }; // <-- Add this line