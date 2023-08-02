import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAAIZPdPskyIQ8dGZzpVAg3Hz2teCeTLxw',
  authDomain: 'library-ec74f.firebaseapp.com',
  projectId: 'library-ec74f',
  storageBucket: 'library-ec74f.appspot.com',
  messagingSenderId: '541717592117',
  appId: '1:541717592117:web:9cc5519db615c56d7c997c',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
export { db, auth, storage }
