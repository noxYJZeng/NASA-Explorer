<template>
  <nav class="w-full max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between mb-6">
    <div class="flex items-center space-x-2 cursor-pointer" @click="redirectToHomeWithLoader">
      <img :src="logo" alt="Logo" class="w-7 h-7" />
      <span class="text-xl font-bold text-blue-600 dark:text-blue-400">
        NASA Explorer
      </span>
    </div>

    <button
      class="sm:hidden text-gray-700 dark:text-white focus:outline-none"
      @click="menuOpen = !menuOpen"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <div
      :class="[
        'w-full sm:w-auto flex-col sm:flex-row sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0',
        menuOpen ? 'flex' : 'hidden sm:flex'
      ]"
    >
      <RouterLink to="/apod" class="nav-link" :class="{ active: $route.path === '/apod' }">APOD</RouterLink>
      <RouterLink to="/asteroids" class="nav-link" :class="{ active: $route.path === '/asteroids' }">Asteroids</RouterLink>
      <RouterLink to="/iss" class="nav-link" :class="{ active: $route.path === '/iss' }">ISS&nbsp;Tracker</RouterLink>

      <button
        @click="$emit('toggle-dark')"
        class="ml-0 sm:ml-4 px-3 py-1 text-sm border rounded
               bg-gray-100 text-black border-gray-400
               dark:bg-gray-800 dark:text-white dark:border-gray-600
               hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {{ isDark ? '🌞 Light' : '🌙 Dark' }}
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
defineProps<{ isDark: boolean }>()
import logo from '@/assets/logo.png'

const $route = useRoute()
const router = useRouter()
const menuOpen = ref(false)

function redirectToHomeWithLoader() {
  sessionStorage.setItem('forceReload', 'true')
  router.push('/apod').then(() => {
    window.location.reload()
  })
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm;
}
.nav-link.active {
  @apply text-blue-600 dark:text-blue-400 font-semibold;
}
</style>
