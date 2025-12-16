import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), VueSetupExtend()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // server: {
  //   proxy: {
  //     // 匹配以/i0.hdslb.com开头的请求，走代理
  //     '/bilibili-img': {
  //       target: 'https://i0.hdslb.com',
  //       changeOrigin: true, // 关键：修改请求源，绕过Referer校验
  //       rewrite: (path) => path.replace(/^\/bilibili-img/, ''), // 去掉代理前缀
  //     },
  //   },
  // },
})
