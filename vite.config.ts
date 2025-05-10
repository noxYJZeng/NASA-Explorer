import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      cesium: path.resolve(__dirname, 'public/cesium') // ✅ 指向 public 目录
    }
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify('/cesium') // ✅ 带前导斜杠
  },
  build: {
    rollupOptions: {
      external: ['fs'], // ✅ 防止打包 Node 模块
    }
  }
})
