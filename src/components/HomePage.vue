<template>
  <div class="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow relative text-center">
    <button class="nav-btn left-8" :disabled="loading" @click="onPrev">←</button>
    <button class="nav-btn right-8" :disabled="loading || selectedDate === today" @click="onNext">→</button>

    <h1 class="text-3xl font-bold text-blue-600 dark:text-blue-400">Astronomy Picture of the Day</h1>

    <div class="mt-4">
      <input type="date" v-model="selectedDate" :max="today" @change="fetchApod"
             class="rounded border px-3 py-1 dark:bg-gray-700 dark:text-white" />
      <button class="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              @click="goToToday">Today</button>
    </div>
    <p class="mt-2 text-xs text-gray-400 dark:text-gray-500 italic">
      Content is shown according to local time
    </p>

    <p v-if="notice" class="mt-2 text-yellow-500 italic">{{ notice }}</p>
    <p v-if="loading" class="mt-4 text-gray-500 dark:text-gray-400">Loading…</p>
    <p v-else-if="error" class="mt-4 text-red-500 dark:text-red-400">Error: {{ error }}</p>

    <div v-if="apod && !loading && !error" class="mt-6">
      <h2 class="text-xl font-semibold">{{ apod.title }}</h2>
      <p v-if="apod.copyright" class="text-sm text-gray-400 italic mb-2">© {{ apod.copyright }}</p>

      <img
        v-if="apod.media_type === 'image'"
        ref="mediaEl"
        :src="hoverHd && apod.hdurl ? apod.hdurl : apod.url"
        :alt="apod.title"
        @mouseenter="apod.hdurl && (hoverHd = true)"
        @mouseleave="hoverHd = false"
        @click="openHd"
        @load="scrollToMediaCenter"
        class="mx-auto rounded shadow max-w-md mt-4 cursor-zoom-in transition hover:scale-105 hover:brightness-110"
      />

      <template v-else-if="isYoutube(apod.url)">
        <div v-if="apod.thumbnail_url && !showVideo" class="relative inline-block mt-4">
          <img :src="apod.thumbnail_url" :alt="apod.title"
               class="mx-auto rounded shadow max-w-md" />
          <button @click="showVideo = true"
                  class="absolute inset-0 flex items-center justify-center
                         text-white text-5xl bg-black/40 hover:bg-black/60 rounded">
            ▶
          </button>
        </div>
        <iframe
          v-else
          ref="mediaEl"
          :src="getEmbeddableUrl(apod.url!)"
          @load="scrollToMediaCenter"
          class="mx-auto rounded shadow max-w-md aspect-video mt-4"
          allowfullscreen
        />
      </template>

      <video
        v-else-if="apod.media_type === 'video' && apod.url?.endsWith('.mp4')"
        ref="mediaEl"
        :src="apod.url"
        controls
        @loadedmetadata="scrollToMediaCenter"
        class="mx-auto rounded shadow max-w-md aspect-video mt-4"
      />

      <div v-else class="mt-4">
        <p class="text-sm text-gray-500 italic mb-2">This content cannot be embedded directly.</p>
        <button @click="openFallbackLink"
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          ▶ Open in new tab
        </button>
      </div>

      <p class="mt-4 text-left text-sm text-gray-700 dark:text-gray-200 px-6">
        {{ apod.explanation }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useHomePage } from '../composables/useHomePage'

const {
  today, selectedDate, apod,
  loading, error, notice,
  fetchApod, goToToday,
  prevDay, nextDay,
} = useHomePage()

const showVideo = ref(false)
const hoverHd = ref(false)
const mediaEl = ref<HTMLElement | null>(null)
const shouldScroll = ref(false)

function onPrev() {
  prevDay()
  showVideo.value = false
  shouldScroll.value = true
}

function onNext() {
  nextDay()
  showVideo.value = false
  shouldScroll.value = true
}

function openHd() {
  if (apod.value?.hdurl) {
    window.open(apod.value.hdurl, '_blank')
  }
}

function openFallbackLink() {
  let url = apod.value?.url
  if (!url && apod.value?.date) {
    url = getFallbackUrl(apod.value.date)
  }

  if (url) {
    window.open(url, '_blank')
  } else {
    alert('NASA did not provide a valid content link.')
  }
}

function getFallbackUrl(date: string): string {
  const [y, m, d] = date.split('-')
  return `https://apod.nasa.gov/apod/ap${y.slice(2)}${m}${d}.html`
}

function isYoutube(url: string | undefined): boolean {
  return !!url && (url.includes('youtube.com') || url.includes('youtu.be'))
}

function getEmbeddableUrl(url: string): string {
  if (url.includes('youtube.com/watch')) {
    const id = url.split('v=')[1]?.split('&')[0]
    return `https://www.youtube.com/embed/${id}`
  } else if (url.includes('youtu.be')) {
    return url.replace('youtu.be/', 'youtube.com/embed/')
  }
  return url
}

// 自动滚动逻辑
function scrollToMediaCenter() {
  if (!shouldScroll.value) return
  const el = mediaEl.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const scrollY = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2
  window.scrollTo({ top: scrollY, behavior: 'smooth' })
  shouldScroll.value = false
}

watch(apod, () => {
  showVideo.value = false
  shouldScroll.value = true
})
</script>

<style scoped>
.nav-btn {
  @apply absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700;
}
.left-8 { left: 1rem; }
.right-8 { right: 1rem; }
</style>
