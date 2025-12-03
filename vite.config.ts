import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 使用相对路径，确保在 GitHub Pages 下能找到资源
  base: './', 
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000, // 稍微提高警告阈值
    rollupOptions: {
      output: {
        // 手动分包，将庞大的第三方库单独打包，解决 "chunks larger than 500kB" 警告
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
        },
      },
    },
  },
  server: {
    open: true,
  }
});