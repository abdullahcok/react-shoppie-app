import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyB6ieiiFFHlQARCUS6tAoIkN_62xsjCoZM",
    authDomain: "bikie-db.firebaseapp.com",
    databaseURL: "https://bikie-db.firebaseio.com",
    projectId: "bikie-db",
    storageBucket: "bikie-db.appspot.com",
    messagingSenderId: "617206266774",
    appId: "1:617206266774:web:7cf0efe205f91367247bb7",
    measurementId: "G-NWRZ78D7P9"
  };


firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promp: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
