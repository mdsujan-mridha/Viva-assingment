$(document).ready(function () {

	// navigate_courosel_area
	$('.navigate_courosel_area').owlCarousel({
		items: 2.6,
		loop: true,
		nav: true,
		dots: false,
		margin: 10,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			991: {
				items: 1.6
			},
			1200: {
				items: 2.6
			}
		}
	})


	// founder_right_courosel
	$('.founder_right_courosel').owlCarousel({
		items: 1.7,
		loop: true,
		nav: true,
		dots: false,
		margin: 10,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
	})

	// founder_right_courosel
	$('.founder_right_courosel_mobile').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		margin: 10,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
	})


	// founder_right_courosel
	$('.navigate_courosel_area_mobile').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		margin: 10,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
	})
	// mobile-menu
	$('.mobile_bars').click(function () {
		$('.header_menu_area').toggle();
	})
})


// stagePadding:0 100