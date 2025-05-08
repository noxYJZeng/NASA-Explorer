<!-- src/App.vue -->
<template>
  <div :class="{ dark: isDark }">
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 py-12 px-4">
      <div class="flex justify-end mb-6 max-w-4xl mx-auto">
        <button
          @click="toggleDarkMode"
          class="px-3 py-1 text-sm border rounded bg-gray-150 dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {{ isDark ? '🌞 Light' : '🌙 Dark' }}
        </button>
      </div>

      <HomePage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HomePage from './components/HomePage.vue'

const isDark = ref(false)

function toggleDarkMode() {
  isDark.value = !isDark.value
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

onMounted(() => {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>
