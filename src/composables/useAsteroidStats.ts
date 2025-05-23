import { ref, nextTick, onMounted, onBeforeUnmount, watch } from 'vue'
import Chart from 'chart.js/auto'

export interface AsteroidInfo {
  name: string
  size: number
  distance: number
  velocity: number
  hazard: boolean
}

const API_KEY = 'oYN9Rk9B6Bm2Kp3sfgr1cnZUH8mbxeHvIrpoKV1U'

export function useAsteroidStats() {
  const chartRef = ref<HTMLCanvasElement | null>(null)
  const chartInstance = ref<Chart | null>(null)

  const allAsteroids = ref<Record<string, AsteroidInfo[]>>({})
  const chartLabels = ref<string[]>([])
  const selectedDate = ref<string>('')
  const displayList = ref<AsteroidInfo[]>([])
  const chartWindowStart = ref<string>('')
  const drawingInProgress = ref(false)

  function format(date: Date): string {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }

  function parseDate(dateStr: string): Date {
    const [y, m, d] = dateStr.split('-').map(Number)
    return new Date(y, m - 1, d)
  }

  function buildLabelArray(start: string): string[] {
    const arr: string[] = []
    const d = parseDate(start)
    for (let i = 0; i < 7; i++) {
      arr.push(format(d))
      d.setDate(d.getDate() + 1)
    }
    return arr
  }

  function updateDisplay() {
    displayList.value = allAsteroids.value[selectedDate.value] ?? []
  }

  let chartDrawing = false

  function updateChartFromDataOnly(force = false) {
    updateDisplay()

    chartDrawing = true
    drawingInProgress.value = false

    nextTick(() => {
      const canvas = chartRef.value
      if (!canvas) {
        console.warn('Canvas element is null')
        chartDrawing = false
        return
      }

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        console.warn('Canvas context is null')
        chartDrawing = false
        return
      }

      const normalizedSelected = format(parseDate(selectedDate.value))
      const selectedIndex = chartLabels.value.findIndex(
        date => format(parseDate(date)) === normalizedSelected
      )

      if (selectedIndex === -1 && !force) {
        chartDrawing = false
        return
      }

      const labels = [...chartLabels.value]
      const totals = labels.map(date => allAsteroids.value[date]?.length ?? 0)
      const hazardous = labels.map(date =>
        (allAsteroids.value[date] ?? []).filter(a => a.hazard).length
      )

      const bgBase = 'rgba(59,130,246,0.5)'
      const bgHighlight = 'rgba(59,130,246,1)'
      const hazardBase = 'rgba(239,68,68,0.5)'
      const hazardHighlight = 'rgba(239,68,68,1)'

      if (chartInstance.value) {
        try {
          chartInstance.value.stop()
        } catch (e) {
          console.warn('Chart stop error:', e)
        }
        chartInstance.value.destroy()
        chartInstance.value = null
      }

      const freshCtx = canvas.getContext('2d')
      if (!freshCtx) {
        console.warn('Fresh canvas context is null. Skipping chart creation.')
        chartDrawing = false
        return
      }

      chartInstance.value = new Chart(freshCtx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Total',
              data: [...totals],
              backgroundColor: labels.map((_, i) =>
                i === selectedIndex ? bgHighlight : bgBase
              )
            },
            {
              label: 'Hazardous',
              data: [...hazardous],
              backgroundColor: labels.map((_, i) =>
                i === selectedIndex ? hazardHighlight : hazardBase
              )
            }
          ]
        },
        options: {
          responsive: true,
          animation: false,
          plugins: {
            tooltip: { mode: 'index' }
          },
          onClick: function (_evt, elements) {
            if (elements.length > 0) {
              const index = elements[0].index
              const date = labels[index]
              if (date) {
                setTimeout(() => {
                  selectedDate.value = format(parseDate(date))
                  updateChartFromDataOnly(true)
                }, 0)
              }
            }
          }
        },
        plugins: [{
          id: 'unlockAfterRender',
          afterRender: () => {
            chartDrawing = false
          }
        }]
      })
    })
  }

  async function fetchChartWindow(start: string, end?: string, focusDate?: string) {
    if (!end) {
      const d = parseDate(start)
      d.setDate(d.getDate() + 6)
      end = format(d)
    }

    const url =
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${API_KEY}`

    const res = await fetch(url)
    const json = await res.json()

    const days: Record<string, AsteroidInfo[]> = {}
    Object.keys(json.near_earth_objects).forEach((day) => {
      days[day] = json.near_earth_objects[day].map((neo: any) => ({
        name: neo.name,
        size: Math.round(
          (neo.estimated_diameter.meters.estimated_diameter_min +
            neo.estimated_diameter.meters.estimated_diameter_max) / 2
        ),
        distance: Math.round(
          neo.close_approach_data[0].miss_distance.kilometers
        ),
        velocity: Math.round(
          neo.close_approach_data[0].relative_velocity.kilometers_per_hour
        ),
        hazard: neo.is_potentially_hazardous_asteroid
      }))
    })

    allAsteroids.value = { ...allAsteroids.value, ...days }
    chartWindowStart.value = start
    chartLabels.value = buildLabelArray(start)

    const normalizedFocus = focusDate ? format(parseDate(focusDate)) : ''

    if (focusDate && chartLabels.value.includes(normalizedFocus)) {
      selectedDate.value = normalizedFocus
    } else {
      selectedDate.value = chartLabels.value[0] || ''
    }

    updateChartFromDataOnly()
  }

  async function changeSelectedDay(offset: number) {
    const cur = parseDate(selectedDate.value)
    cur.setDate(cur.getDate() + offset)
    const newDate = format(cur)

    if (chartLabels.value.length === 0) {
      await fetchChartWindow(newDate, undefined, newDate)
      return
    }

    const first = chartLabels.value[0]
    const last = chartLabels.value[chartLabels.value.length - 1]

    if (newDate > last) {
      await fetchChartWindow(newDate, undefined, newDate)
      return
    }

    if (newDate < first) {
      const end = newDate
      const startDt = parseDate(end)
      startDt.setDate(startDt.getDate() - 6)
      await fetchChartWindow(format(startDt), end, newDate)
      return
    }

    if (selectedDate.value === newDate) {
      updateChartFromDataOnly(true)
    } else {
      selectedDate.value = newDate
      updateChartFromDataOnly()
    }
  }

  async function loadTodayOnMount() {
    const todayStr = format(new Date())
    await nextTick()
    await fetchChartWindow(todayStr)
    selectedDate.value = todayStr
    setTimeout(() => {
      updateChartFromDataOnly()
    }, 0)
  }

  async function goToToday() {
    const todayStr = format(new Date())
    if (!chartLabels.value.includes(todayStr)) {
      await fetchChartWindow(todayStr, undefined, todayStr)
    } else {
      selectedDate.value = todayStr
      updateChartFromDataOnly()
    }
  }

  // ✅ 自动更新图表：监听 selectedDate 的变化
  watch(selectedDate, async (newDate) => {
    if (!newDate) return
    const inRange = chartLabels.value.includes(newDate)
    if (inRange) {
      updateChartFromDataOnly()
    } else {
      await fetchChartWindow(newDate, undefined, newDate)
    }
  })

  let resizeListener: (() => void) | null = null

  onMounted(() => {
    resizeListener = () => {
      if (chartInstance.value) {
        chartInstance.value.resize()
      }
    }
    window.addEventListener('resize', resizeListener)
  })

  onBeforeUnmount(() => {
    if (resizeListener) {
      window.removeEventListener('resize', resizeListener)
    }
  })

  return {
    chartRef,
    chartInstance,
    allAsteroids,
    chartLabels,
    selectedDate,
    displayList,
    drawingInProgress,
    goToToday,
    loadTodayOnMount,
    format,
    changeSelectedDay,
    prevDay: () => changeSelectedDay(-1),
    nextDay: () => changeSelectedDay(1),
    fetchChartWindow,
  }
}
