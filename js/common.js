$(document).ready(function(){
	/*----------------------------
			PRELAODER
	-----------------------------*/
  
setTimeout(function() {	
	$('#preloader').fadeOut(); 
}, 1000);

	/*----------------------------
				OWL CAROUSEL INIT
	-----------------------------*/

  $(".owl-carousel").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		dots: true,
		center: true,
		margin: 10
	});

	/*----------------------------
			HAMBURGER TOGGLE
	-----------------------------*/

	$('.hamburger, .main-nav_list-item-link').click(function() {
		$('.hamburger').toggleClass(' is-active');
		$('.main-nav_list').toggleClass(' show')
	});	

	/*----------------------------
			TO-TOP BUTTON
	-----------------------------*/

	$(window).scroll(function() {
		if ( $(this).scrollTop() > $(this).height() ) {
			$(".up-button").addClass(" up-button_active")
		} else {
			$(".up-button").removeClass(" up-button_active")
		}
	});

	/*----------------------------
			SMOOTH SCROLL
	-----------------------------*/

	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& 
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});
});