import { defineConfig } from 'vite'
import path from 'path'
import strip from '@rollup/plugin-strip'
import checker from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'vue-router-destination',
    },
  },
  plugins: [
    {
      ...strip({
        include: '**/*.(ts|vue)',
      }),
      apply: 'build',
    },
    checker({
      vueTsc: true,
      eslint: {
        files: ['./'],
        extensions: ['.ts'],
      },
    }),
    dts({
      outputDir: './dist',
    }),
  ],
})
