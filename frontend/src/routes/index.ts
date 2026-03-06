import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      // Lazy loading component
      component: () => import('../views/LoginView.vue'),
      meta: { requiresGuest: true }
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/TaskView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

// Navigation Guard (Middleware Auth)
router.beforeEach((to, from, next) => {
  // Panggil store auth di dalam guard untuk menghindari error inisialisasi Pinia
  const authStore = useAuthStore()
  
  // Jika route butuh login (requiresAuth) DAN user belum login
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'login' })
  } 
  // Jika route hanya untuk tamu (requiresGuest) DAN user sudah login
  else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next({ name: 'dashboard' })
  } 
  // Lanjutkan perjalanan route
  else {
    next()
  }
})

export default router