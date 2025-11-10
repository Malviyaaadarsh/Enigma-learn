import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webfontDownload from 'vite-plugin-webfont-dl';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),webfontDownload(),],
  base: process.env.VITE_BASE_PATH || '/Enigma-learn',
})
