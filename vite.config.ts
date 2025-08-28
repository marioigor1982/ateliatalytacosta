import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      'process.env': {
        API_KEY: JSON.stringify(env.GEMINI_API_KEY),
        GEMINI_API_KEY: JSON.stringify(env.GEMINI_API_KEY)
      }
    },
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    server: {
      port: 3000,
      open: true,
      fs: {
        strict: false
      }
    },
    publicDir: 'public',
    assetsInclude: ['**/*.css', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.mp4', '**/*.webp'],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      assetsInlineLimit: 4096, // 4kb
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'mp4'].includes(ext)) {
              return `img/[name]-[hash][extname]`;
            }
            return 'assets/[name]-[hash][extname]';
          },
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        }
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    }
  };
});
