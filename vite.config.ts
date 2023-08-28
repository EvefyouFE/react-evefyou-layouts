/*
 * @Author: EvefyouFE
 * @Date: 2023-08-10 13:42:48
 * @FilePath: \react-evefyou-layouts\vite.config.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import pkg from './package.json';
import cssnanoPlugin from "cssnano";
import postcssPresetEnv from 'postcss-preset-env';
import WindiCSS from 'vite-plugin-windicss';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

const pathResolve = (v: string) => path.resolve(__dirname, v)

const externalPackages = [...Object.keys(pkg.peerDependencies)]
const regexOfPackages = externalPackages
  .map(packageName => new RegExp(`^${packageName}(\\/.*)?`));

const entries = {
  'index': pathResolve('layouts/index.ts')
}

const locales = Object.keys(pkg.exports)
  .filter(e => e.includes('locale'))
  .map(e => e.split('./')[1])
const components = Object.keys(pkg.exports)
  .filter(e => e !== '.' && !e.includes('locale'))
  .map(e => e.split('./')[1])

console.log('components', components)

export default defineConfig({
  plugins: [
    react(),
    WindiCSS({
      scan: {
        dirs: ['./layouts'],
        fileExtensions: ['tsx', 'ts']
      }
    }),
    tsconfigPaths(),
    dts({
      rollupTypes: true,
    }),
    libInjectCss({
      build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
        cssCodeSplit: true,
        outDir: '.',
      },
      entry: entries,
      fileName: (format, entryName) => {
        return entryName === 'index'
          ? `${format}/index.js`
          : `${format}/[name]/index.js`
      },
      name: 'react-evefyou-layouts',
      formats: ["es", "cjs"],
      rollupOptions: {
        output: {
          minifyInternalExports: false,
          manualChunks: (id) => {
            if (id.includes('_common') && id.includes('hooks/use')) {
              console.log('hooks', id.split('/hooks/')[1].split('.ts')[0])
              return 'hooks/'.concat(id.split('/hooks/')[1].split('.ts')[0])
            }
            if (id.includes('_common') && id.includes('utils/')) {
              console.log('utils', id.split('/utils/')[1].split('.ts')[0])
              return 'utils/'.concat(id.split('/utils/')[1].split('.ts')[0])
            }
            let en = components.find(e => id.includes(e))
            en ??= locales.find(l => id.includes(l.split('_')[0]))
            console.log('manualChunks', en, id)
            return en
          },
          chunkFileNames: (chunkInfo) => {
            console.log('chunkInfo', chunkInfo.name)
            return '[format]/[name]/index.js'
          },
          assetFileNames: '[ext]/[name].[ext]',
        },
        external: regexOfPackages
      }
    })
  ],
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('layouts/_common/styles/variables/index.less')}";`,
          'primary-color': '#0960bd',
          'text-color': '#c9d1d9',
          'text-color-base': '#000000d9',
        }
      }
    },
    postcss: {
      plugins: [
        cssnanoPlugin({
          preset: 'default',
        }) as any,
        postcssPresetEnv({

        })
      ]
    }
  },
})
