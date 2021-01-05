import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAofQKlaLo69fYdmz3IxyhZCCMa38ateGw',
  authDomain: 'blog-nextjs-66f6a.firebaseapp.com',
  projectId: 'blog-nextjs-66f6a',
  storageBucket: 'blog-nextjs-66f6a.appspot.com',
  messagingSenderId: '811035783475',
  appId: '1:811035783475:web:27a067289e1d096ace0e46',
}

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const firestore = firebase.firestore()
export default firestore

export const fireauth = firebase.auth()
