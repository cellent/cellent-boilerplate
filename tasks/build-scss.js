var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

module.exports = function(gulp, config) {
    gulp.task('build-scss', function(done) {

        // compile SASS
        var result = gulp.src(config.scss_src_path)
            .pipe(sass())
            .on('error', sass.logError);

        // minify CSS
        if (config.minifyStyles)
            result = result.pipe(minifyCss({
                keepSpecialComments: 0
            }))
                .pipe(rename({ extname: '.min.css' }));

        // copy to output
        result = result.pipe(gulp.dest(config.scss_dist_path));

        return result;
    });
}