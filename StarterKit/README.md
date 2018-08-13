##Starter Kit for [React Flux Applications](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents)

####Prerequisites
---
1. Install [Node.js](https://nodejs.org/en/ "Node.js")
2. Open PowerShell and navigate to project directory.
3. Type `npm init` and hit enter, this will generate a `package.json` file with requierd info.
4. Next install [Gulp.js](https://gulpjs.com/ "Gulp.js") and follow the instructions.
5. Re-Open PowerShell and navigate to project directory.
6. Type `npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0 browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0`
7. When all packages are installed type `npm update` to make sure that the latest versions are used.

---

####Project Structure
---
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
