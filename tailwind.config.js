// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gray-150': '#f4f4f5' // 用于 light 模式的按钮背景色
      }
    },
  },
  plugins: [],
}
