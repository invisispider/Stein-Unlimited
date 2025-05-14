import { onAuthStateChanged } from "firebase/auth";
import { getAuthInstance, getFirestoreInstance } from "@/services/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";

import { defineStore } from "pinia";
import type { RootState } from "@/models/states.model";
import { getUser, updateUser } from '@/services/api';
import debounce from "lodash/debounce";
const auth = getAuthInstance();
const firestoreDb = getFirestoreInstance();
// console.log("pinia rendered");

export type StyleName = "struggles"|"flowers"|"elders"|"vivid"|"peace"|"harvests"|"hallows"|"feasts"

interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  level: string | null;
}

const debouncedSaveStyleToDB = debounce(async (uid: string, style: StyleName) => {
  await updateUser({"uid": uid, "styleMode": style});
}, 10000); // 10 seconds before db commit

export const useStore = defineStore("main", {
  persist: true,
  state: (): RootState => ({
    uid: '',
    displayName: '',
    email: '',
    photoURL: '',
    bio: '',
    website: '',
    level: '',
    state: '',
    type: '',
    quadrant: '',
    userCreated: '',
    userUpdated: '',
    lastLogin: '',
    isBanned: false,
    roles: [],
    styleMode: 'elders' as StyleName,
    isIn: false,
    authIsReady: false,
    admin: false,
    points: 0,
  }) as RootState,
  actions: {
    async initAuth() {
      return new Promise<void>((resolve) => {
        onAuthStateChanged(auth, async (user) => {
          try {
            if (user) {
              this.setUser(user);
              const docRef = doc(firestoreDb, "users", user.uid);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                const docData = docSnap.data();
                this.setUser({ 
                  ...docData,
                  uid: user.uid,
                  email: user.email ?? undefined,
                });
              }

              const idTokenResult = await user.getIdTokenResult();
              this.setAdmin(!!idTokenResult.claims.admin);
              this.setIsIn();
            } else {
              this.setIsOut();
            }
            this.setAuthIsReady();
            resolve();
          } catch (err) {
            console.error("initAuth error:", err);
            this.setIsOut();
            this.setAuthIsReady();
            resolve();
          }
        });
      });
    },
    logout() {
      this.$reset();
    },
    async loadUserData(uid: string) {
      const user = await getUser(uid);
      Object.assign(this, user);
    },
    async updateStyleMode(newStyle: StyleName) {
      this.styleMode = newStyle;
      if (this.uid) {
        debouncedSaveStyleToDB(this.uid, newStyle);
      }
    },
    setUser(user: User | Partial<User>) {
      try {
        Object.assign(this, user);
        this.isIn = true;
        this.authIsReady = true;
      } catch (err) {
        console.error('Auth handler error:', err);
      }
    },
    setAuthIsReady() {
      this.authIsReady = true;
    },
    setIsIn() {
      this.isIn = true;
    },
    setIsOut() {
      this.isIn = false;
    },
    setUid(uid: string) {
      this.uid = uid.trim()
    },
    setAdmin(isAdmin: boolean) {
      this.admin = isAdmin;
    },
  },
})
