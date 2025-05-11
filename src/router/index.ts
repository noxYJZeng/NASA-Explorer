// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../components/HomePage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/apod' },
  { path: '/apod', component: HomePage, name: 'APOD' },
  {
    path: '/asteroids',
    component: () => import('../components/AsteroidStats.vue'),
    name: 'Asteroids'
  },
  {
    path: '/iss',
    component: () => import('../components/IssTracker.vue'),
    name: 'ISS'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isHardReload = performance?.navigation?.type === 1
  const isDirectEntry = from.name == null

  if (isHardReload && isDirectEntry && to.path !== '/apod') {
    console.warn(`🔁 Hard refresh on ${to.path} — redirecting to /apod`)
    next('/apod')
  } else {
    next()
  }
})
