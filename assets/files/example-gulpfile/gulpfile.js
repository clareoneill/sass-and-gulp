// include gulp
var gulp = require('gulp'); 

// include all our gulp plugins
var minify        = require('gulp-minify-css' ),
    sass          = require('gulp-sass' ),
    rename        = require('gulp-rename' ),
    uglify        = require('gulp-uglify' ),
    concat        = require('gulp-concat' ),
    jshint        = require('gulp-jshint' ),
    autoprefixer  = require('gulp-autoprefixer'),
    sourcemaps    = require('gulp-sourcemaps');

// include paths to the files you want to keep track of
// ** denotes any level of child folder
// *.extention denotes any file of that extention type
var watchFiles = [
  'assets/styles/development/scss/**/**/*.scss',
  'assets/scripts/development/**/*.js',
  '**/*.html'
];

// compile the site sass
gulp.task('sass', function() {
  return gulp.src('assets/styles/development/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('assets/styles/development/css'))
    .pipe(minify())
    .pipe(rename(function (path) {
      path.extname = '.min.css'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('assets/styles/production'));
});

// lint the javascript files
gulp.task('lint', function() {
  return gulp.src('assets/scripts/development/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// concatenate & minify javascript files
gulp.task('scripts', function() {
  return gulp.src('assets/scripts/development/*.js')
    .pipe(rename(function (path) {
        path.extname = '.min.js'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('assets/scripts/production'));
});

// default task
// include all tasks outlined above
gulp.task('default', ['sass', 'lint', 'scripts']);

// set up watch task to run the tasks any time a watched file changes
gulp.task('watch', ['default'], function() {
  gulp.watch(watchFiles, ['default']);
});