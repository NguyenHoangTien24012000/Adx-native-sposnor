const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass task 
function scssTask(){
    return src('src/sass/style.scss', {sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist', {sourcemaps: '.'}));
}

//JavaScript task
function jsTask(){
    return src('src/js/script.js', {sourcemaps: true})
        .pipe(terser())
        .pipe(dest('dist',{sourcemaps: '.'}))
}


// Browsersync tasks
function browsersyncServe(cb){
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

// Watch tasks
function watchTask(){
    watch('*.html', browsersyncReload);
    watch(['src/sass/**/*.scss', 'src/js/**/*.js'], series(scssTask, jsTask, browsersyncReload))
}


// Default gulp task
exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
)

