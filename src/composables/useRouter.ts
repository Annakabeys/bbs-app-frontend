import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRouter = defineStore('router', () => {
  const status = ref(false)
  const routes = [
    {
      name: 'Login',
      path: '/login',

    },
    {
      name: 'Register',
      path: '/register'
    },
    {
      name: 'Home',
      path: '/home',
      component: () => import('../pages/HomePage.vue')
    }
  ]

  return {
    routes,
    status
  }
})
