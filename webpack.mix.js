const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const tailwindcss = require('tailwindcss');
// require('laravel-mix-purgecss');

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/instantpage-3.0.0.js', 'public/js/instantpage.js')
    .copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/css/webfonts')
    .copy('vendor/mckenziearts/laravel-notify/public/fonts', 'public/css/webfonts')
    .copy('resources/sass/fonts/webfonts', 'public/css/webfonts')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    });

// if (mix.inProduction()) {
//     mix
//         .version()
//         .purgeCss();
// }
