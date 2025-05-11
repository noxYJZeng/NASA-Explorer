<template>
  <div
    ref="card"
    class="w-full max-w-2xl mx-auto rounded-2xl shadow-lg p-6 text-center
           bg-white dark:bg-gray-800 transition relative">

    <button
      ref="prevBtn"
      class="nav-btn left-8"
      :disabled="loading"
      @click="onPrev">
      <svg viewBox="0 0 24 24" class="w-5 h-5 fill-white -translate-x-[2px]">
        <polygon points="15,6 9,12 15,18"/>
      </svg>
    </button>

    <button
      ref="nextBtn"
      class="nav-btn right-8"
      :disabled="loading || selectedDate === today"
      @click="onNext">
      <svg viewBox="0 0 24 24" class="w-5 h-5 fill-white translate-x-[2px]">
        <polygon points="9,6 15,12 9,18"/>
      </svg>
    </button>

    <h1 class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
      Astronomy Picture of the Day
    </h1>
    <p class="text-gray-600 dark:text-gray-300">
      Explore the Astronomy Picture of the Day from NASA's open API.
    </p>
    <p class="text-xs text-gray-400 dark:text-gray-500 italic">
      Content is shown according to local time
  </p>

    <input
      type="date"
      :max="today"
      v-model="selectedDate"
      @change="fetchApod"
      class="mt-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700
             text-black dark:text-white px-3 py-1 rounded" />

    <button
      class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700
             text-white rounded transition"
      @click="goToToday">
      Get Today's Image
    </button>

    <div v-if="notice" class="mt-4 text-yellow-600 dark:text-yellow-400 text-sm italic">
      {{ notice }}
    </div>
    <div v-if="loading" class="mt-4 text-gray-500 dark:text-gray-400">Loading…</div>
    <div v-else-if="error" class="mt-4 text-red-500 dark:text-red-400">Error: {{ error }}</div>

    <div v-if="apod" class="mt-6">
      <h2 class="text-2xl font-semibold mb-2">{{ apod.title }}</h2>
      <p v-if="apod.copyright" class="mb-2 text-sm text-gray-500 dark:text-gray-400 italic">
        © {{ apod.copyright }}
      </p>

      <div v-if="apod.media_type === 'image'" class="mx-auto max-w-md">
        <img
          ref="imageEl"
          :src="hoverHd && apod.hdurl ? apod.hdurl : apod.url"
          :alt="apod.title"
          @load="onImageLoad"
          class="w-full rounded shadow transition duration-300
                 hover:scale-105 hover:brightness-110 cursor-zoom-in"
          @mouseenter="apod.hdurl && (hoverHd = true)"
          @mouseleave="hoverHd = false"
          @click="openHd" />
        <p v-if="apod.hdurl"
           class="mt-3 text-xs text-gray-400 dark:text-gray-500 italic">
          Click to open in new tab
        </p>
      </div>

      <template v-else-if="apod.media_type === 'video'">
        <div v-if="apod.thumbnail_url && !showVideo" class="relative inline-block">
          <img :src="apod.thumbnail_url"
               :alt="apod.title"
               class="mx-auto rounded shadow max-w-md" />
          <button @click="showVideo = true"
                  class="absolute inset-0 flex items-center justify-center
                         text-white text-5xl bg-black/40 hover:bg-black/60 rounded">
            ▶
          </button>
        </div>
        <iframe v-if="!apod.thumbnail_url || showVideo"
                :src="apod.url"
                class="mx-auto rounded shadow max-w-md aspect-video"
                allowfullscreen></iframe>
      </template>

      <p class="mt-4 text-left text-sm text-gray-700 dark:text-gray-200 px-6">
        {{ apod.explanation }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHomePage } from '../composables/useHomePage'

const {
  today, selectedDate, apod,
  loading, error, notice,
  fetchApod, goToToday,
  prevDay, nextDay,
} = useHomePage()

const hoverHd = ref(false)
const showVideo = ref(false)

const imageEl = ref<HTMLImageElement | null>(null)
const shouldScrollToImage = ref(false)

function scrollToImageCenter() {
  const el = imageEl.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const scrollY = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2
  window.scrollTo({ top: scrollY, behavior: 'smooth' })
  shouldScrollToImage.value = false
}

function onImageLoad() {
  if (shouldScrollToImage.value) {
    scrollToImageCenter()
  }
}

function onPrev() {
  prevDay()
  shouldScrollToImage.value = true
}

function onNext() {
  nextDay()
  shouldScrollToImage.value = true
}

function openHd() {
  if (apod.value?.hdurl) {
    window.open(apod.value.hdurl, '_blank')
  }
}
</script>

<style scoped>
.nav-btn {
  @apply absolute top-1/2 -translate-y-1/2
          w-10 h-10 flex items-center justify-center
          bg-blue-500 dark:bg-blue-600 rounded-full shadow
          hover:bg-blue-600 dark:hover:bg-blue-700
          text-white transition
          disabled:opacity-30;
}

.left-8  { left: 2rem; }
.right-8 { right: 2rem; }

@media (max-width: 450px) {
  .left-8  { left: 1rem; }
  .right-8 { right: 1rem; }
}
</style>
