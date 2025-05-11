<template>
  <div class="relative w-full h-full">
    <div id="cesiumContainer" class="w-full h-full" />

    <button
      class="absolute top-1 right-1 z-50 px-4 py-1.5 bg-white text-black rounded-full shadow-lg hover:bg-gray-100"
      @click="toggleTracking"
    >
      {{ isTracking ? '🌍 View Earth' : '🛰 Track ISS' }}
    </button>

  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, ref } from 'vue'
import * as Cesium from 'cesium'
import 'cesium/Widgets/widgets.css'

const props = defineProps<{ lat: number; lng: number }>()
const isTracking = ref(true)

let viewer: Cesium.Viewer
let issEntity: Cesium.Entity
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
  viewer.clock.shouldAnimate = true
  viewer.clock.multiplier = 10

  pathProperty = new Cesium.SampledPositionProperty()
  pathProperty.setInterpolationOptions({
    interpolationDegree: 1,
    interpolationAlgorithm: Cesium.LinearApproximation
  })
  pathProperty.forwardExtrapolationType = Cesium.ExtrapolationType.HOLD
  pathProperty.forwardExtrapolationDuration = 60

  const now = Cesium.JulianDate.clone(viewer.clock.currentTime)
  const pos = Cesium.Cartesian3.fromDegrees(props.lng, props.lat, 400000)
  pathProperty.addSample(now, pos)

  issEntity = viewer.entities.add({
    id: 'iss',
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

  viewer.trackedEntity = issEntity
})

watch(() => [props.lat, props.lng], ([lat, lng]) => {
  if (!viewer || !pathProperty) return

  const now = Cesium.JulianDate.clone(viewer.clock.currentTime)
  const pos = Cesium.Cartesian3.fromDegrees(lng, lat, 400000)
  pathProperty.addSample(now, pos)

  if (isTracking.value) {
    viewer.trackedEntity = issEntity
  }
})

function toggleTracking() {
  if (!viewer || !issEntity) return

  isTracking.value = !isTracking.value

  if (isTracking.value) {
    viewer.trackedEntity = issEntity
    viewer.flyTo(issEntity, {
      duration: 2.5,
      offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 1000000)
    })
  } else {
    viewer.trackedEntity = undefined
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(0, 0, 20000000),
      orientation: {
        heading: 0,
        pitch: -Cesium.Math.PI_OVER_TWO,
        roll: 0
      },
      duration: 2.5
    })
  }
}

onBeforeUnmount(() => {
  viewer?.destroy()
})
</script>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
}

</style>
