<template>
  <div :class="{ dark: isDark }">
    <div
      class="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white
             transition-colors duration-300 py-12 px-4 flex flex-col items-center"
    >
      <!-- ⭐ 顶部导航栏 -->
      <Navbar :isDark="isDark" @toggle-dark="toggleDarkMode" />

      <!-- ⭐ 页面内容动态切换 -->
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

const isDark = ref(false)

function applyDark(value: boolean) {
  document.documentElement.classList.toggle('dark', value)
}
function toggleDarkMode() {
  isDark.value = !isDark.value
  applyDark(isDark.value)
}

onMounted(() => {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyDark(isDark.value)
})
</script>
