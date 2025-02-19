import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [react()],
	base: './',
	resolve: {
		alias: {
			'@assets': '/src/assets',
			'@components': '/src/components',
			'@constants': '/src/constants',
			'@hooks': '/src/hooks',
			'@utils': '/src/utils',
		},
	},
});
