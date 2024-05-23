import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteSSR(),
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dirs: ['./src/consts', './src/utils'],
      dts: true,
    }),
    Components({
      dirs: ['src/components'],
      deep: true,
      dts: true,
      collapseSamePrefixes: true,
      directoryAsNamespace: true
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
						@import "@/assets/scss/base/mixins.scss";
						@import "@/assets/scss/base/variables.scss";
					`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
