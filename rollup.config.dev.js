import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import config from './rollup.config.js';

config.plugins.pop(); //remove uglify
config.plugins.unshift(
    serve({
        open: true,
        contentBase: '',
        port: 8080
    }),
    livereload({
        watch: 'dist',
        delay: 1500
    })
);

export default config;