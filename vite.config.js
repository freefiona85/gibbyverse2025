import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
		  main: '/main.js',
	  index: 'index.html',
	  }
    },
  },
});
