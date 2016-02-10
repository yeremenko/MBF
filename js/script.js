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
    $('#portfolio').mixItUp(
      {
        animation: {
          duration: 400,
          effects: 'fade',
          easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)'
        }
      }
    );
    imgOverlay();
  };

  initialize();
});
