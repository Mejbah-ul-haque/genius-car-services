// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4MMs5Dl4nUaunW3DBLLBtfHF9gt5sIkk",
    authDomain: "genius-car-services-941a4.firebaseapp.com",
    projectId: "genius-car-services-941a4",
    storageBucket: "genius-car-services-941a4.appspot.com",
    messagingSenderId: "490184721517",
    appId: "1:490184721517:web:dca8d763301ad3832cab64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

