<template>
    <!-- 容器宽度限制 + 居中 -->
    <nav class="w-full max-w-4xl mx-auto flex items-center justify-between mb-8">
      <!-- Logo + 标题 -->
      <div class="flex items-center space-x-2">
        <!-- ❶ logo 图片 -->
        <img :src="logo" alt="Logo" class="w-7 h-7" />
        <!-- ❷ 文字标题 -->
        <span class="text-xl font-bold text-blue-600 dark:text-blue-400">
          NASA Explorer
        </span>
      </div>
  
      <!-- 导航链接 + Dark/Light 开关 -->
      <div class="flex items-center space-x-4">
        <a href="#" class="nav-link">APOD</a>
        <a href="#" class="nav-link">Asteroids</a>
        <a href="#" class="nav-link">ISS&nbsp;Tracker</a>
  
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
  // ❸ 传入暗/亮状态
  defineProps<{ isDark: boolean }>()
  // ❹ 从 assets 导入 logo
  import logo from '@/assets/logo.png'
  </script>
  
  <style scoped>
  .nav-link {
    @apply text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition;
  }
  </style>
  