import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'routes.json',
          dest: '.' // copies to dist/routes.json
        }
      ]
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});