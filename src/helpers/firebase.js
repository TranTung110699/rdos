import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA2XlwMwlx5DP1lixyX9kxj2NAHb3_4jlE",
    authDomain: "notification-callwater.firebaseapp.com",
    databaseURL: "https://notification-callwater-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "notification-callwater",
    storageBucket: "notification-callwater.appspot.com",
    messagingSenderId: "799644116204",
    appId: "1:799644116204:web:53dbf8dae48e06a6e171c9",
    measurementId: "G-3KB0L010GL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;