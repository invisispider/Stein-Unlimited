import { createApp } from "vue"
import App from "@/App.vue"
import pinia from '@/stores/pinia'
import router from "@/router"
import VueApexCharts from "vue3-apexcharts"
import { useStore } from "./stores"

(async () => {
  const app = createApp(App)
  
  app.use(pinia)
  app.use(router)

  app.component("apexchart", VueApexCharts)

  const store = useStore()
  await store.initAuth()

  router.beforeEach((to, from, next) => {
    if (!store.authIsReady) return

    const requiresAuth = to.matched.some(r => r.meta.requiresAuth)

    if (requiresAuth && !store.isIn) {
      return next('/Login')
    } 
    
    if (to.name === 'Admin' && store.uid !== import.meta.env.VITE_UID) {
      return next(false)
    } 
    
    next()
  })
  
  await router.isReady()
  app.mount('#app')
})()