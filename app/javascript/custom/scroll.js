/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

const $title = $('.title > .content')
const $titleText = $('.title .text')
const $footer = $('footer')
const $menu = $('nav.desktop')

const titleRemainPoint = 70

const setScroll = () => {
	const footerPoint = document.documentElement.scrollHeight - window.innerHeight - window.scrollY - $footer[0].clientHeight

	if ($titleText[0]) {
		if ($titleText[0].clientHeight - window.scrollY > titleRemainPoint) {
			$title.css({'position': 'fixed', 'bottom': '0'})
			cursorSize.base = cursorSize.target = { width: 400, height: 400 }
		} else {
			$title.css({'position': 'absolute', 'bottom': `-${$titleText[0].clientHeight - titleRemainPoint}px`})
			cursorSize.base = cursorSize.target = { width: 100, height: 100 }
		}
	}

	if(!MOBILE) {
		if (footerPoint / (window.innerHeight) < -0.7) {
			$menu.css({'height': `30%`})
		} else if (footerPoint < -2) {
			$menu.css({'height': `calc(100% - ${-footerPoint - 2}px)`})
		} else {
			$menu.removeAttr('style')
		}
	}
}


$(window).on('scroll', () => {
	setScroll()
	$cursorHook = null
})

$(() => {
	setScroll()
})
