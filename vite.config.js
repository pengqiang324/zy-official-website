import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default ({ mode }) => {
  const isProd = mode.includes('production');
  return defineConfig({
    resolve: {
      // 别名
      alias: {
        '@': resolve(__dirname, 'src'),
      }
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: isProd,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        // 生成环境js, imge, css文件分离
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          assetFileNames: assetInfo => {
            var info = assetInfo.name.split('.')
            var extType = info[info.length - 1]
            if (
              /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
            ) {
              extType = 'media'
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = 'img'
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'fonts'
            }
            return `${extType}/[name]-[hash][extname]`
          },
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js'
        }
      }
    },
    plugins: [
      react(),
      viteCompression(), // gzip代码压缩
    ]
  })
}
