import ts from '@wessberg/rollup-plugin-ts'
import pkg from './package.json'
import eslint from '@rollup/plugin-eslint'
import html from 'rollup-plugin-html'
import { builtinModules } from 'module'

const external = [
  ...builtinModules,
  ...(pkg.dependencies == null ? [] : Object.keys(pkg.dependencies)),
  ...(pkg.devDependencies == null ? [] : Object.keys(pkg.devDependencies)),
  ...(pkg.peerDependencies == null ? [] : Object.keys(pkg.peerDependencies)),
]

export default [
  {
    input: 'src/twitter/twitter.ts',
    output: [
      {
        file: 'dist/twitter/twitter.js',
        format: 'iife',
        name: 'Yanderetter',
        sourcemap: true,
      },
    ],
    plugins: [eslint(), ts()],
    external,
  },
  {
    input: 'src/instagram/instagram.ts',
    output: [
      {
        file: 'dist/instagram/yanderegram.js',
        format: 'iife',
        name: 'Yanderegram',
        sourcemap: true,
      },
    ],
    plugins: [eslint(), ts()],
    external,
  },
  {
    input: 'src/ui/ui.ts',
    output: [
      {
        file: 'dist/ui/ui.js',
        format: 'iife',
        name: 'YandereUI',
        sourcemap: true,
      },
    ],
    plugins: [eslint(), ts(), html({ include: 'src/ui/**/*.html' })],
    external,
  },
]
