import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ModuleFederationPlugin from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Search': './src/Search',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    assetsDir: '',
  },
  preview: {
    port: 5001,
  },
});
