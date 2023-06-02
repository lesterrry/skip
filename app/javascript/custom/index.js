/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

import gsap from "gsap"

const $title = $('.title > .content')
const $footer = $('footer')
const $menu = $('nav')
const $menuItems = $('nav > div')
const titleStopPoint = 310
const menuStopPoint = 500

$(window).on('scroll', () => {
	const footerPoint = document.documentElement.scrollHeight - window.innerHeight - window.scrollY - $footer[0].clientHeight

	if (window.scrollY < titleStopPoint) {
		$title.css({'position': 'fixed', 'bottom': '0'})
	} else {
		$title.css({'position': 'absolute', 'bottom': `-${titleStopPoint}px`})
	}

	if (footerPoint < - menuStopPoint) {
		$menu.css({'height': `calc(100% - ${menuStopPoint - 2}px)`})
	} else if (footerPoint < -2) {
		$menu.css({'height': `calc(100% - ${- 	footerPoint - 2}px)`})
	} else {
		$menu.removeAttr('style')
	}
})

$menuItems.on('mouseenter', (event) => {
	gsap.to(event.currentTarget, { width: 100, duration: 0.1 })
})

$menuItems.on('mouseleave', (event) => {
	gsap.to(event.currentTarget, { width: 55, duration: 0.2 })
})
