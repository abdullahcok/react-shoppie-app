import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
      apiKey: "AIzaSyBOAVlVr6Yod9IasgH_fJiOjm9i7pzWjHI",
      authDomain: "ab-pedal.firebaseapp.com",
      projectId: "ab-pedal",
      storageBucket: "ab-pedal.appspot.com",
      messagingSenderId: "509192216150",
      appId: "1:509192216150:web:ad2bc3a258e58494ce25f7",
      measurementId: "G-GCZGLCWD4F"
  };


  export const createUserProfileDocument = async(userAuth, additionalData) => {
      if(!userAuth) return

      const userRef = firestore.doc(`/users/${userAuth.uid}`)
      const collectionRef = firestore.collection('users');

      const snapShot = await userRef.get();
      const collectionSnapshot = await collectionRef.get()
      console.log({collection: collectionSnapshot.docs.map(doc => doc.data()) });

      if(snapShot.exists){
          const{displayName, email} = userAuth
          const createdAt = new Date();

          try{
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          }catch(error){
            console.log('error creating user', error.message);
          }
      }

      return userRef
  };


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const database = firebase.database()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promp: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
