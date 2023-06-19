/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

const $menuItems = $('nav > a')
const $scaling = $('.scaling')
const $spacing = $('.spacing')
const $stretching = $('.stretching')
const $hideCursor = $('.hide-cursor')

const getChildTarget = (event, className, childSelector) => {
	let target
	if ($(event.currentTarget).hasClass(className)) {
		target = $(event.currentTarget).children(childSelector)[0]
	} else {
		target = event.currentTarget
	}
	return target
}

$hideCursor.on('mouseover', () => {
	cursorHidden = setCursor(true)
})

$hideCursor.on('mouseleave', () => {
	cursorHidden = setCursor(false)
})

$menuItems.on('mouseenter', (event) => {
	gsap.to(event.currentTarget, { width: 100, duration: 0.1 })
})

$menuItems.on('mouseleave', (event) => {
	gsap.to(event.currentTarget, { width: 55, duration: 0.2 })
})

$scaling.on('mouseenter', (event) => {
	let target = getChildTarget(event, 'list-element', 'img')
	gsap.killTweensOf(target)
	gsap.to(target, { scaleX: 1.05, height: '100%', duration: 0.2 })
	cursorSize.target = { width: cursorSize.base.width + 25, height: cursorSize.base.height + 25 }
})

$scaling.on('mouseleave', (event) => {
	let target = getChildTarget(event, 'list-element', 'img')
	gsap.killTweensOf(target)
	gsap.to(target, { scaleX: 1, height: '100%', duration: 0.2 })
	cursorSize.target = cursorSize.base
})

$spacing.on('mouseenter', (event) => {
	gsap.to(event.currentTarget, { letterSpacing: '0.1em', duration: 0.2 })
})

$spacing.on('mouseleave', (event) => {
	gsap.to(event.currentTarget, { letterSpacing: '0em', duration: 0.2 })
})

$stretching.on('mouseenter', (event) => {
	gsap.to(event.currentTarget, {  scaleX: 1.5, letterSpacing: '0.4em', duration: 0.2 })
	cursorSize.target = { width: cursorSize.base.width + 100, height: cursorSize.base.height - 20 }
})

$stretching.on('mouseleave', (event) => {
	gsap.to(event.currentTarget, {  scaleX: 1, letterSpacing: '0em', duration: 0.2 })
	cursorSize.target = cursorSize.base
})
