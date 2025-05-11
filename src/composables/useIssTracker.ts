import { ref, onMounted, onUnmounted } from 'vue'

export function useIssTracker() {
  const latitude = ref(0)
  const longitude = ref(0)
  const loading = ref(true)
  const error = ref('')

  let intervalId: number | null = null

  const fetchPosition = async () => {
    try {
      loading.value = true
      const res = await fetch('https://api.open-notify.org/iss-now.json')
      const data = await res.json()

      if (data.message !== 'success') {
        throw new Error('API response error')
      }

      latitude.value = parseFloat(data.iss_position.latitude)
      longitude.value = parseFloat(data.iss_position.longitude)
      error.value = ''
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch ISS position.'
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchPosition()
    intervalId = window.setInterval(fetchPosition, 5000) // 每 5 秒更新一次
  })

  onUnmounted(() => {
    if (intervalId !== null) {
      clearInterval(intervalId)
    }
  })

  return {
    latitude,
    longitude,
    loading,
    error,
  }
}
