/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

let $cursor = $('figure.cursor')

let hidden = true
let position = {
	current: {
		x: 0,
		y: 0
	},
	target: {
		x: 0,
		y: 0
	}
}
let lastTime = 0;
let size = {
	width: 400,
	height: 400
}

$(window).on('mousemove', (event) => {
	if (hidden) hidden = setCursor(false)
	position.target.x = event.clientX
	position.target.y = event.clientY
})

const animate = (currentTime) => {
	const deltaTime = (currentTime - lastTime) / 1000; // in seconds

	lastTime = currentTime;

	position.current.x += (position.target.x - position.current.x) * deltaTime * 5
	position.current.y += (position.target.y - position.current.y) * deltaTime * 5

	const t = `translate3d(${position.current.x - 100}px,${position.current.y - 300}px,0px)`
	$cursor.css({'transform': t, 'webkitTransform': t, 'mozTransform': t, 'msTransform': t})

	window.requestAnimationFrame(animate)
}

setCursorSize(size)

window.requestAnimationFrame(animate)
