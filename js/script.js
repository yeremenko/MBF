$(document).ready(function () {
  var imgOverlay = function () {
    $('.portfolio-item-link').hover(function () {
      $('<div class="img-overlay"></div>')
        .prependTo(this);
    } , function () {
      $('.img-overlay').remove();
    });
  };

  var initialize = function () {
    imgOverlay();
  };

  initialize();
});
