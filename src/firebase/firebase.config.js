// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4c11df3qZG75zb3esVfVeVN7WeoxNl78",
    authDomain: "the-kitchen-concept.firebaseapp.com",
    projectId: "the-kitchen-concept",
    storageBucket: "the-kitchen-concept.appspot.com",
    messagingSenderId: "895055709542",
    appId: "1:895055709542:web:15a438ebfd971b1b7634a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;