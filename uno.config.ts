import { defineConfig, presetAttributify, presetIcons, presetWebFonts, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons(),
    presetWebFonts(),
    presetWind3()
  ]
})