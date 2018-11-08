// 1.home-banner
$(document).ready(function () {
	$('.home-banner .owl-carousel').owlCarousel({
		nav: true,
		dots: false,
		items: 1,
		loop: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			768: {
				nav: false,
				dots: true
			}
		}
	});
});
//2.home-services
$(document).ready(function () {
	$('.home-services .owl-carousel').owlCarousel({
		dots: false,
		items: 1,
		loop: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			768: {
				items: 3
			}
		}
	});
});
