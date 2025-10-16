<template>
  <div class="w-full max-w-screen-xl mx-auto px-4 py-6 flex flex-col items-center space-y-6">
    <h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400">ISS Tracker</h2>

    <div class="text-sm text-gray-600 dark:text-gray-300 text-center">
      <p v-if="loading">Loading ISS position...</p>
      <p v-else-if="error" class="text-red-500">Error: {{ error }}</p>
      <p v-else>
        Latitude: <strong>{{ latitude.toFixed(4) }}</strong> |
        Longitude: <strong>{{ longitude.toFixed(4) }}</strong>
      </p>
    </div>

    <div class="w-full max-w-5xl aspect-[4/3] rounded-xl overflow-hidden border shadow relative">
      <IssMap2D ref="map2DRef" :lat="latitude" :lng="longitude" />
    </div>

    <p class="text-sm text-gray-500 italic">Updated every 5 seconds.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useIssTracker } from '@/composables/useIssTracker'
import IssMap2D from './iss/IssMap2D.vue'

const { latitude, longitude, loading, error } = useIssTracker()
const map2DRef = ref<InstanceType<typeof IssMap2D> | null>(null)

watch([latitude, longitude], async ([lat, lng]) => {
  await nextTick()
  if (map2DRef.value && typeof lat === 'number' && typeof lng === 'number') {
    map2DRef.value.updateISS(lat, lng)
  }
})
</script>

<style src="@/styles/iss.css"></style>
