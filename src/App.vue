<template>
  <div :class="{ dark: isDark }" class="bg-gray-50 dark:bg-gray-900">
    <CosmicLoading v-if="!hasLoaded" :fade="!isLoading" class="fixed inset-0 z-[9999]" />

    <div
      v-show="!isLoading"
      class="min-h-screen text-black dark:text-white transition-colors duration-300 py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <Navbar :isDark="isDark" @toggle-dark="toggleDarkMode" />

      <!-- 🛰️ NASA 官方公告栏 -->
      <transition name="fade">
        <div
          v-if="showAnnouncement"
          class="w-full max-w-6xl text-center bg-gradient-to-r from-yellow-100 to-yellow-300 dark:from-yellow-700 dark:to-yellow-800 text-gray-800 dark:text-white font-medium py-3 px-4 mb-4 rounded-xl border border-yellow-400 dark:border-yellow-500 flex items-center justify-center gap-2 shadow-md"
        >
          <span>🛰️ NASA Official Notice:</span>
          <span>Due to the U.S. government shutdown, APOD updates are temporarily suspended.</span>
          <button
            class="ml-3 text-gray-600 dark:text-gray-200 hover:text-black dark:hover:text-yellow-200 font-bold"
            @click="dismissAnnouncement"
            title="Close"
          >
            ✖
          </button>
        </div>
      </transition>

      <div class="w-full max-w-6xl mx-auto">
        <RouterView />
      </div>
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
const showAnnouncement = ref(true)

function applyDark(value: boolean) {
  document.documentElement.classList.toggle('dark', value)
}

function toggleDarkMode() {
  isDark.value = !isDark.value
  applyDark(isDark.value)
}

function dismissAnnouncement() {
  showAnnouncement.value = false
  localStorage.setItem('hide_nasa_notice', '1')
}

onMounted(() => {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyDark(isDark.value)

  if (localStorage.getItem('hide_nasa_notice') === '1') {
    showAnnouncement.value = false
  }

  setTimeout(() => {
    isLoading.value = false
    setTimeout(() => {
      hasLoaded.value = true
    }, 2200)
  }, 5000)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

