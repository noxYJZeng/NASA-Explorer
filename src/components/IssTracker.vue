<template>
  <div class="w-full max-w-screen-xl mx-auto px-4 py-6 flex flex-col items-center space-y-6">
    <h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400">ISS Tracker</h2>

    <div class="flex flex-wrap justify-center gap-4">
      <button
        @click="viewMode = '2d'"
        :class="viewMode === '2d' ? 'btn-active' : 'btn-inactive'"
      >
        🗘 2D Map View
      </button>
      <button
        @click="viewMode = '3d'"
        :class="viewMode === '3d' ? 'btn-active' : 'btn-inactive'"
      >
        🌍 3D Globe View
      </button>
    </div>

    <div class="text-sm text-gray-600 dark:text-gray-300 text-center">
      <p v-if="loading">Loading ISS position...</p>
      <p v-else-if="error" class="text-red-500">Error: {{ error }}</p>
      <p v-else>
        Latitude: <strong>{{ latitude.toFixed(4) }}</strong> |
        Longitude: <strong>{{ longitude.toFixed(4) }}</strong>
      </p>
    </div>

    <div class="w-full max-w-5xl aspect-[4/3] rounded-xl overflow-hidden border shadow">
      <IssMap2D
        v-if="viewMode === '2d'"
        :lat="latitude"
        :lng="longitude"
        v-show="!loading && !error"
      />
      <IssMap3D
        v-if="viewMode === '3d'"
        :lat="latitude"
        :lng="longitude"
        v-show="!loading && !error"
      />
    </div>

    <p class="text-sm text-gray-500 italic">Updated every 5 seconds.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIssTracker } from '@/composables/useIssTracker'
import IssMap2D from './iss/IssMap2D.vue'
import IssMap3D from './iss/IssMap3D.vue'

const viewMode = ref<'2d' | '3d'>('3d')
const { latitude, longitude, loading, error } = useIssTracker()
</script>

<style src="@/styles/iss.css"></style>
