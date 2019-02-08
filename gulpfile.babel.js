import gulp from "gulp";
import browserSync from "browser-sync";

gulp.task("browser-sync", function(params) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch(["./*.html", "./css/*.css"]).on("change", browserSync.reload);
});
