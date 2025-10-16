import { ref, onMounted } from 'vue'
import fallbackImage from '../assets/apod_fallback.jpg'

const API_KEY           = 'oYN9Rk9B6Bm2Kp3sfgr1cnZUH8mbxeHvIrpoKV1U'
const MAX_ROLLBACK_DAYS = 5
const NASA_FAIL_KEY     = 'nasa_apod_last_fail'
const FAIL_CACHE_HOURS  = 3
const FETCH_TIMEOUT_MS  = 5000

function localISODate(d: Date = new Date()) {
  const y  = d.getFullYear()
  const m  = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${dd}`
}

function strToLocalDate(ymd: string) {
  const [y, m, d] = ymd.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export type ApodData = {
  title: string
  explanation: string
  url: string
  hdurl?: string
  date: string
  media_type: 'image' | 'video'
  thumbnail_url?: string
  copyright?: string
}

export function useHomePage() {
  const today        = localISODate()
  const selectedDate = ref(today)

  const apod    = ref<ApodData | null>(null)
  const loading = ref(false)
  const error   = ref('')
  const notice  = ref('')

  function nasaRecentlyFailed(): boolean {
    const lastFail = localStorage.getItem(NASA_FAIL_KEY)
    if (!lastFail) return false
    const lastTime = new Date(parseInt(lastFail))
    const now = new Date()
    const diffHours = (now.getTime() - lastTime.getTime()) / (1000 * 60 * 60)
    return diffHours < FAIL_CACHE_HOURS
  }

  function markNasaFail() {
    localStorage.setItem(NASA_FAIL_KEY, Date.now().toString())
  }

  async function fetchApodByDate(dateStr: string): Promise<ApodData> {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateStr}`,
        { signal: controller.signal }
      )
      clearTimeout(timeout)

      if (!res.ok) {
        if (res.status === 504 || res.status === 502 || res.status === 500) throw new Error('NASA_DOWN')
        if (res.status === 404 || res.status === 400) throw new Error('NOT_READY')
        throw new Error('NETWORK')
      }

      return res.json() as Promise<ApodData>
    } catch (err: any) {
      clearTimeout(timeout)
      if (err.name === 'AbortError') throw new Error('TIMEOUT')
      throw err
    }
  }

  function showFallback(reason: string) {
    notice.value = reason
    apod.value = {
      title: 'NASA APOD Temporarily Unavailable',
      explanation:
        "This is a fallback image because NASA's API is temporarily unavailable or timed out. Please check back later.",
      url: fallbackImage,
      date: today,
      media_type: 'image',
    }
    loading.value = false
  }

  async function fetchApod() {
    loading.value = true
    error.value   = ''
    notice.value  = ''
    apod.value    = null

    if (nasaRecentlyFailed()) {
      showFallback('🚧 NASA API recently failed — showing cached fallback image.')
      return
    }

    try {
      const data = await fetchApodByDate(selectedDate.value)
      apod.value = data
      selectedDate.value = data.date
      loading.value = false
      return
    } catch (err: any) {
      if (['NASA_DOWN', 'TIMEOUT'].includes(err.message)) {
        markNasaFail()
        showFallback('🚧 NASA APOD service timeout or unavailable — showing local fallback image.')
        return
      }
      if (err.message !== 'NOT_READY') {
        error.value = 'Network error – please try again later.'
        loading.value = false
        return
      }
    }

    let date = strToLocalDate(selectedDate.value)
    for (let i = 1; i <= MAX_ROLLBACK_DAYS; i++) {
      date.setDate(date.getDate() - 1)
      const dateStr = localISODate(date)
      try {
        const data = await fetchApodByDate(dateStr)
        apod.value = data
        selectedDate.value = data.date
        notice.value = `NASA hasn't published new content — displaying ${data.date}.`
        loading.value = false
        return
      } catch (err: any) {
        if (err.message !== 'NOT_READY') {
          error.value = 'Network error - please try again later.'
          loading.value = false
          return
        }
      }
    }

    showFallback('NASA has not published a new APOD in the last few days.')
  }

  function goToToday() {
    selectedDate.value = today
    fetchApod()
  }

  function shiftDate(offset: number) {
    const newD = strToLocalDate(selectedDate.value)
    newD.setDate(newD.getDate() + offset)
    if (newD > new Date()) return
    selectedDate.value = localISODate(newD)
    fetchApod()
  }

  function prevDay() {
    shiftDate(-1)
  }

  function nextDay() {
    shiftDate(+1)
  }

  onMounted(fetchApod)

  return {
    today,
    selectedDate,
    apod,
    loading,
    error,
    notice,
    fetchApod,
    goToToday,
    prevDay,
    nextDay,
  }
}

