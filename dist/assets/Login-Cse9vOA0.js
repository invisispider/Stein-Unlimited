import { d as defineComponent, g as getAuthInstance, a as getFirestoreInstance, u as useStore, r as ref, o as onMounted, i as isSignInWithEmailLink, s as signInWithEmailLink, b as doc, c as getDoc, e as setDoc, f as updateDoc, h as createElementBlock, j as createBaseVNode, k as createCommentVNode, l as unref, m as createVNode, w as withDirectives, v as vModelText, t as toDisplayString, n as withModifiers, p as withCtx, q as createTextVNode, x as resolveComponent, y as openBlock, z as signInWithEmailAndPassword, A as sendSignInLinkToEmail, G as GoogleAuthProvider, B as signInWithPopup, _ as _export_sfc } from "./index-BBZgqMci.js";
const _hoisted_1 = { class: "login-page" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { for: "email" };
const _hoisted_5 = { for: "password" };
const _hoisted_6 = { key: 2 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login",
  setup(__props) {
    const auth = getAuthInstance();
    const firestoreDb = getFirestoreInstance();
    function formatError(error) {
      return error instanceof Error ? error.message : String(error);
    }
    async function loginWithEmail(email) {
      const actionCodeSettings = {
        url: "https://steinunlimited.com/Login",
        handleCodeInApp: true
      };
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
    }
    async function loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    }
    const store = useStore();
    const errorMessage = ref("");
    const inputPassword = ref("");
    const inputEmail = ref("");
    const isEmailLinkProcessing = ref(false);
    onMounted(async () => {
      isEmailLinkProcessing.value = isSignInWithEmailLink(auth, window.location.href);
      if (isEmailLinkProcessing.value) {
        try {
          const user = await completeEmailLinkLogin();
          if (user) {
            store.setUser(user);
            ensureUserProfile(user);
          }
        } catch (error) {
          errorMessage.value = `"Failed to complete email link sign-in. ${error}"`;
        }
      }
    });
    const signIn = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, inputEmail.value, inputPassword.value);
        const user = userCredential.user;
        store.setUser(user);
        ensureUserProfile(user);
      } catch (error) {
        if (error instanceof Error) {
          errorMessage.value = formatError(error);
        }
      }
    };
    const completeEmailLinkLogin = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          email = window.prompt("Please provide your email for confirmation");
        }
        if (email) {
          const result = await signInWithEmailLink(auth, email, window.location.href);
          window.localStorage.removeItem("emailForSignIn");
          ensureUserProfile(result.user);
          return result.user;
        }
      }
    };
    const startEmailLogin = async () => {
      if (!inputEmail.value) {
        alert("Enter your email first.");
        return;
      }
      try {
        await loginWithEmail(inputEmail.value);
        alert("Check your email for the login link.");
      } catch (error) {
        console.error(error);
        alert("Failed to send login link.");
      }
    };
    const startGoogleLogin = async () => {
      try {
        const user = await loginWithGoogle();
        store.setUser(user);
        ensureUserProfile(user);
      } catch (error) {
        console.error(error);
        alert("Google login failed.");
      }
    };
    async function ensureUserProfile(user) {
      const docRef = doc(firestoreDb, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          uid: user.uid,
          email: user.email || null,
          displayName: user.displayName || null,
          photoURL: user.photoURL || null,
          createdAt: Date.now(),
          updatedAt: Date.now()
        });
      } else {
        const existing = docSnap.data();
        let updates = {};
        if (!existing.email && user.email) updates.email = user.email;
        if (!existing.displayName && user.displayName) updates.displayName = user.displayName;
        if (!existing.photoURL && user.photoURL) updates.photoURL = user.photoURL;
        if (Object.keys(updates).length > 0) {
          updates.updatedAt = Date.now();
          await updateDoc(docRef, updates);
        }
      }
    }
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("form", {
          class: "login",
          autocomplete: "on",
          method: "dialog",
          onSubmit: withModifiers(signIn, ["prevent"])
        }, [
          isEmailLinkProcessing.value ? (openBlock(), createElementBlock("div", _hoisted_2, _cache[2] || (_cache[2] = [
            createBaseVNode("p", null, "Processing email link...", -1)
          ]))) : createCommentVNode("", true),
          !unref(store).email ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("div", null, [
              _cache[5] || (_cache[5] = createBaseVNode("h2", null, "Kenny Logins", -1)),
              createBaseVNode("label", _hoisted_4, [
                withDirectives(createBaseVNode("input", {
                  id: "email",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputEmail.value = $event),
                  type: "email",
                  placeholder: "Email",
                  name: "email",
                  autocomplete: "email"
                }, null, 512), [
                  [vModelText, inputEmail.value]
                ])
              ]),
              _cache[6] || (_cache[6] = createBaseVNode("i", { class: "material-icons" }, "supervisor_account", -1)),
              _cache[7] || (_cache[7] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("label", _hoisted_5, [
                withDirectives(createBaseVNode("input", {
                  id: "password",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => inputPassword.value = $event),
                  type: "password",
                  placeholder: "Password",
                  name: "password",
                  autocomplete: "current-password"
                }, null, 512), [
                  [vModelText, inputPassword.value]
                ])
              ]),
              _cache[8] || (_cache[8] = createBaseVNode("i", { class: "material-icons" }, "password", -1)),
              _cache[9] || (_cache[9] = createBaseVNode("button", {
                class: "login-submit-button",
                type: "submit",
                name: "submit"
              }, "Password Sign In", -1)),
              createBaseVNode("div", null, toDisplayString(errorMessage.value), 1),
              createBaseVNode("button", {
                class: "login-submit-button",
                onClick: withModifiers(startEmailLogin, ["prevent"])
              }, "Login with Email Link"),
              createBaseVNode("button", {
                class: "login-submit-button",
                onClick: withModifiers(startGoogleLogin, ["prevent"])
              }, "Login with Google"),
              _cache[10] || (_cache[10] = createBaseVNode("br", null, null, -1)),
              createVNode(_component_RouterLink, { to: "TermsOfService" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createBaseVNode("i", { class: "material-icons" }, "build", -1),
                  createTextVNode(" Terms of Service")
                ])),
                _: 1
              }),
              createVNode(_component_RouterLink, { to: "PrivacyPolicy" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createBaseVNode("i", { class: "material-icons" }, "grade", -1),
                  createTextVNode(" Privacy Policy")
                ])),
                _: 1
              }),
              _cache[11] || (_cache[11] = createBaseVNode("p", null, "Login to get points and interact in the Talk chat wall feature. This is not a commercial thing, just a fun passion project. ", -1))
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
            createBaseVNode("p", null, [
              _cache[13] || (_cache[13] = createTextVNode("Welcome to the Future. We appreciate you being here. Post on ")),
              createVNode(_component_RouterLink, {
                to: "/Talk",
                class: "talk-link"
              }, {
                default: withCtx(() => _cache[12] || (_cache[12] = [
                  createTextVNode("Talk")
                ])),
                _: 1
              }),
              _cache[14] || (_cache[14] = createTextVNode(" and come back soon to see what we've done with the place."))
            ]),
            createVNode(_component_RouterLink, {
              class: "login-submit-button",
              to: "Logout"
            }, {
              default: withCtx(() => _cache[15] || (_cache[15] = [
                createTextVNode("Logout")
              ])),
              _: 1
            })
          ]))
        ], 32)
      ]);
    };
  }
});
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5189ae32"]]);
export {
  Login as default
};
