import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            'react-motion-prefixed': 'react-motion',
        },
    },
    plugins: [react()],
})
