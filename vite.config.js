import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
  base: '/', // Assurez-vous que la base est configurée pour le déploiement
  plugins: [
    vue(),
    dynamicImport(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': 'bootstrap',
    },
  },
  build: {
    rollupOptions: {
      // Si vous avez des dépendances externes, configurez-les ici
      external: ['emailjs-com'], // Ajoutez d'autres dépendances si nécessaire
    },
    outDir: 'dist', // Assurez-vous que la sortie est correctement configurée
  },
})

