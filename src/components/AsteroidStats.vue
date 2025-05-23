<template>
  <div class="p-4 sm:p-6 text-center max-w-5xl mx-auto overflow-x-hidden">
    <h2 class="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
      Near-Earth Asteroid Statistics
    </h2>

    <div class="mb-6 flex flex-col sm:flex-row justify-center items-center gap-4">
      <label class="text-sm font-medium">Start Date:</label>
      <input
        type="date"
        v-model="startDate"
        class="rounded px-3 py-1 border w-full sm:w-auto dark:bg-gray-800 dark:text-white"
      />

    </div>

    <div class="w-full max-w-3xl mx-auto">
      <canvas ref="chartRef" class="w-full h-[300px] sm:h-[400px]"></canvas>
    </div>
    <p v-if="drawingInProgress" class="text-sm text-yellow-600 mt-2">Drawing in progress...</p>

    <p class="text-sm text-gray-500 mt-4 italic">
      Data from NASA's Near Earth Object Web Service
    </p>
    <p class="text-xs text-gray-400 dark:text-gray-500 italic mt-1">
      Content is shown according to local time
    </p>

    <div class="mt-6 mb-6 w-full flex flex-col items-center gap-2">
      <div class="flex items-center gap-4 justify-center">
        <button @click="changeSelectedDay(-1)" class="text-2xl px-3">←</button>
        <span class="text-base sm:text-lg font-semibold whitespace-nowrap">
          {{ formatDateDisplay(selectedDate) }}
        </span>
        <button @click="changeSelectedDay(1)" class="text-2xl px-3">→</button>
      </div>

      <button
        @click="goToToday"
        class="text-sm mt-2 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300
              dark:bg-gray-700 dark:hover:bg-gray-600 transition whitespace-nowrap"
      >
        📅 Today
      </button>
    </div>


    <h3 class="text-lg sm:text-xl font-semibold mb-4">Details for {{ formatDateDisplay(selectedDate) }}</h3>
    <div class="overflow-x-auto w-full">
      <table class="min-w-[600px] w-full text-sm text-left border-collapse">
        <thead>
          <tr class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <th class="p-2 border">Name</th>
            <th class="p-2 border">Size (m)</th>
            <th class="p-2 border">Miss Distance (km)</th>
            <th class="p-2 border">Velocity (km/h)</th>
            <th class="p-2 border text-center">Hazardous?</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="a in displayList"
            :key="a.name"
            class="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <td class="p-2 border">{{ a.name }}</td>
            <td class="p-2 border">{{ a.size }}</td>
            <td class="p-2 border">{{ a.distance }}</td>
            <td class="p-2 border">{{ a.velocity }}</td>
            <td class="p-2 border text-center">
              <span v-if="a.hazard" class="text-red-500 font-bold">🚨</span>
              <span v-else class="text-green-500">✅</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- NASA Orbit -->
    <h3 class="text-lg sm:text-xl font-semibold my-6">Live NASA Orbit</h3>
    <div class="w-full max-w-5xl mx-auto rounded overflow-hidden border h-[300px] sm:h-[500px]">
      <iframe
        src="https://eyes.nasa.gov/apps/asteroids/"
        width="100%"
        height="100%"
        style="border: none"
        loading="lazy"
        title="NASA Eyes on Asteroids"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue'
import { useAsteroidStats } from '@/composables/useAsteroidStats'

function getTodayDateString(): string {
  const today = new Date()
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
}

function formatDateDisplay(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const startDate = ref(getTodayDateString())
const {
  chartRef,
  fetchChartWindow,
  selectedDate,
  changeSelectedDay,
  displayList,
  goToToday,
  loadTodayOnMount,
  drawingInProgress,
} = useAsteroidStats()

// 加载逻辑（加载 chart 数据 + 设置当前选中日期）
async function load() {
  await fetchChartWindow(startDate.value)
  selectedDate.value = startDate.value
}

onMounted(async () => {
  await load()
})

watch(startDate, async (newDate, oldDate) => {
  if (newDate !== oldDate) {
    await load()
  }
})

watch(chartRef, async (el) => {
  if (el) {
    await nextTick()
    await loadTodayOnMount()
  }
})

defineExpose({ formatDateDisplay, selectedDate, changeSelectedDay, goToToday, displayList, chartRef, drawingInProgress })
</script>
