const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon'); 
const src = 'server/*js';
const sleep = require('sleep');
const runSequence = require('run-sequence');

gulp.task('babel', function () {
   const data =  gulp.src(src)
        .pipe(babel({
            "presets": ["es2015", "stage-2"],
            "plugins": ["transform-runtime", "transform-async-to-generator"]
        }))
        .pipe(gulp.dest('dist'))
   return data;
  }
);

gulp.task('start', function () {
  return nodemon({
    script: 'dist/index.js'
  });
});

gulp.task('watch', function() {
    gulp.watch(src, ['babel']);
});

gulp.task('default', ['babel'], function() {
  return runSequence(['watch', 'start']);
});
