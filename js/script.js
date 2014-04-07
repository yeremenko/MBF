$(document).ready(function () {

	var $window = $(window);

	var adjustHeight = function () {
		var $winW   = $(window).width(),
			$winH   = $(window).height(),
			$hero	= $('#hero');
			
		$hero.css('height' , $winH);

		// console.log($winH,$winW);
	};

	$('header a , #cta-btn').on('click' , function (evt) {
	 	evt.preventDefault();
	 	
	 	var url = $(this).attr('href');
	 	$('#main-wrap').load(url + ' ' + '#main');
	 });

	adjustHeight();

	$window.on('resize' , adjustHeight);


});