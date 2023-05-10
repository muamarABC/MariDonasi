import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    // apiKey: "AIzaSyD2-23GGXe81a-U7Gt2YTEeTPpRdS3xS7U",
    // authDomain: "miniproject-10ecf.firebaseapp.com",
    // projectId: "miniproject-10ecf",
    // storageBucket: "miniproject-10ecf.appspot.com",
    // messagingSenderId: "90865731166",
    // appId: "1:90865731166:web:d0e0dbfba1ce69921a56cf"
    // apiKey: "AIzaSyAxtcUaqz6j60P4Ciui1q-p5N0r3v0Gblg",
    // authDomain: "miniproject-f2fae.firebaseapp.com",
    // projectId: "miniproject-f2fae",
    // storageBucket: "miniproject-f2fae.appspot.com",
    // messagingSenderId: "320558627053",
    // appId: "1:320558627053:web:e9a186d2d374a7b756b4e4"
    // apiKey: "AIzaSyCknFDcCarhFc_IICsN3uGM7SRHvz95xCc",
    // authDomain: "miniproject-aea72.firebaseapp.com",
    // projectId: "miniproject-aea72",
    // storageBucket: "miniproject-aea72.appspot.com",
    // messagingSenderId: "137753644173",
    // appId: "1:137753644173:web:dc329240b89cc30fafe6c4"
    apiKey: "AIzaSyAIwAPIjWlWKRVJI5hjrLe-wAfvCNYJNdY",
    authDomain: "miniproject-2609f.firebaseapp.com",
    projectId: "miniproject-2609f",
    storageBucket: "miniproject-2609f.appspot.com",
    messagingSenderId: "1055786505829",
    appId: "1:1055786505829:web:45170bcce01ac65798188c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;