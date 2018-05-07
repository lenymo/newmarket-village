

//
//  GULP
//––––––––––––––––––––––––––––––––––––––––––––––––––

// General.
var gulp            = require('gulp');
var del             = require('del');
var sourcemaps      = require('gulp-sourcemaps');
var webserver       = require('gulp-webserver');

// Styles.
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');

// HTML.
var include         = require('gulp-file-include');

// JavaScript.
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');

// Images.
var imagemin        = require('gulp-imagemin');
var mozjpeg         = require('imagemin-mozjpeg');


//
//  SCSS
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Compile admin SCSS files to CSS
gulp.task('scss', function () {

  // Clear the build/css directory.
  del(['build/css/**/*']);

  gulp.src('src/scss/**/*.scss')

    .pipe( sourcemaps.init() )
    .pipe( sass().on('error', sass.logError) )
    .pipe( sass({outputStyle: 'compressed'}) )
    .pipe( sourcemaps.write({includeContent: false}) )
    .pipe( sourcemaps.init({loadMaps: true}) )
    .pipe( autoprefixer({
      browsers: [
        'last 5 version',
        '> 50%',
        'Firefox < 20',
        'safari 5',
        'ie 8-11',
        'android >=2.1'
      ],
    }))
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest('build/css') );
});


//
//  JAVASCRIPT
//––––––––––––––––––––––––––––––––––––––––––––––––––

gulp.task('js', function() {

  // Clear the build/js directory.
  del([
    'build/js/**/*'
  ]);

  gulp.src('src/js/*.js')
    .pipe( sourcemaps.init() )
    .pipe( concat('app.min.js') )
    .pipe( uglify().on('error', console.log) )
    .pipe( sourcemaps.write('./') )
    .pipe( gulp.dest('build/js') );


  gulp.src('src/js/vendor/*.js')
    .pipe( gulp.dest('build/js/vendor') );

});


//
//  HTML
//––––––––––––––––––––––––––––––––––––––––––––––––––

gulp.task('html', function() {
  gulp.src('src/html/pages/*.html')
    .pipe(include({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe( gulp.dest('build/') );
});


//
//  IMAGES
//––––––––––––––––––––––––––––––––––––––––––––––––––

gulp.task('images', function() {
  gulp.src('src/img/**/*.{jpg,png,gif,svg}')
    .pipe(imagemin([
      imagemin.gifsicle(),
      imagemin.optipng(),
      imagemin.svgo(),
      mozjpeg(),
    ]))
    .pipe(gulp.dest('build/img/'));
});


//
//  WEB SERVER
//––––––––––––––––––––––––––––––––––––––––––––––––––

gulp.task('webserver', function() {
  gulp.src('build/')
    .pipe(webserver({
      livereload: true,
      // open: true
    }));
});


//
//  BUILD
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Build all assets.
gulp.task('build', ['scss', 'js', 'html', 'images']);


//
//  WATCH
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Watch asset folder for changes.
gulp.task('watch', ['scss', 'js', 'html', 'webserver'], function () {
  gulp.watch('src/scss/**/*', ['scss']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/html/**/*', ['html']);
  // gulp.watch('src/img/**/*', ['img']);
});


//
//  DEFAULT
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Set watch as default task.
gulp.task('default', ['watch']);
