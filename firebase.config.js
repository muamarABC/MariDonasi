import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD2-23GGXe81a-U7Gt2YTEeTPpRdS3xS7U",
    authDomain: "miniproject-10ecf.firebaseapp.com",
    projectId: "miniproject-10ecf",
    storageBucket: "miniproject-10ecf.appspot.com",
    messagingSenderId: "90865731166",
    appId: "1:90865731166:web:d0e0dbfba1ce69921a56cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;