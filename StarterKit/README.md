# Starter Kit for [React Flux Applications](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents)

## Prerequisites
1. Install [Node.js](https://nodejs.org/en/ "Node.js")
2. Open PowerShell and navigate to project directory.
3. Type `npm init` and hit enter, this will generate a `package.json` file with requierd info.
4. Next install [Gulp.js](https://gulpjs.com/ "Gulp.js") and follow the instructions.
5. Re-Open PowerShell and navigate to project directory.
6. Type `npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0 browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0`
7. When all packages are installed type `npm update` to make sure that the latest versions are used.

## Configuration
Open `gulpfile.js` and add the below code.
    
	"use strict";

	var gulp = require('gulp');

	// Runs a local Dev server
	var connect = require('gulp-connect'); 

	// Open a URL in a web browser
	var open = require('gulp-open');

	// Bundles JS
	var browserify = require('browserify');

	// Transform React JSX to JS
	var reactify = require('reactify');

	// Use conventional text streams with Gulp
	var source = require('vinyl-source-stream');

	var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		dist: './dist',
		mainJs: './src/main.js'
		}
	}

	// Start a local development server
	gulp.task('connect', function() {
		connect.server({
			root: ['dist'],
            port: config.port,
            base: config.devBaseUrl,
            livereload: true
            });
	});

	gulp.task('open', ['connect'], function() {
		gulp.src('dist/index.html')
            .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
	})

	gulp.task('html', function() {
		gulp.src(config.paths.html)
            .pipe(gulp.dest(config.paths.dist))
            .pipe(connect.reload());
	})

	gulp.task('js', function() {
		browserify(config.paths.mainJs)
			.transform(reactify)
            .bundle()
            .on('error', console.error.bind(console))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(config.paths.dist + '/scripts'))
			.pipe(connect.reload());
	})

	gulp.task('watch', function() {
		gulp.watch(config.paths.html, ['html']);
		gulp.watch(config.paths.js, ['js']);
	})

	gulp.task('default', ['html', 'js', 'open', 'watch']);

## Project Structure
	.root
	├── dist
		├── scripts
			└── bundle.js
		└── index.html
	├── node_modules
		└── * packages
	├── src
		├── index.html
		└── main.js
	├── gulpfile.js
	├── package.json
	├── package-lock.json
	└── README.md
	
	3 directories, 8 files
