import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// import { getStorage } from "firebase/storage"
// import { getFunctions } from "firebase/functions"

const firebaseConfig = {
  projectId: "stein-unlimited",
  appId: import.meta.env.VITE_FB_APPID,
  apiKey: import.meta.env.VITE_FB_APIKEY,
  authDomain: "stein-unlimited.firebaseapp.com",
  databaseURL: import.meta.env.VITE_UN_FB_DATABASEURL,
  storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID,
  measurementId: import.meta.env.VITE_FB_MEASUREMENTID,
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
// export const storage = getStorage(app)
// export const functions = getFunctions(app)