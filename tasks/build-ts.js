var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var tsProject = ts.createProject('tsconfig.json');

module.exports = function(gulp, config) {
    gulp.task('build-ts', function() {
        if (!config.activateTsBuild)
            return;
        // compile typescript
        var result = tsProject.src(config.ts_src_path)
            .pipe(ts(tsProject));

        // minify scripts
        if (config.minifyScripts)
            result = result.js.pipe(uglify())
                .pipe(rename({ extname: '.min.js' }));

        // copy minified
        result = result.pipe(gulp.dest(config.js_dist_path));


        return result;
    });
}