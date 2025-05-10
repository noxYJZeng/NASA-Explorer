<template>
  <div id="cesiumContainer" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch } from 'vue'
import * as Cesium from 'cesium'

const props = defineProps<{ lat: number; lng: number }>()

let viewer: Cesium.Viewer
let pathProperty: Cesium.SampledPositionProperty

onMounted(async () => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZjI5ZTM0Ny1lZDZjLTRhYWEtYTJkZS00MTc1ZTFkZDQwM2EiLCJpZCI6MzAxMzE0LCJpYXQiOjE3NDY4OTY1Nzl9.vyx_RECOb3UdTO02RRe8f20sctoq5lKzEPea122azpg'

  viewer = new Cesium.Viewer('cesiumContainer', {
    baseLayerPicker: false,
    animation: false,
    timeline: false,
    geocoder: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    shouldAnimate: true
  })
  const imageryProvider = await Cesium.IonImageryProvider.fromAssetId(2)
  viewer.scene.imageryLayers.removeAll()
  viewer.scene.imageryLayers.addImageryProvider(imageryProvider)

  viewer.scene.globe.depthTestAgainstTerrain = false

  pathProperty = new Cesium.SampledPositionProperty()
  const start = Cesium.Cartesian3.fromDegrees(props.lng, props.lat, 400000)
  pathProperty.addSample(Cesium.JulianDate.now(), start)

  const iss = viewer.entities.add({
    name: 'ISS',
    position: pathProperty,
    point: new Cesium.PointGraphics({
      pixelSize: 10,
      color: Cesium.Color.YELLOW
    }),
    label: new Cesium.LabelGraphics({
      text: '🛰 ISS',
      font: '14pt sans-serif',
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(0, -20)
    }),
    path: new Cesium.PathGraphics({
      material: Cesium.Color.CYAN,
      width: 2,
      leadTime: 0,
      trailTime: 600,
      resolution: 1
    })
  })

  viewer.trackedEntity = iss
})

watch(() => [props.lat, props.lng], ([lat, lng]) => {
  const now = Cesium.JulianDate.now()
  const pos = Cesium.Cartesian3.fromDegrees(lng, lat, 400000)
  pathProperty?.addSample(now, pos)
})

onBeforeUnmount(() => {
  viewer?.destroy()
})
</script>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
