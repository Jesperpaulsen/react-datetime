import { defineConfig } from 'vite';
import path from 'path';
import envCompatible from 'vite-plugin-env-compatible';
import { injectHtml } from 'vite-plugin-html';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{
				find: /^~/,
				replacement: ''
			},
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src')
			}
		],
		extensions: [
			'.mjs',
			'.js',
			'.ts',
			'.jsx',
			'.tsx',
			'.json',
			'.vue'
		]
	},
	plugins: [
		viteCommonjs(),
		envCompatible(),
		injectHtml()
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/DateTime.jsx'),
			name: 'ReactDateTime',
			fileName: (format) => `react-datetime.${format}.js`
		},
		rollupOptions: {
			external: ['React', 'moment'],
			output: {
				globals: {
					React: 'React',
					moment: 'moment'
				}
			}
		}
	}
});
