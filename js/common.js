$(window).scroll(function() {
	if ( $(this).scrollTop() > $(this).height() ) {
		$(".up-button").addClass(" active")
	} else {
		$(".up-button").removeClass(" active")
	}
});



$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		dots: true
	});
	$('.hamburger').click(function() {
		$(this).toggleClass(' is-active');
		$('.main-nav_list').toggleClass(' show')
	});	
	// Select all links with hashes
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