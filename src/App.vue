<template>
  <div :class="{ dark: isDark }" class="bg-gray-50 dark:bg-gray-900">
    
    <!-- 👇 加载动画层 -->
    <CosmicLoader v-if="isLoading" class="fixed inset-0 z-[9999]" />

    <div
      v-show="!isLoading"
      class="min-h-screen text-black dark:text-white transition-colors duration-300 py-12 px-4 flex flex-col items-center"
    >
      <Navbar :isDark="isDark" @toggle-dark="toggleDarkMode" />
      <RouterView />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import CosmicLoader from '@/components/CosmicLoading.vue'

const isDark = ref(false)
const isLoading = ref(true)

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

  // 👇 模拟页面加载完成（可换成真实加载状态）
  setTimeout(() => {
    isLoading.value = false
  }, 3000) // 可根据资源加载耗时自定义时长
})
</script>
