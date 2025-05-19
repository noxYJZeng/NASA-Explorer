<template>
  <div
    ref="card"
    class="w-full max-w-2xl mx-auto rounded-2xl shadow-lg p-6 text-center
           bg-white dark:bg-gray-800 transition relative">

    <button class="nav-btn left-8" :disabled="loading" @click="onPrev">
      <svg viewBox="0 0 24 24" class="w-5 h-5 fill-white -translate-x-[2px]">
        <polygon points="15,6 9,12 15,18"/>
      </svg>
    </button>
    <button class="nav-btn right-8" :disabled="loading || selectedDate === today" @click="onNext">
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

      <!-- 视频 -->
      <template v-else-if="apod.media_type === 'video'">
        <div v-if="apod.thumbnail_url && isYoutube(apod.url) && !showVideo" class="relative inline-block">
          <img :src="apod.thumbnail_url"
               :alt="apod.title"
               class="mx-auto rounded shadow max-w-md" />
          <button @click="showVideo = true"
                  class="absolute inset-0 flex items-center justify-center
                         text-white text-5xl bg-black/40 hover:bg-black/60 rounded">
            ▶
          </button>
        </div>

        <template v-if="showVideo || !isYoutube(apod.url)">
          <iframe
            v-if="isYoutube(apod.url)"
            :src="getEmbeddableUrl(apod.url)"
            class="mx-auto rounded shadow max-w-md aspect-video"
            allowfullscreen>
          </iframe>

          <video
            v-else-if="apod.url?.endsWith('.mp4')"
            :src="apod.url"
            controls
            class="mx-auto rounded shadow max-w-md aspect-video">
            Your browser does not support the video tag.
          </video>

          <button v-else @click="openFallbackLink"
                  class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            ▶ Open content in new tab
          </button>
        </template>
      </template>

      <!-- fallback -->
      <template v-else>
        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
          NASA did not provide a direct media URL. Try opening the fallback page:
        </p>
        <button @click="openFallbackLink"
                class="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          ▶ Open fallback APOD page
        </button>
      </template>

      <p class="mt-4 text-left text-sm text-gray-700 dark:text-gray-200 px-6">
        {{ apod.explanation }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useHomePage } from '../composables/useHomePage'
import { isYoutube, getEmbeddableUrl } from '../utils/mediaUtils'

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
  showVideo.value = false
}

function onNext() {
  nextDay()
  shouldScrollToImage.value = true
  showVideo.value = false
}

function openHd() {
  if (apod.value?.hdurl) {
    window.open(apod.value.hdurl, '_blank')
  }
}

function openFallbackLink() {
  let link = apod.value?.url
  if (!link && apod.value?.date) {
    link = getDefaultApodHtmlUrl(apod.value.date)
    console.log('[Fallback] Constructed APOD URL:', link)
  }
  if (link) {
    window.open(link, '_blank')
  } else {
    alert("NASA did not provide a usable content link.")
  }
}

function getDefaultApodHtmlUrl(date: string): string {
  const [year, month, day] = date.split('-')
  return `https://apod.nasa.gov/apod/ap${String(year).slice(2)}${month}${day}.html`
}

watch(apod, (val) => {
  if (val) console.log('[DEBUG] APOD:', val)
})
</script>

<!-- 🔗 引入外部样式 -->
<style src="../styles/apod.css"></style>
