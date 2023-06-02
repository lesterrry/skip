/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

$(window).on('scroll', () => {
	const $title = $('.title > .content')
	const $footer = $('footer')
	const $menu = $('nav')
	const stopPoint = 310
	const footerPoint = document.documentElement.scrollHeight - window.innerHeight - window.scrollY - $footer[0].clientHeight

	if (window.scrollY < stopPoint) {
		$title.css({'position': 'fixed', 'bottom': '0'})
	} else {
		$title.css({'position': 'absolute', 'bottom': `-${stopPoint}px`})
	}

	if (footerPoint < -2) {
		console.log('aaa')
		$menu.css({'height': `calc(100% - ${- 	footerPoint - 2}px)`})
	} else {
		$menu.removeAttr('style')
	}
})
