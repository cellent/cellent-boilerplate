// livereload server at port 35729
var gulp  = require('gulp'),
    gls   = require('gulp-live-server');

module.exports = function(gulp, config) {
    gulp.task('serve', function () {
        if (config.activateWebServer === true) {
            var server = gls.static('build', 4000);
            server.start()
        }
    });
}