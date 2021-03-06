# Code test

A code test I completed for a job application in May 2018.

---

## How to use this

Once the repo is cloned, run the following terminal command from the project root:

    $ npm install

The project is powered by gulp but can be run via npm commands:

    $ npm start

    $ npm run build

Alternatively use gulp commands as follows:

    $ gulp

    $ gulp build

The `$ npm start` and `$ gulp` tasks will open a new browser tab at: http://localhost:8000/ and watch SCSS, JS and HTML files in the /src/ directory.

Images in the /src/img/ directory are optimised and copied to /build/img/ during the `$ npm run build` or `$ gulp build` tasks.

---

## Tech summary

Below is  a summary of tech stack used for this build.

Gulp.js for task management including:

- SCSS (sass, autoprefixer)
- JavaScript (concat, uglify)
- Images (imagemin)
- File includes ([gulp-file-include](https://www.npmjs.com/package/gulp-file-include)) to mash together HTML
- Web server ([gulp-web-server](https://github.com/schickling/gulp-webserver))

I was able to avoid jQuery thanks to the following awesome JavaScript libraries:

- [Rellax](https://github.com/dixonandmoe/rellax) for Parallax
- [Smooth scroll](http://github.com/cferdinandi/smooth-scroll) for smooth scrolling when #'s are clicked
- [Tiny slider](https://github.com/ganlanyuan/tiny-slider) for sliders / carousels
