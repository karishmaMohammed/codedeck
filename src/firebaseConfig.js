import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHzwbktISJ7Qnu8I-0KGw13m4sT_iAXkI",
  authDomain: "code-editor-b24e1.firebaseapp.com",
  projectId: "code-editor-b24e1",
  storageBucket: "code-editor-b24e1.appspot.com",
  messagingSenderId: "379438014309",
  appId: "1:379438014309:web:80d259a32cf053f4270b8c",
  measurementId: "G-2E27D2JZP1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();

export { db, auth };