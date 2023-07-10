import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@images': path.resolve(__dirname, 'src/images'),
			'@helpers': path.resolve(__dirname, 'src/helpers'),
			'@atoms': path.resolve(__dirname, 'src/atoms')
		}
	},
	plugins: [react()]
});
