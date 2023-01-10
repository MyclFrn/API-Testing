import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const { createVuePlugin } = require('vite-plugin-vue2');
export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
        createVuePlugin(),
    ],
});
