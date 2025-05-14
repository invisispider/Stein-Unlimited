import { createApp } from "vue";
// import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import pinia from '@/stores/pinia';
import App from "@/App.vue";
import router from "@/router";
import { useStore } from "./stores";
// import { createPinia } from "pinia";

// if (import.meta.env.DEV) {
  // Development CSP
  // document.head.insertAdjacentHTML('beforeend', `
  //   <meta http-equiv="Content-Security-Policy" content="
  //     default-src 'self' http://localhost:8000;
  //     script-src 'self' 'unsafe-inline' 'unsafe-eval' http://localhost:8000 https://www.gstatic.com https://www.googleapis.com https://www.gstatic.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
  //     style-src 'self' 'unsafe-inline' http://localhost:8000;
  //     img-src 'self' https://www.gstatic.com https://firebasestorage.googleapis.com https://i.ytimg.com;
  //     connect-src 'self' https://firestore.googleapis.com https://identitytoolkit.googleapis.com https://firebasestorage.googleapis.com https://*.googleapis.com https://*.firebaseio.com https://*.firebaseappcheck.googleapis.com https://stein-unlimited.cloudfunctions.net;
  //     font-src 'self' https://fonts.gstatic.com https://cdn.glitch.me;
  //     frame-src 'self' https://www.google.com https://www.google.com/recaptcha/ https://www.google.com https://www.youtube.com;
  //   ">
  // `);
// } else {
  // Production CSP
  // document.head.insertAdjacentHTML('beforeend', `
  //   <meta http-equiv="Content-Security-Policy" content="
  //     default-src 'self';
  //     script-src 'self' https://www.gstatic.com https://www.googleapis.com;
  //     style-src 'self' 'unsafe-inline';
  //     img-src 'self' https://firebasestorage.googleapis.com https://www.gstatic.com https://i.ytimg.com;
  //     connect-src 'self' https://firestore.googleapis.com https://identitytoolkit.googleapis.com https://firebasestorage.googleapis.com https://*.googleapis.com https://*.firebaseio.com https://*.firebaseappcheck.googleapis.com https://stein-unlimited.cloudfunctions.net;
  //     font-src 'self' https://fonts.gstatic.com https://cdn.glitch.me;
  //     frame-src 'self' https://www.google.com https://www.youtube.com;
  //     object-src 'none';
  //     worker-src 'self';
  //   ">
  // `);
// }

(async () => {
  const app = createApp(App);
  app.use(pinia);
  app.use(router);

  const store = useStore();

  await store.initAuth();

  // Add navigation guard now that auth is ready
  router.beforeEach((to, from, next) => {
    if (!store.authIsReady) return;  
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !store.isIn) {
      return next('/Login');
    } else if (to.name === 'Admin' && store.uid !== import.meta.env.VITE_UID) {
      return next(false); 
    } else {
      return next();
    }
  });
  
  await router.isReady()
  app.mount('#app');
})();