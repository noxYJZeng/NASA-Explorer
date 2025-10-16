<template>
  <div class="w-full max-w-screen-xl mx-auto px-4 py-6 flex flex-col items-center space-y-6">
    <h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400">ISS Tracker</h2>

    <div class="flex flex-wrap justify-center gap-4">
      <button
        @click="viewMode = '2d'"
        :class="viewMode === '2d' ? 'btn-active' : 'btn-inactive'"
      >
        🗺 2D Map View
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

    <div class="map-container w-full max-w-5xl aspect-[4/3] rounded-xl overflow-hidden border shadow relative">
      <div
        class="absolute inset-0 transition-opacity duration-700"
        :class="viewMode === '2d' ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <IssMap2D ref="map2DRef" :lat="latitude" :lng="longitude" />
      </div>

      <div
        class="absolute inset-0 transition-opacity duration-700"
        :class="viewMode === '3d' ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <IssMap3D :lat="latitude" :lng="longitude" />
      </div>
    </div>

    <p class="text-sm text-gray-500 italic">Updated every 5 seconds.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useIssTracker } from '@/composables/useIssTracker'
import IssMap2D from './iss/IssMap2D.vue'
import IssMap3D from './iss/IssMap3D.vue'

const viewMode = ref<'2d' | '3d'>('2d')
const { latitude, longitude, loading, error } = useIssTracker()
const map2DRef = ref<InstanceType<typeof IssMap2D> | null>(null)

watch([latitude, longitude], async ([lat, lng]) => {
  await nextTick()
  if (map2DRef.value && typeof lat === 'number' && typeof lng === 'number') {
    map2DRef.value.updateISS(lat, lng)
  }
})
</script>

<style scoped>
.map-container {
  position: relative;
}
.btn-active {
  @apply px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition;
}
.btn-inactive {
  @apply px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition;
}
</style>

<style src="@/styles/iss.css"></style>
