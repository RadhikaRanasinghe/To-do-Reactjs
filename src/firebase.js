// const firebaseConfig = {
//     apiKey: "AIzaSyC2Pf9QT2qtmKES4kAJ0RWni35q-NAep7Q",
//     authDomain: "todo-app-cp-1c3ae.firebaseapp.com",
//     projectId: "todo-app-cp-1c3ae",
//     storageBucket: "todo-app-cp-1c3ae.appspot.com",
//     messagingSenderId: "904403947042",
//     appId: "1:904403947042:web:b62c48c17b5916c3d4047b",
//     measurementId: "G-0M6S4M3QBZ"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2Pf9QT2qtmKES4kAJ0RWni35q-NAep7Q",
    authDomain: "todo-app-cp-1c3ae.firebaseapp.com",
    projectId: "todo-app-cp-1c3ae",
    storageBucket: "todo-app-cp-1c3ae.appspot.com",
    messagingSenderId: "904403947042",
    appId: "1:904403947042:web:b62c48c17b5916c3d4047b",
    measurementId: "G-0M6S4M3QBZ"
});

const db = firebaseApp.firestore();

export default db;