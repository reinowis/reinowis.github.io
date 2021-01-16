/**
* Personal Website: Huynh (Reino) Mai
* Template URL: https://reinowis.github.io
* Author: Huynh (Reino) Mai
*/
(function ($) {
	

	$(document).ready(function () {
		$('.venobox').venobox();
		var typed = $(".typed");
		// ========================================================================= //
		//  Typed Text
		// ========================================================================= //
		$(function () {
			var strings = $('.typed-items').text();
			strings = $('.typed-items').data('typed-person') + ',' + strings;
			strings = strings.split(',');

			typed.typed({
				strings: strings,
				typeSpeed: 100,
				loop: true,
			});
		});
		// ========================================================================= //
		//  Observer Header
		// ========================================================================= //
		var stickyElem = $("#menu-nav");
		var observer = new IntersectionObserver(function (e) {
			if ($(window).width() < 992) {
				for (let i = 0; i < e.length; i++) {
					if (e[i].isIntersecting) {
						$("body").toggleClass('is-backdrop', true);
						$("body").append("<div class='header__backdrop'></div>");
					}
					else {
						$("body").toggleClass('is-backdrop', false);
						$(".header__backdrop").remove();
					}
				}
			}

		}, { threshold: [0], rootMargin: '-50px 0px -55%' });
		for (let i = 0; i < stickyElem.length; i++) {
			observer.observe(stickyElem[i]);
		}
		// ========================================================================= //
		//  Observer Menu Tracker
		// ========================================================================= //
		var trackElem = $("[data-tracked]");
		var trackObserver = new IntersectionObserver(function (e) {
			for (let i = 0; i < e.length; i++) {
				let idTracked = $(e[i].target).attr("id");
				let navTracked = $(e[i].target).attr('data-tracked');
				if (e[i].isIntersecting) {
					if (navTracked && $(navTracked).length > 0){
						$(navTracked).find("[href='#" + idTracked + "']").addClass("active");
					}
				}
				else {
					if (navTracked && $(navTracked).length > 0){
						$(navTracked).find("[href='#" + idTracked + "']").removeClass("active");
					}
				}
			}

		}, { threshold: [0], rootMargin: '-50px 0px -55%' });
		for (let i = 0; i < trackElem.length; i++) {
			trackObserver.observe(trackElem[i]);
		}
		// ========================================================================= //
		//  Owl Carousel Skills
		// ========================================================================= //

		$('.skill-list').owlCarousel({
			autoplay: true,
			loop: true,
			margin: 20,
			dots: true,
			nav: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				900: {
					items: 4
				}
			}
		});
		// ========================================================================= //
		//  Owl Carousel Portfolio
		// ========================================================================= //
		$(".portfolio-detail__carousel").owlCarousel({
			autoplay: true,
			dots: true,
			loop: true,
			items: 1
		});
		// ========================================================================= //
		//  Lazy Load
		// ========================================================================= //
		lazyload();
	});

	
	// ========================================================================= //
	//  Smooth Scroll
	// ========================================================================= //
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});

})(jQuery);
function toggleHeader(event){
	$(event.currentTarget).toggleClass("open");
	$("#menu-nav").collapse("toggle");
}