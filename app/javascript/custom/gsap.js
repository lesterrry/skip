/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

import gsap from "gsap"

const $menuItems = $('nav > a')
const $scaling = $('.scaling')
const $spacing = $('.spacing')

$menuItems.on('mouseenter', (event) => {
	gsap.to(event.currentTarget, { width: 100, duration: 0.1 })
})

$menuItems.on('mouseleave', (event) => {
	gsap.to(event.currentTarget, { width: 55, duration: 0.2 })
})

$scaling.on('mouseenter', (event) => {
	gsap.to(event.currentTarget, { scale: 1.05, height: '100%', duration: 0.2 })
})

$scaling.on('mouseleave', (event) => {
	gsap.to(event.currentTarget, { scale: 1, height: '100%', duration: 0.1 })
})

$spacing.on('mouseenter', (event) => {
	gsap.to(event.currentTarget, { letterSpacing: event.currentTarget.classList.contains('low') ? '0.1em' : '0.4em', duration: 0.2 })
})

$spacing.on('mouseleave', (event) => {
	gsap.to(event.currentTarget, { letterSpacing: '0em', duration: 0.2 })
})

