/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

$(window).on('scroll', (event) => {
	const header = $('.title')
	const stopPoint = 310;  // change to the point where you want the header to start scrolling

	if (window.scrollY < stopPoint) {
		header.css({'margin-bottom': `-${window.scrollY}px`})
	} else {
		header.css({'margin-bottom': `-${stopPoint}px`})
	}
})
