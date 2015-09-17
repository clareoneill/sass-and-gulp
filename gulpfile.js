<<<<<<< HEAD
/* include gulp */
var gulp = require( 'gulp' );

/* include gulp plugins */
var minify = require( 'gulp-minify-css' ),
    sass = require( 'gulp-sass' ),
    rename = require( 'gulp-rename' ),
    uglify = require( 'gulp-uglify' ),
    concat = require( 'gulp-concat' ),
    jshint = require( 'gulp-jshint' );

/* default task */
gulp.task('default', ['vendor-styles', 'sass', 'move-style', 'lint', 'vendor-scripts', 'scripts']);

/* minify vendor css */
gulp.task('vendor-styles', function() {
  return gulp.src('assets/styles/development/css/_vendor/*.css')
    .pipe(minify())
    .pipe(rename(function(path) {
      path.extname = '.min.css'
    }))
    .pipe(gulp.dest('assets/styles/production'));
});

/* compile sass */
gulp.task('sass', function() {
  return gulp.src('assets/styles/development/scss/*.scss')
=======
// include gulp
var gulp = require('gulp'); 

// include Our plugins
var jshint = require('gulp-jshint');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// compile our sass plugins to css
gulp.task('sass-plugins', function() {
  return gulp.src('assets/styles/development/sass/_plugins/*.scss')
    .pipe(sass())
    .pipe(rename('plugins.css'))
    .pipe(gulp.dest('assets/styles/developmentcss'))
    .pipe(minify())
    .pipe(rename('plugins.min.css'))
    .pipe(gulp.dest('assets/styles/production'));
});

// compile our site sass
gulp.task('sass', function() {
  return gulp.src('assets/styles/development/sass/*.scss')
>>>>>>> first page commit
    .pipe(sass())
    .pipe(gulp.dest('assets/styles/development/css'))
    .pipe(minify())
    .pipe(rename(function (path) {
<<<<<<< HEAD
      path.extname = '.min.css'
=======
      path.extname = ".min.css"
>>>>>>> first page commit
    }))
    .pipe(gulp.dest('assets/styles/production'));
});

<<<<<<< HEAD
/* move style.css to root */
gulp.task('move-style', function() {
  return gulp.src('assets/styles/production/style.min.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./'));
});

/* lint js */
=======
// lint task
>>>>>>> first page commit
gulp.task('lint', function() {
  return gulp.src('assets/scripts/development/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

<<<<<<< HEAD
/* concatenate vendor scripts */
gulp.task('vendor-scripts', function() {
  return gulp.src('assets/scripts/development/_vendor/*.js')
    .pipe(rename(function(path) {
      path.extname = '.min.js'
    }))
=======
// concatenate & minify js plugins
gulp.task('js-plugins', function() {
  return gulp.src('assets/scripts/development/_plugins/*.js')
    .pipe(concat('_plugins.js'))
    .pipe(gulp.dest('assets/scripts/development'))
    .pipe(rename('plugins.min.js'))
>>>>>>> first page commit
    .pipe(uglify())
    .pipe(gulp.dest('assets/scripts/production'));
});

<<<<<<< HEAD
/* concatenate scripts */
gulp.task('scripts', function() {
  return gulp.src('assets/scripts/development/*.js')
    .pipe(rename(function(path) {
      path.extname = '.min.js'
=======
// concatenate & minify js
gulp.task('scripts', function() {
  return gulp.src('assets/scripts/development/*.js')
    .pipe(rename(function (path) {
        path.extname = ".min.js"
>>>>>>> first page commit
    }))
    .pipe(uglify())
    .pipe(gulp.dest('assets/scripts/production'));
});

<<<<<<< HEAD

/* watch for changes */
gulp.task('watch', ['default'], function() {
  var watchFiles = [
    'assets/styles/development/css/_vendor/*.css',
    'assets/styles/development/scss/*.scss',
    'assets/styles/production/style.min.css',
    'assets/scripts/development/*.js',
    'assets/scripts/development/_vendor/*.js'
  ];

  gulp.watch(watchFiles, ['default']);
});
=======
// watch files For changes
gulp.task('watch', function() {
  gulp.watch('assets/styles/development/sass/plugins/*.scss', ['sass-plugins']);
  gulp.watch('assets/styles/development/sass/*.scss', ['sass']);
  gulp.watch('assets/styles/development/sass/_plugins/*.js', ['js-plugins']);
  gulp.watch('assets/scripts/development/_plugins/*.js', ['lint', 'js-plugins']);
  gulp.watch('assets/scripts/development/*.js', ['lint', 'scripts']);
});

// default task
gulp.task('default', ['sass-plugins', 'sass', 'lint', 'js-plugins', 'scripts', 'watch']);
>>>>>>> first page commit
