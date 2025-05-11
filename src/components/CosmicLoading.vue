<template>
    <div id="cosmic-container" :class="{ fadeOut: fade }">
      <div class="welcome-text">Welcome to<br />NASA Explorer</div>
      <div class="loading-text">Loading...</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, onBeforeUnmount, defineProps } from 'vue'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  
  const props = defineProps<{ fade: boolean }>()
  
  let renderer: THREE.WebGLRenderer
  let scene: THREE.Scene
  let camera: THREE.PerspectiveCamera
  let animationId = 0
  
  onMounted(() => {
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000010)
  
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.set(0, 4, 21)
  
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.getElementById('cosmic-container')?.appendChild(renderer.domElement)
  
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enablePan = false
  
    const gu = { time: { value: 0 } }
    const sizes: number[] = []
    const shift: number[] = []
    const pushShift = () => {
      shift.push(Math.random() * Math.PI, Math.random() * Math.PI * 2, (Math.random() * 0.9 + 0.1) * Math.PI * 0.1, Math.random() * 0.9 + 0.1)
    }
  
    const pts: THREE.Vector3[] = new Array(50000).fill(0).map(() => {
      sizes.push(Math.random() * 1.5 + 0.5)
      pushShift()
      return new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5)
    })
    for (let i = 0; i < 100000; i++) {
      const r = 10, R = 40
      const rand = Math.pow(Math.random(), 1.5)
      const radius = Math.sqrt(R * R * rand + (1 - rand) * r * r)
      pts.push(new THREE.Vector3().setFromCylindricalCoords(radius, Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2))
      sizes.push(Math.random() * 1.5 + 0.5)
      pushShift()
    }
  
    const g = new THREE.BufferGeometry().setFromPoints(pts)
    g.setAttribute('sizes', new THREE.Float32BufferAttribute(sizes, 1))
    g.setAttribute('shift', new THREE.Float32BufferAttribute(shift, 4))
  
    const m = new THREE.PointsMaterial({
      size: 0.125,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      onBeforeCompile: (shader: any) => {
        shader.uniforms.time = gu.time
  
        shader.vertexShader = `
          uniform float time;
          attribute float sizes;
          attribute vec4 shift;
          varying vec3 vColor;
          varying float d;
          ${shader.vertexShader}
        `
          .replace('gl_PointSize = size;', 'gl_PointSize = size * sizes;')
          .replace(
            '#include <color_vertex>',
            `#include <color_vertex>
            d = length(abs(position)/vec3(40.,10.,40.));
            d = clamp(d, 0., 1.);
            float pulse = 0.5 + 0.5 * sin(time + d * 10.0);
            vColor = mix(vec3(0.1,0.1,0.3), vec3(0.6,0.7,1.0), pulse);`
          )
          .replace(
            '#include <begin_vertex>',
            `#include <begin_vertex>
              float t = time;
              float moveT = mod(shift.x + shift.z * t, PI2);
              float moveS = mod(shift.y + shift.z * t, PI2);
              transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS)*sin(moveT)) * shift.w;`
          )
  
        shader.fragmentShader = `
          varying vec3 vColor;
          varying float d;
          ${shader.fragmentShader}
        `
          .replace(
            '#include <clipping_planes_fragment>',
            `#include <clipping_planes_fragment>
             float dist = length(gl_PointCoord.xy - 0.5);`
          )
          .replace(
            'vec4 diffuseColor = vec4( diffuse, opacity );',
            'vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d));'
          )
      }
    } as any)
  
    const p = new THREE.Points(g, m)
    p.rotation.order = 'ZYX'
    p.rotation.z = 0.2
    scene.add(p)
  
    const clock = new THREE.Clock()
    const animate = () => {
      gu.time.value = clock.getElapsedTime()
      p.rotation.y = clock.getElapsedTime() * 0.05
      controls.update()
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }
    animate()
  
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
  })
  
  onBeforeUnmount(() => {
    cancelAnimationFrame(animationId)
    renderer.dispose()
  })
  </script>
  
  <style scoped>
  #cosmic-container {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #000010;
    transition: opacity 1s ease;
  }
  .fadeOut {
    opacity: 0;
    pointer-events: none;
  }
  .welcome-text {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: bold;
    color: white;
    font-family: 'Orbitron', sans-serif;
    text-align: center;
  }
  .loading-text {
    position: absolute;
    top: 34%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    color: white;
    font-family: 'Orbitron', sans-serif;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  </style>
  