// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyB6FHDqkyc7FbApfhzvkflB64U40QV8Xkw',
  authDomain: 'crud-84810.firebaseapp.com',
  projectId: 'crud-84810',
  storageBucket: 'crud-84810.appspot.com',
  messagingSenderId: '269819866368',
  appId: '1:269819866368:web:b6ca1fa70278464835d7e5',
  measurementId: 'G-MYCRVXY4LQ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const fireDb = getFirestore(app)
