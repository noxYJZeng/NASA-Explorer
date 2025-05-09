<template>
  <div :class="{ dark: isDark }">
    <!-- 整页背景 & 上下留白 -->
    <div
      class="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white
             transition-colors duration-300 py-12 px-4 flex flex-col items-center"
    >
      <!-- ⭐ 顶部导航栏 -->
      <Navbar :isDark="isDark" @toggle-dark="toggleDarkMode" />

      <!-- ⭐ 页面内容（后续换成 <RouterView />） -->
      <HomePage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar   from '@/components/Navbar.vue'
import HomePage from '@/components/HomePage.vue'   /* 先渲染主页卡片 */

const isDark = ref(false)

function applyDark(value: boolean) {
  document.documentElement.classList.toggle('dark', value)
}
function toggleDarkMode() {
  isDark.value = !isDark.value
  applyDark(isDark.value)
}

/* 默认跟随系统；若只想默认 Light 就把 isDark.value = false */
onMounted(() => {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyDark(isDark.value)
})
</script>
