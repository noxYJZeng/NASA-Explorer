<template>
    <div id="map" class="w-full h-full"></div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, onBeforeUnmount, watch } from 'vue'
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  
  const props = defineProps<{
    lat: number
    lng: number
  }>()
  
  let map: L.Map
  let marker: L.Marker
  
  onMounted(() => {
    map = L.map('map').setView([props.lat, props.lng], 3)
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)
  
    marker = L.marker([props.lat, props.lng]).addTo(map).bindPopup('🛰 ISS')
  
    const iconUrl = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png'
    const shadowUrl = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png'
    marker.setIcon(
      L.icon({
        iconUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      })
    )
  })
  
  watch(
    () => [props.lat, props.lng],
    ([newLat, newLng]) => {
      if (marker) {
        marker.setLatLng([newLat, newLng])
      }
      if (map) {
        map.panTo([newLat, newLng])
      }
    }
  )
  
  onBeforeUnmount(() => {
    if (map) map.remove()
  })
  </script>
  
  <style scoped>
  #map {
    height: 100%;
    width: 100%;
  }
  </style>
  