

//
//  GULP
//––––––––––––––––––––––––––––––––––––––––––––––––––

// General.
var gulp            = require('gulp');
var del             = require('del');
var sourcemaps      = require('gulp-sourcemaps');

// Styles.
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');

// HTML.
var include = require('gulp-file-include');

// JavaScript.
// var concat          = require('gulp-concat');
// var uglify          = require('gulp-uglify');

// Images.
// var imagemin        = require('gulp-imagemin');


//
//  SCSS
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Compile admin SCSS files to CSS
gulp.task('scss', function () {

  // Clear the static/css directory.
  del(['build/css/**/*']);

  gulp.src('src/scss/**/*.scss')

    .pipe( sourcemaps.init() )
    .pipe( sass().on('error', sass.logError) )
    .pipe( sass({outputStyle : 'compressed'}) )
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
    // .pipe(livereload());
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
    // .pipe(livereload());
});


//
//  WATCH
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Watch asset folder for changes
gulp.task('watch', ['scss'], function () {
  gulp.watch('src/scss/**/*', ['scss']);
});


//
//  DEFAULT
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Set watch as default task
gulp.task('default', ['watch']);
