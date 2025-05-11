<template>
  <div :class="{ dark: isDark }" class="bg-gray-50 dark:bg-gray-900">
    
    <CosmicLoading v-if="!hasLoaded" :fade="!isLoading" class="fixed inset-0 z-[9999]" />

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
import CosmicLoading from '@/components/CosmicLoading.vue'

const isDark = ref(false)
const isLoading = ref(true)
const hasLoaded = ref(false)

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

  setTimeout(() => {
    isLoading.value = false
    setTimeout(() => {
      hasLoaded.value = true
    }, 2200)
  }, 5000)
})
</script>
