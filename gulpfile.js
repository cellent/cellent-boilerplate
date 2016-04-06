var gulp = require('gulp'),
    config = require('./config.json');

require(config.gulpTasksPath + '/build-ts')(gulp, config); // TS Build
require(config.gulpTasksPath + '/build-scss')(gulp, config); // SCSS Build
require(config.gulpTasksPath + '/watcher')(gulp, config); // Watcher
require(config.gulpTasksPath + '/liveserver')(gulp, config); // Live-Webserver

gulp.task('default', ['serve', 'build-scss', 'build-ts'], function() {
    gulp.start('watcher');
});