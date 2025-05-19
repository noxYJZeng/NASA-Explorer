<template>
  <div id="cosmic-container" :class="{ fadeOut: fade }">
    <canvas id="cosmic-canvas" class="absolute inset-0 z-0" />

    <div class="center-text-wrapper z-10">
      <h1 class="welcome-text">Welcome to<br />NASA Explorer</h1>
      <p class="loading-text">Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, defineProps } from 'vue'
import { initCosmicScene, disposeCosmicScene } from '@/composables/cosmicRenderer'

const props = defineProps<{ fade: boolean }>()

onMounted(() => {
  initCosmicScene()
})

onBeforeUnmount(() => {
  disposeCosmicScene()
})
</script>

<style src="@/styles/cosmic.css"></style>
