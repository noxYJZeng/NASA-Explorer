<template>
  <div id="issMapWrapper" class="relative w-full h-full">
    <!-- 地图 -->
    <div id="maplibreContainer" class="absolute inset-0 rounded-xl overflow-hidden"></div>

    <!-- 控制按钮 -->
    <button
      class="absolute top-2 right-2 z-[9999] bg-white/90 text-black px-3 py-1 rounded-lg shadow hover:bg-gray-200 transition"
      @click="toggleLock"
    >
      {{ followISS ? '🕹 Unlock View' : '📡 Lock to ISS' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, defineExpose } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import * as SunCalc from 'suncalc'

const props = defineProps<{ lat: number; lng: number }>()

let map: maplibregl.Map | null = null
let issMarker: maplibregl.Marker | null = null
let nightLayerId = 'night-layer'
const mapReady = ref(false)
const followISS = ref(true)

onMounted(() => {
  map = new maplibregl.Map({
    container: 'maplibreContainer',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [props.lng || 0, props.lat || 0],
    zoom: 3.5,
    interactive: true,
    fadeDuration: 0,
    attributionControl: false,
  })

  map.once('load', () => {
    mapReady.value = true
    console.log('✅ Map ready')

    const el = document.createElement('div')
    el.innerHTML = '🛰'
    el.style.fontSize = '28px'
    el.style.transform = 'translate(-50%, -50%)'
    el.style.userSelect = 'none'
    el.style.pointerEvents = 'none'

    issMarker = new maplibregl.Marker({ element: el })
      .setLngLat([props.lng || 0, props.lat || 0])
      .addTo(map)

    updateNightLayer()

    setInterval(() => {
      updateNightLayer()
    }, 60 * 1000)
  })
})

onBeforeUnmount(() => {
  if (issMarker) issMarker.remove()
  if (map) map.remove()
})

defineExpose({
  updateISS(lat: number, lng: number) {
    if (!mapReady.value || !issMarker || !map) return
    issMarker.setLngLat([lng, lat])

    if (followISS.value) {
      map.easeTo({
        center: [lng, lat],
        duration: 800,
        easing: (t) => t,
      })
    }
  },
})

function toggleLock() {
  followISS.value = !followISS.value
  if (followISS.value && map && issMarker) {
    const pos = issMarker.getLngLat()
    map.easeTo({
      center: [pos.lng, pos.lat],
      duration: 800,
    })
  }
}

function updateNightLayer() {
  if (!map) return

  const now = new Date()
  const sunPos = SunCalc.getPosition(now, 0, 0)
  const subsolarLat = (sunPos.altitude * 180) / Math.PI
  const subsolarLng = ((sunPos.azimuth * 180) / Math.PI + 180) % 360 - 180

  const coords = []
  for (let i = -180; i <= 180; i += 1) {
    const lat = 90 - (Math.acos(Math.cos((i - subsolarLng) * Math.PI / 180) * Math.cos(subsolarLat * Math.PI / 180)) * 180) / Math.PI
    coords.push([i, lat])
  }
  const polygon = [
    [
      [-180, -90],
      ...coords,
      [180, -90],
      [-180, -90],
    ],
  ]

  if (map.getLayer(nightLayerId)) {
    map.getSource(nightLayerId).setData({
      type: 'Feature',
      geometry: { type: 'Polygon', coordinates: polygon },
    })
  } else {
    map.addSource(nightLayerId, {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: { type: 'Polygon', coordinates: polygon },
      },
    })
    map.addLayer({
      id: nightLayerId,
      type: 'fill',
      source: nightLayerId,
      layout: {},
      paint: {
        'fill-color': '#000000',
        'fill-opacity': 0.4,
      },
    })
  }
}
</script>

<style scoped>
#issMapWrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background: black;
  border-radius: 12px;
}

#maplibreContainer {
  width: 100%;
  height: 100%;
  z-index: 0;
}

button {
  font-size: 14px;
}
</style>
