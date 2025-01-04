import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ModuleFederationPlugin from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remote: 'http://localhost:5001/remoteEntry.js',
        ui: 'http://localhost:5003/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  preview: {
    port: 5002,
  },
});
