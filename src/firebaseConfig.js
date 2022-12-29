import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCIm0ia6W9a2XJEM270NnT1zogeo9lw3BI",
  authDomain: "code-editor-276eb.firebaseapp.com",
  projectId: "code-editor-276eb",
  storageBucket: "code-editor-276eb.appspot.com",
  messagingSenderId: "815588031643",
  appId: "1:815588031643:web:4061e25a1c3518cd6b5a3e",
  measurementId: "G-XMM5JVJZFV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();

export { db, auth };