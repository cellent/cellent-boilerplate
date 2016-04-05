var gulp = require('gulp');

module.exports = function(gulp, config) {
    gulp.task('watcher', function () {
        gulp.watch(config.scss_src_path, ['build-scss']);
        gulp.watch(config.ts_src_path, ['build-js']);
    });
}