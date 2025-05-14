<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "@/stores/index";
import { getAuthInstance, getFirestoreInstance } from "@/services/firebaseconfig";
const auth = getAuthInstance();
const firestoreDb = getFirestoreInstance();
import {
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
// browserLocalPersistence,
// setPersistence,
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import UserDashboard from "./UserDashboard.vue";
// import { user } from "firebase-functions/v1/auth";
import type { User } from 'firebase/auth';
// import type { DocumentData } from "firebase-admin/firestore";

interface AppUser {
  uid: string;
  email?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  createdAt: number;
  updatedAt: number;
}

// setPersistence(auth, browserLocalPersistence);

// Helper for error handling
function formatError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

async function loginWithEmail(email: string) {
  const actionCodeSettings = {
    url: 'https://steinunlimited.com/Login', 
    handleCodeInApp: true,
  };

  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  // Save email locally to complete sign-in after link click
  window.localStorage.setItem('emailForSignIn', email);
}

async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

// State
const store = useStore();
const errorMessage = ref('')
const inputPassword = ref("");
const inputEmail = ref("");
const isEmailLinkProcessing = ref(false);
const userData = ref({ user: '' })

// const fullUserData = ref({
//   uid: "",
//   email: "",
//   displayName: "",
//   photoURL: ""
// }) 
 // or "password" for email link

onMounted(async () => {
  isEmailLinkProcessing.value = isSignInWithEmailLink(auth, window.location.href);
  if (isEmailLinkProcessing.value) {
    try {
      const user = await completeEmailLinkLogin();
      if (user) {
        // store.setUid(user.uid);
        store.setUser(user);
        // store.setIsIn();
        // store.setAuthIsReady();
        ensureUserProfile(user);
      }
    } catch (error: unknown) {
      errorMessage.value = `"Failed to complete email link sign-in. ${error}"`;
    }
  }
});

// Main logic function
const signIn = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, inputEmail.value, inputPassword.value);
    const user = userCredential.user;
    store.setUser(user)
    // store.setUid(user.uid);
    // store.setIsIn();
    // store.setAuthIsReady();
    ensureUserProfile(user);
  } catch (error) {
    if (error instanceof Error) {
      errorMessage.value = formatError(error);
    }
  }
};

// Function to complete email link sign-in
const completeEmailLinkLogin = async () => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem('emailForSignIn');
    // If user opened link on different device
    if (!email) {
      email = window.prompt('Please provide your email for confirmation');
    }
    if (email) {
      const result = await signInWithEmailLink(auth, email, window.location.href);
      window.localStorage.removeItem('emailForSignIn');
      ensureUserProfile(result.user);
      return result.user;
    } 
  }
};

const startEmailLogin = async () => {
  if (!inputEmail.value) {
    alert('Enter your email first.');
    return;
  }
  try {
    await loginWithEmail(inputEmail.value);
    alert('Check your email for the login link.');
  } catch (error) {
    console.error(error);
    alert('Failed to send login link.');
  }
};

const startGoogleLogin = async () => {
  try {
    const user = await loginWithGoogle();
    store.setUser(user);
    ensureUserProfile(user);

    // store.setUid(user.uid);
    // store.setIsIn();
    // store.setAuthIsReady();
  } catch (error) {
    console.error(error);
    alert('Google login failed.');
  }
};

async function ensureUserProfile(user: User): Promise<void> {
  const docRef = doc(firestoreDb, 'users', user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    // First login - create new user doc
    await setDoc(docRef, {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || null,
      photoURL: user.photoURL || null,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  } else {
    // existing doc - patch missing fields only
    const existing = docSnap.data();
    let updates: Partial<AppUser> = {}
    if (!existing.email && user.email) updates.email = user.email;
    if (!existing.displayName && user.displayName) updates.displayName = user.displayName;
    if (!existing.photoURL && user.photoURL) updates.photoURL = user.photoURL;

    if (Object.keys(updates).length > 0) {
      updates.updatedAt = Date.now();
      await updateDoc(docRef, updates);
    }
  }
}

</script>
<template>
  <div class="login-page">
    <form class="login" autocomplete="on" method="dialog" @submit.prevent="signIn">
      
      <!-- Sign-in with Email Link -->
      <div v-if="isEmailLinkProcessing">
        <p>Processing email link...</p>
      </div>

      <div v-if="!store.email">
        <h2>Kenny Logins</h2>
        <label for="email">
        <input v-model="inputEmail" type="email"
        placeholder="Email" name="email" autocomplete="email"
        />
        </label>
        <i class="material-icons">supervisor_account</i>
        <br />
        <label for="password">
          <input v-model="inputPassword" type="password" placeholder="Password" 
          name="password"
          autocomplete="current-password"
        
        />
        </label>
        <i class="material-icons">password</i>
        <button class="login-submit-button" type="submit" name="submit">Password Sign In</button>
        <div>{{ errorMessage }}</div>
        <button class="login-submit-button" @click.prevent="startEmailLogin">Login with Email Link</button>
        <button class="login-submit-button" @click.prevent="startGoogleLogin">Login with Google</button>
        <RouterLink to="TermsOfService"><i class="material-icons">build</i> Terms of Service</RouterLink>
        <RouterLink to="PrivacyPolicy"><i class="material-icons">grade</i> Privacy Policy</RouterLink>
      </div>

      <div v-else class="user">
        <UserDashboard
          :styleMode="store.styleMode" :user="userData.user"
          :errorMessage="errorMessage"
        />
        <RouterLink class="login-submit-button" to="Logout">Logout</RouterLink>
      </div>
    </form>
  </div>  
</template>
<style lang="sass" scoped>
.login-page
  display: flex
  flex-direction: column
  margin: auto
.user 
  margin: auto  
.login
  font-family: "Poppins" Bold
  margin: auto
  border-radius: 5px
  max-width: 800px
  padding: 1em 2em
  h2
    border-radius: 5px
  input
    max-width: 70vw
    font-size: 1.4em
  input[name="submit"]
    margin: 1em
  i
    margin-left: 8px
  p, a, router-link
    display: block
    text-decoration: none

</style>