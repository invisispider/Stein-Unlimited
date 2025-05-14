import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import { getAuthInstance } from "@/services/firebaseconfig";
import { useStore } from "@/stores/index";
import { signOut } from "@firebase/auth";

const LogoutComponent = { template: '<div>Logging out...</div>' };

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "/Logout",
    name: "Logout",
    component: LogoutComponent,
    beforeEnter: async () => {
      const auth = getAuthInstance();
      await signOut(auth);
      const store = useStore();
      store.logout();
      await store.initAuth();
      return { path: '/' };
    },
  },
  {
    path: "/Talk",
    name: "Talk",
    meta: { requiresAuth: true },
    component: () => import("@/views/Talk.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    meta: { requiresAuth: true },
    component: () => import("@/views/Admin.vue"),
    // beforeEnter: () => {
    //   const store = useStore();
    //   if (store.uid !== import.meta.env.VITE_UID) {
    //     return false;
    //   }
    // },
  },
  {
    path: "/UnThinkMe",
    name: "UnThinkMe",
    component: () => import("@/views/UnThinkMe.vue"),
  },
  {
    path: "/Time",
    name: "Time",
    component: () => import("@/views/Time.vue"),
  },
  {
    path: "/Integral",
    name: "Integral",
    component: () => import("@/views/Integral.vue"),
  },
  {
    path: "/Beacon",
    name: "Beacon",
    component: () => import("@/views/Beacon.vue"),
  },
  {
    path: "/Technomancy",
    name: "Technomancy",
    component: () => import("@/components/Landing/Technomancy.vue"),
  },
  {
    path: "/Next",
    name: "Next",
    component: () => import("@/views/Next.vue"),
  },
  {
    path: "/Crossword",
    name: "Crossword",
    component: () => import("@/views/Crossword.vue"),
  },
  {
    path: "/Music",
    name: "Music",
    component: () => import("@/views/Music.vue"),
  },
  {
    path: "/Videos",
    name: "Videos",
    component: () => import("@/views/Videos.vue"),
  },
  {
    path: "/UnThinkMe",
    name: "UnThinkMe",
    component: () => import("@/views/UnThinkMe.vue"),
  },
  {
    path: "/PrivacyPolicy",
    name: "PrivacyPolicy",
    component: () => import("@/views/PrivacyPolicy.vue"),
  },
  {
    path: "/TermsOfService",
    name: "TermsOfService",
    component: () => import("@/views/TermsOfService.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "FourOhFour",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
});

export default router;
