const { loadTable } = require("./load-table.js");

window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  console.log("docu ready");
  // Check for click events on the navbar burger icon

  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach(".carousel", options);

  bulmaSlider.attach();

  console.log("Loading dataset stats table...");
  loadTable("dataset_stats_table", "ds-stats-table-container");
});
