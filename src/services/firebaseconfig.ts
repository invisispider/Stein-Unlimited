import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"
import { getFunctions } from "firebase/functions"
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"
// import { getAnalytics } from "firebase/analytics"

// Firebase config
const firebaseConfig = {
  projectId: "stein-unlimited",
  appId: import.meta.env.VITE_FB_APPID as string,
  apiKey: import.meta.env.VITE_FB_APIKEY as string,
  authDomain: "stein-unlimited.firebaseapp.com",
  databaseURL: import.meta.env.VITE_UN_FB_DATABASEURL as string,
  storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET as string,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID as string,
  measurementId: import.meta.env.VITE_FB_MEASUREMENTID as string,
}

// Initialize app
const firebaseApp = initializeApp(firebaseConfig)

// // App Check (ReCAPTCHA v3)
// if (import.meta.env.DEV) {
//   // Inject debug token for local development
//   window.FIREBASE_APPCHECK_DEBUG_TOKEN = import.meta.env.VITE_RECAPTCHA_DEBUG_TOKEN
// }

// initializeAppCheck(firebaseApp, {
//   provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA),
//   isTokenAutoRefreshEnabled: true,
// })

// Export Firebase services
export const getAuthInstance = () => getAuth(firebaseApp)
export const getFirestoreInstance = () => getFirestore(firebaseApp);

if (!getAuthInstance) {
  console.error('Firebase Auth failed to initialize')
  process.exit(1)
} else {
  console.log('Firebase Auth initialized successfully.')
}
// export const firestoreDb = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
export const realtimeDb = getDatabase(firebaseApp)
export const fireFunctions = getFunctions(firebaseApp)
