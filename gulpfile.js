const {src, dest, watch,series} = require('gulp');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const gulp        = require('gulp');
const fileinclude = require('gulp-file-include');
const replaceB = require('gulp-batch-replace');


//function renderBoxData
gulp.task('renderBoxData', function() {   
    //array is dynamic
    var strData =  (fs.readFileSync("src/data/data.json", "utf8"));
   // console.log(data);
    eval('var data='+strData);
    // var replaceThis = [];
    // console.log(data)y
    
    var arrdata=[];
    var data=data[1];
    for(let i in data){arrdata.push(['%'+i+'%',data[i]])}

        gulp.src(['src/test/js/renderBox.js'])
            .pipe(replaceB(arrdata))
			.pipe(gulp.dest('./src/js'));
});


gulp.task('gulpJs', function(){
    return src('src/js/renderBox.js')
        .pipe(terser())
        .pipe(gulp.dest('dist'))
})







// render layout
gulp.task('layout', function() {
    //array is dynamic
   var strData =  (fs.readFileSync("src/data/data.json", "utf8"));
  // console.log(data);
   eval('var data='+strData);
//    var replaceThis = [];

   
   var arrdata=[];

   var data=data[1];

   for(let i in data){arrdata.push(['${'+i+'}',data[i]])}


 gulp.src(['src/layout/include/test.html'])
   .pipe(fileinclude({
     prefix: '@@',
     basepath: '@file'
   }))
    .pipe(replaceB(arrdata))
   .pipe(gulp.dest('./src/test/replaceData'));
});




//replace content
 
gulp.task('fileinclude', function() {
  gulp.src(['src/layout/include/test.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('src/test/html'));
});





const fs=require('fs');
const cssContent = fs.readFileSync("src/layout/include/style.css", "utf8");
const htmlContent = fs.readFileSync("src/layout/include/content.html", "utf8");

// console.log(htmlContent);


gulp.task('test',function(){
	return gulp.src(['src/temp-js/renderBox.js'])
   	.pipe(replace('%%css%%', cssContent))
    .pipe(replace('%%html%%', htmlContent))
    .pipe(gulp.dest('src/test/js/'));
});


//sass task
function scssTask(){
    return src('src/sass/style.scss', {sourcemaps : true})
        .pipe(sass())
        // .pipe(postcss([cssnano()]))
        .pipe(dest('dist', {sourcemaps: '.'}))

}

// javascript task

function jsTask(){
    return src('src/js/index.js', {sourcemaps : true})
        .pipe(terser())
        .pipe(dest('dist', {sourcemaps : '.'}))
}


// browsersync task
function browsersyncServer(cb){
    browsersync.init({
        server : {
            baseDir : '.'
        }
    });
    cb();
}


function browserReload(cb){
    browsersync.reload();
    cb();
}

// Watch tasks
function watchTask(){
    watch('*.html', browserReload);
    watch(['src/sass/**/*.scss', 'src/js/**/*.js'], series(scssTask, jsTask, browserReload))
}


// default gulp task

exports.default = series(
    scssTask,
    jsTask,
    browsersyncServer,
    watchTask
)
