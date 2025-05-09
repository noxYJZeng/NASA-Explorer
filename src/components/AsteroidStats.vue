<template>
    <div class="p-6 text-center">
      <h2 class="text-2xl font-bold mb-4">Asteroid Statistics</h2>
  
      <!-- 日期选择器 -->
      <div class="mb-6 flex justify-center gap-4 items-center">
        <label class="text-sm font-medium">Start Date:</label>
        <input
          type="date"
          v-model="startDate"
          class="rounded px-3 py-1 border dark:bg-gray-800 dark:text-white"
        />
        <button
          @click="load"
          class="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
        >
          Load
        </button>
      </div>
  
      <!-- 图表区域 -->
      <canvas ref="chartRef" class="max-w-2xl mx-auto"></canvas>
  
      <!-- ✅ 正在绘图提示 -->
      <p v-if="drawingInProgress" class="text-sm text-yellow-600 mt-2">
        Drawing in progress...
      </p>
  
      <!-- 数据来源说明 -->
      <p class="text-sm text-gray-500 mt-2 italic">
        All asteroid data is based on NASA's predicted trajectories and close approach calculations.
      </p>
  
      <!-- 日期切换 + Today 按钮 -->
      <div class="flex justify-center items-center gap-6 my-6">
        <button @click="changeSelectedDay(-1)" class="text-2xl px-3">←</button>
        <span class="text-lg font-semibold">{{ selectedDate }}</span>
        <button @click="changeSelectedDay(1)" class="text-2xl px-3">→</button>
        <button
          @click="goToToday"
          class="text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
        >
          📅 Today
        </button>
      </div>
  
      <!-- 表格标题 -->
      <h3 class="text-xl font-semibold mb-4">Details for {{ selectedDate }}</h3>
  
      <!-- 小行星表格 -->
      <div class="overflow-x-auto max-w-5xl mx-auto">
        <table class="w-full text-sm text-left border-collapse">
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
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useAsteroidStats } from '@/composables/useAsteroidStats'
  
  const {
    chartRef,
    fetchChartWindow,
    selectedDate,
    changeSelectedDay,
    displayList,
    format,
    goToToday,
    loadTodayOnMount,
    drawingInProgress, // ✅ 监控绘制状态
  } = useAsteroidStats()
  
  const startDate = ref(format(new Date()))
  
  /** Load 按钮逻辑：加载自定义 startDate */
  async function load() {
    await fetchChartWindow(startDate.value)
    selectedDate.value = startDate.value
  }
  
  /** 页面加载时自动加载今天窗口 */
  onMounted(loadTodayOnMount)
  </script>
  