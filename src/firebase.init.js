// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvjbWA9-TGFWFmAaPHkeYeTvDebXyneJo",
    authDomain: "water-warehouse-5260e.firebaseapp.com",
    projectId: "water-warehouse-5260e",
    storageBucket: "water-warehouse-5260e.appspot.com",
    messagingSenderId: "222341559530",
    appId: "1:222341559530:web:ff4c77469587d081ebd393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;