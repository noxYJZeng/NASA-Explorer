// src/composables/useHomePage.ts

import { ref, onMounted } from 'vue'

type ApodData = {
  title: string
  explanation: string
  url: string
}

export function useHomePage() {
  const today = new Date().toISOString().split('T')[0]
  const selectedDate = ref(today)
  const apod = ref<ApodData | null>(null)
  const loading = ref(false)
  const error = ref('')

  async function fetchApod() {
    loading.value = true
    error.value = ''
    apod.value = null

    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=oYN9Rk9B6Bm2Kp3sfgr1cnZUH8mbxeHvIrpoKV1U&date=${selectedDate.value}`
      )
      if (!res.ok) throw new Error('Failed to fetch APOD')
      const data = await res.json()

      apod.value = {
        title: data.title,
        explanation: data.explanation,
        url: data.url,
      }
    } catch (err: any) {
      error.value = err.message || 'Failed to load data'
    } finally {
      loading.value = false
    }
  }

  function goToToday() {
    selectedDate.value = today
    fetchApod()
  }

  onMounted(fetchApod)

  return {
    today,
    selectedDate,
    apod,
    loading,
    error,
    fetchApod,
    goToToday,
  }
}
