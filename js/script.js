$(document).ready(function () {
  var headerLinks = function () {
    var $headerLinks = $('#header-nav a'),
        selectedLink,
        selectedWrap;

    $headerLinks.on('click' , function (e) {
      e.preventDefault();

      selectedLink = $(this);
      selectedWrap = '#' + selectedLink.data('show-section');

      if ( $(selectedWrap).is(':visible') ) {
        return;
      } else {
        $headerLinks.removeClass('active');
        selectedLink.addClass('active');

        if ( selectedWrap == '#portfolio-wrap') {
          initMixItUp();
        }

        $('.hide-wrapper').fadeOut(200);
        $(selectedWrap).fadeIn(700);
      }
    });
  };
  var imgOverlay = function () {
    $('.portfolio-item-link').hover(function () {
      $('<div class="img-overlay"></div>')
        .prependTo(this);
    } , function () {
      $('.img-overlay').remove();
    });
  };
  var initMixItUp = function () {
    $('#portfolio').mixItUp({
        animation: {
          duration: 400,
          effects: 'fade',
          easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)'
        }
      });
  };
  var initialize = function () {
    $('#landing-wrap').fadeIn(900);
    headerLinks();
    imgOverlay();
  };

  initialize();
});
