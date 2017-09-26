import uglify from 'rollup-plugin-uglify';
import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator'
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import string from 'rollup-plugin-string';
import json from 'rollup-plugin-json';
import copy from 'rollup-plugin-copy';

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
            include: [
                'node_modules/**',
                'src/app/**'
            ]
        }),
        copy({            
            "node_modules/bootstrap/fonts": "fonts/",
            verbose: true
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
        uglify(),
        obfuscatorPlugin({
            compact: true
          })
    ]
};