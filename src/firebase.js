import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBvzb6dLUq_GxUE0-VVs--f3moRdabCgTI",
  authDomain: "linkedin-clone-daed8.firebaseapp.com",
  projectId: "linkedin-clone-daed8",
  storageBucket: "linkedin-clone-daed8.appspot.com",
  messagingSenderId: "218059439309",
  appId: "1:218059439309:web:70d51a8d8bbf1126d1bd84",
  measurementId: "G-DN8R33PXFC",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
