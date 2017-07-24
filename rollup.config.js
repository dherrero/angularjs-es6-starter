import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import string from 'rollup-plugin-string';
import json from 'rollup-plugin-json';

export default {
    entry: 'src/index.js',
    dest: 'dist/app.js',
    format: 'umd',
    moduleName: 'caStore',
    plugins: [
        string({
            include: '**/*.html'
        }),
        json({
            include: 'node_modules/**',
        }),
        postcss({
            extensions: ['.css'],
        }),
        resolve({
            main: true
        }),
        commonjs({
            ignoreGlobal: false,
            namedExports: {
                'node_modules/bootstrap/dist/js/bootstrap.min.js' : ['bootstrap']
            }
        }),
        babel({
            exclude: [
                'node_modules/**',
                '**/*.html'
            ]
        }),
        uglify()
    ],
    sourceMap: true,
    sourceMapFile: 'dist/app.js.map'
};