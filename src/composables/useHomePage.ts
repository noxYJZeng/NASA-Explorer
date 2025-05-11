import { ref, onMounted } from 'vue'

const API_KEY            = 'oYN9Rk9B6Bm2Kp3sfgr1cnZUH8mbxeHvIrpoKV1U'
const MAX_ROLLBACK_DAYS  = 5

function localISODate(d: Date = new Date()) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
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
  const today         = localISODate()
  const selectedDate  = ref(today)

  const apod          = ref<ApodData | null>(null)
  const loading       = ref(false)
  const error         = ref('')
  const notice        = ref('')

  async function fetchApodByDate(dateStr: string): Promise<ApodData> {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateStr}`
    )
    if (!res.ok) {
      if (res.status === 404 || res.status === 400) throw new Error('NOT_READY')
      throw new Error('NETWORK')
    }
    return res.json() as Promise<ApodData>
  }

  async function fetchApod() {
    loading.value = true
    error.value   = ''
    notice.value  = ''
    apod.value    = null

    try {
      const data = await fetchApodByDate(selectedDate.value)
      apod.value = data
      selectedDate.value = data.date
      loading.value = false
      return
    } catch (err: any) {
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
        notice.value =
          `Content is shown according to NASA's official publish time — displaying ${data.date}.`
        loading.value = false
        return
      } catch (err: any) {
        if (err.message !== 'NOT_READY') {
          error.value = 'Network error – please try again later.'
          loading.value = false
          return
        }
      }
    }

    /* ③ 连续 N 天无数据 */
    error.value = 'NASA has not published a new APOD in the last few days.'
    loading.value = false
  }

  function goToToday() {
    selectedDate.value = today
    fetchApod()
  }

  onMounted(fetchApod)
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
