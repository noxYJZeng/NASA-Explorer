<!-- src/components/HomePage.vue -->
<template>
  <div class="w-full max-w-2xl mx-auto rounded-2xl shadow-lg p-6 text-center bg-white dark:bg-gray-800 transition">
    <h1 class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">🚀 NASA Explorer</h1>
    <p class="text-gray-600 dark:text-gray-300">
      Explore the Astronomy Picture of the Day from NASA's open API.
    </p>
    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
      📅 APOD Date (UTC): {{ selectedDate }}
    </p>
    <p class="text-xs text-gray-400 dark:text-gray-500 italic">
      NASA updates daily at 00:00 UTC (~5 PM PDT / 8 PM EDT)
    </p>

    <input
      type="date"
      :max="today"
      v-model="selectedDate"
      @change="fetchApod"
      class="mt-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded"
    />

    <button
      class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition"
      @click="goToToday"
    >
      Get Today’s Image
    </button>

    <div v-if="loading" class="mt-4 text-gray-500 dark:text-gray-400">Loading...</div>
    <div v-else-if="error" class="mt-4 text-red-500 dark:text-red-400">Error: {{ error }}</div>

    <div v-if="apod" class="mt-6">
      <h2 class="text-2xl font-semibold mb-2">{{ apod.title }}</h2>
      <img :src="apod.url" :alt="apod.title" class="mx-auto rounded shadow max-w-md" />
      <p class="mt-4 text-left text-sm text-gray-700 dark:text-gray-200 px-6">
        {{ apod.explanation }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomePage } from '@/composables/useHomePage'
const {
  today,
  selectedDate,
  apod,
  loading,
  error,
  fetchApod,
  goToToday,
} = useHomePage()
</script>
