import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmv8bdU8PdFb5Gxy_KMMapzfOGrJBSDlo",
    authDomain: "clone-9e514.firebaseapp.com",
    projectId: "clone-9e514",
    storageBucket: "clone-9e514.appspot.com",
    messagingSenderId: "862043523131",
    appId: "1:862043523131:web:151bbd8383b1874f01741e",
    measurementId: "G-SBSMR1ZXVF"
});

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}