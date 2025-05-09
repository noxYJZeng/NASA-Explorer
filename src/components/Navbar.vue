<template>
    <nav class="w-full max-w-4xl mx-auto flex items-center justify-between mb-8">
      <!-- Logo + 标题 -->
      <div class="flex items-center space-x-2">
        <img :src="logo" alt="Logo" class="w-7 h-7" />
        <span class="text-xl font-bold text-blue-600 dark:text-blue-400">
          NASA Explorer
        </span>
      </div>
  
      <!-- 路由导航链接 + 主题切换 -->
      <div class="flex items-center space-x-4">
        <RouterLink to="/apod" class="nav-link" :class="{ active: $route.path === '/apod' }">APOD</RouterLink>
        <RouterLink to="/asteroids" class="nav-link" :class="{ active: $route.path === '/asteroids' }">Asteroids</RouterLink>
        <RouterLink to="/iss" class="nav-link" :class="{ active: $route.path === '/iss' }">ISS&nbsp;Tracker</RouterLink>
  
        <!-- 🌞 / 🌙 开关按钮 -->
        <button
          @click="$emit('toggle-dark')"
          class="ml-4 px-3 py-1 text-sm border rounded
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
  import { useRoute, RouterLink } from 'vue-router'
  defineProps<{ isDark: boolean }>()
  import logo from '@/assets/logo.png'
  
  const $route = useRoute()
  </script>
  
  <style scoped>
  .nav-link {
    @apply text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition;
  }
  
  .nav-link.active {
    @apply text-blue-600 dark:text-blue-400 font-semibold;
  }
  </style>
  