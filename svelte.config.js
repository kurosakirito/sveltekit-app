import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
  kit: {
    // Other SvelteKit config options...

    // Add the adapter configuration
    adapter: adapter({
      // Set the path to the output directory (where the static files will be built)
      // You can customize this path as needed
      pages: 'build',
      paths: {
        base: dev ? '' : process.env.BASE_PATH;
      }
    }),
  },
};