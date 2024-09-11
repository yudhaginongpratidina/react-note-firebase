// LIBRARY
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// FIREBASE CONFIG
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};


// INITIAL
const Firebase = initializeApp(firebaseConfig);

// AUTH
const Auth = getAuth(Firebase);

// EXPORT
export { Firebase, Auth };
