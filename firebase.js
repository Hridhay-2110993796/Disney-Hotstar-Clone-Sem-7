// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD-x2VhGjRNdjqzJ0e0FPh2w89_fke9dHJ",
    authDomain: "disney-hotstar-clone-12345.firebaseapp.com",
    projectId: "disney-hotstar-clone-12345",
    storageBucket: "disney-hotstar-clone-12345.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcd1234efgh5678ijkl90"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
