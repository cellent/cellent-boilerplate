var gulp = require('gulp'),
    config = require('./config.json');

require(config.gulpTasksPath + '/build-js')(gulp, config); // JS Build
require(config.gulpTasksPath + '/build-scss')(gulp, config); // CSS Build
require(config.gulpTasksPath + '/watcher')(gulp, config); // Watcher

gulp.task('default', [], function() {
    gulp.start('watcher');
});