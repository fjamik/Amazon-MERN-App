import firebase from 'firebase'

const firebaseConfig = {
  YOUR CONFIG HERE
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
var provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
