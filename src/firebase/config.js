// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl6DjlJtPsZZCcxiU7NOkyU3i42HoPyYM",
    authDomain: "proyecto-react-coderhous-9ce20.firebaseapp.com",
    projectId: "proyecto-react-coderhous-9ce20",
    storageBucket: "proyecto-react-coderhous-9ce20.appspot.com",
    messagingSenderId: "982200709393",
    appId: "1:982200709393:web:078c3e6439084436905cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
