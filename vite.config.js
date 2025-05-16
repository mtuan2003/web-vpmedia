import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), 
    UnoCSS()
  ]
  // build: {
  //   rollupOptions: {
  //     input: {
  //       home: 'index.html',
  //       veChungToi: 've-chung-toi.html',
  //     },
  //   },
  // },
})
