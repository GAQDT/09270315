import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../docs',   // 构建输出到仓库的 docs 文件夹
    emptyOutDir: true    // 每次构建时清空 docs
  }
})
