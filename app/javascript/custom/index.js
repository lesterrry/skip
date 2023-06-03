/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

import gsap from "gsap"

const $title = $('.title > .content')
const $footer = $('footer')
const $menu = $('nav')
const $menuItems = $('nav > a')
const titleStopPoint = 310
const menuStopPoint = 500

const setScroll = () => {
	const footerPoint = document.documentElement.scrollHeight - window.innerHeight - window.scrollY - $footer[0].clientHeight

	if (window.scrollY < titleStopPoint) {
		$title.css({'position': 'fixed', 'bottom': '0'})
	} else {
		$title.css({'position': 'absolute', 'bottom': `-${titleStopPoint}px`})
	}

	if (footerPoint / (window.innerHeight) < -0.6) {
		$menu.css({'height': `40%`})
	} else if (footerPoint < -2) {
		$menu.css({'height': `calc(100% - ${- 	footerPoint - 2}px)`})
	} else {
		$menu.removeAttr('style')
	}
}

$(window).on('scroll', () => {
	setScroll()
})

$menuItems.on('mouseenter', (event) => {
	gsap.to(event.currentTarget, { width: 100, duration: 0.1 })
})

$menuItems.on('mouseleave', (event) => {
	gsap.to(event.currentTarget, { width: 55, duration: 0.2 })
})

$(() => {
	setScroll()
})
