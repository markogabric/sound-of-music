// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUoNQUCbesx_joA5A8fiNSz8eYUOrNJ3c",
  authDomain: "sound-of-music-609d9.firebaseapp.com",
  projectId: "sound-of-music-609d9",
  storageBucket: "sound-of-music-609d9.appspot.com",
  messagingSenderId: "428639317134",
  appId: "1:428639317134:web:8dc1aa7cf561f80fa0eddf",
  measurementId: "G-C68X1J0BRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);