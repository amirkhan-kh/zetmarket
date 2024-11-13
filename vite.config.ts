import { AliasOptions, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components/index.tsx'),
      '@utils': path.resolve(__dirname, './src/utils/index.ts'),
      '@hooks': path.resolve(__dirname, './src/hooks/index.tsx'),
      '@constants': path.resolve(__dirname, './src/constants/index.tsx'),
      '@context': path.resolve(__dirname, './src/context/index.tsx'),
      '@pages': path.resolve(__dirname, './src/pages/index.tsx'),
      '@router': path.resolve(__dirname, './src/router/index.tsx'),
      '@services': path.resolve(__dirname, './src/services/index.tsx'),
      '@store': path.resolve(__dirname, './src/stores/store.ts'),
      '@stores': path.resolve(__dirname, './src/stores/index.tsx'),
      '@app': path.resolve(__dirname, './src/app/index.tsx'),
      '@ttype': path.resolve(__dirname, './src/type/index.ts'),
      '@styles': path.resolve(__dirname, './src/assets/styles/index.tsx'),
      '@icons': path.resolve(__dirname, './src/assets/icons/index.tsx'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@theme': path.resolve(__dirname, './src/theme/index.ts'),
      '@ui': path.resolve(__dirname, './src/components/ui/index.tsx'),
    } as AliasOptions,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
