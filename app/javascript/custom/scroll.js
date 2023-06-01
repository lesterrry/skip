/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

$(window).on('scroll', (event) => {
	const header = $('.title > .content')
	const stopPoint = 310;  // change to the point where you want the header to start scrolling

	if (window.scrollY < stopPoint) {
		header.css({'position': 'fixed', 'bottom': '0'})
	} else {
		header.css({'position': 'absolute', 'bottom': `-${stopPoint}px`})
	}
})
