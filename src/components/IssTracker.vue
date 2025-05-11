<template>
  <div class="p-6 flex flex-col items-center space-y-6">
    <!-- 标题 -->
    <h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">ISS Tracker</h2>

    <!-- 切换按钮 -->
    <div class="flex gap-4">
      <button
        @click="viewMode = '2d'"
        :class="viewMode === '2d' ? activeBtn : inactiveBtn"
      >
        🗺 2D Map View
      </button>
      <button
        @click="viewMode = '3d'"
        :class="viewMode === '3d' ? activeBtn : inactiveBtn"
      >
        🌍 3D Globe View
      </button>
    </div>

    <!-- 经纬度显示 -->
    <div class="text-sm text-gray-600 dark:text-gray-300">
      <p v-if="loading">Loading ISS position...</p>
      <p v-else-if="error" class="text-red-500">Error: {{ error }}</p>
      <p v-else>
        Latitude: <strong>{{ latitude.toFixed(4) }}</strong> |
        Longitude: <strong>{{ longitude.toFixed(4) }}</strong>
      </p>
    </div>

    <!-- 地图区域 -->
    <div class="relative w-[800px] h-[500px] rounded-xl overflow-hidden border shadow">
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
  </div>
  <p class="text-s text-gray-500 italic">Updated every 5 seconds.</p>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIssTracker } from '@/composables/useIssTracker'
import IssMap2D from './iss/IssMap2D.vue'
import IssMap3D from './iss/IssMap3D.vue'

const viewMode = ref<'2d' | '3d'>('3d')

const { latitude, longitude, loading, error } = useIssTracker()

const activeBtn =
  'px-4 py-1 rounded bg-blue-600 text-white font-semibold shadow transition'
const inactiveBtn =
  'px-4 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition'
</script>


<style scoped>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
