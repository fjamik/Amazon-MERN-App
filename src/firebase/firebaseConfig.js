import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAcY1xZgjAd4NRDbrmXtG5VyiJI9LYYe1c',
  authDomain: 'b-e3db3.firebaseapp.com',
  projectId: 'b-e3db3',
  storageBucket: 'b-e3db3.appspot.com',
  messagingSenderId: '431840507832',
  appId: '1:431840507832:web:adf2d1d07044409d83414d',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
var provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
