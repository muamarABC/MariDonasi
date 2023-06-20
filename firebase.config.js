import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyDsyg69zAqRph6x2HjUfl6F2GHqE9fAY4Y",
    authDomain: "abp12-37ab7.firebaseapp.com",
    projectId: "abp12-37ab7",
    storageBucket: "abp12-37ab7.appspot.com",
    messagingSenderId: "343957121760",
    appId: "1:343957121760:web:351301862c5ee3a60afe85"


    // apiKey: "AIzaSyDAhDwDNygwzZXkVZHGFvv3emqPzsTzM1I",
    // authDomain: "miniroject-70b4e.firebaseapp.com",
    // projectId: "miniroject-70b4e",
    // storageBucket: "miniroject-70b4e.appspot.com",
    // messagingSenderId: "765415982083",
    // appId: "1:765415982083:web:42f35c0483c4b6efb8ba36"

    // apiKey: "AIzaSyAIwAPIjWlWKRVJI5hjrLe-wAfvCNYJNdY",
    // authDomain: "miniproject-2609f.firebaseapp.com",
    // projectId: "miniproject-2609f",
    // storageBucket: "miniproject-2609f.appspot.com",
    // messagingSenderId: "1055786505829",
    // appId: "1:1055786505829:web:45170bcce01ac65798188c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;