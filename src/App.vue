<template>
  <div :class="{ dark: isDark }" class="bg-gray-50 dark:bg-gray-900">
、    
    <div class="min-h-screen text-black dark:text-white transition-colors duration-300 py-12 px-4 flex flex-col items-center">
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
