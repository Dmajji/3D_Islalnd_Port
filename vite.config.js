import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: "/dmajji.github.io/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/3d/*.glb',
          dest: 'assets/3d'
        }
      ]
    })
  ]
});
