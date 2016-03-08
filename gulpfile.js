// include gulp
var gulp = require('gulp'),
  concat = require('gulp-concat');

/*****************************************************************************/
/* BUILD TASKS                                                               */
/*****************************************************************************/

// copy font awesome and compile styles
gulp.task('styles', function() {

  gulp.src([
      'assets/js/plugins/jquery.bxslider/jquery.bxslider.css',
      'assets/js/plugins/jquery.customscroll/jquery.mCustomScrollbar.min.css',
      'assets/js/plugins/jquery.fancybox/jquery.fancybox.css',
      'assets/js/plugins/jquery.owlcarousel/owl.carousel.css',
      'assets/js/plugins/jquery.owlcarousel/owl.theme.css',
      'assets/css/style.css',
      'assets/colors/teal.css',
      'assets/fonts/map-icons/css/map-icons.min.css',
      'assets/fonts/icomoon/style.css'
    ])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('assets/build/'));

    // also copy fonts
  return gulp.src([
      'assets/fonts/icomoon/fonts/*',
      'assets/fonts/map-icons/fonts/*'
  ])
  .pipe(gulp.dest('assets/build/fonts'));
});

gulp.task('scripts', function(done) {

   gulp.src([
      'assets/fonts/map-icons/js/map-icons.min.js',
      'assets/js/plugins/jquery-1.12.1.js',
      'assets/js/plugins/jquery.mousewheel-3.0.6.pack.js',
      'assets/js/plugins/imagesloaded.pkgd.min.js',
      'assets/js/plugins/isotope.pkgd.min.js',
      'assets/js/plugins/jquery.appear.min.js',
      'assets/js/plugins/jquery.onepagenav.min.js',
      'assets/js/plugins/jquery.onepagenav.min.js',
      'assets/js/plugins/jquery.bxslider/jquery.bxslider.min.js',
      'assets/js/plugins/jquery.customscroll/jquery.mCustomScrollbar.concat.min.js',
      'assets/js/plugins/jquery.fancybox/jquery.fancybox.pack.js',
      'assets/js/plugins/jquery.fancybox/helpers/jquery.fancybox-media.js',
      'assets/js/plugins/jquery.owlcarousel/owl.carousel.min.js',
      'assets/js/site.js'
    ])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('assets/build/'));

   return gulp.src([
      'assets/js/plugins/jquery.bxslider/images/*'
   ])
   .pipe(gulp.dest('assets/build/images/'));
});

/*****************************************************************************/
/* TASK SUITE                                                                */
/*****************************************************************************/
gulp.task('build', ['scripts', 'styles'], function() {});