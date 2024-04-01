import * as path from 'path'
import { resolve } from 'path'

import { defineConfig } from 'vite'

import { dependencies, devDependencies } from './package.json'
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      // the proper extensions will be added
      fileName: 'index',
      name: 'ui-kit',
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
      output: {
        globals: {
          '@radix-ui/react-checkbox': 'CheckboxRDX',
          '@radix-ui/react-dialog': 'DialogRDX',
          '@radix-ui/react-label': 'LabelRDX',
          '@radix-ui/react-radio-group': 'RadioGroupRDX',
          '@radix-ui/react-select': 'SelectRadix',
          '@radix-ui/react-tabs': 'TabsRDX',
          clsx: 'clsx',
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
