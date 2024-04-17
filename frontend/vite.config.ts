import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), splitVendorChunkPlugin()],
    build: {
      rollupOptions: {
        plugins: [
          mode === 'analyze' &&
            visualizer({
              open: true,
              filename: 'dist/stats.html',
              gzipSize: true,
              // Brotli
              //   https://dev.classmethod.jp/articles/update-cloudfront-support-brotli/
              brotliSize: true,
            }),
        ],
        // output: {
        //   // entry chunk assets それぞれの書き出し名の指定
        //   entryFileNames: `assets/[name]-entryFileNames.js`,
        //   chunkFileNames: `assets/[name]-chunkFileNames.js`,
        //   assetFileNames: `assets/[name]-assetFileNames.[ext]`,
        //   manualChunks: {
        //     vendor: ['react'],
        //     // dateFormatter: ['date-fns'],
        //   },
        // },
      },
    },
  };
});
