import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react(), FullReload(['index.html'])],
    server: {
        host: '0.0.0.0'
    },
    build: {
        outDir: 'docs'
    },
    test: {
        globals: true,
        environment: 'jsdom',
        testIdAttribute: 'id'
    },

    base: '/00-demo/'
})
