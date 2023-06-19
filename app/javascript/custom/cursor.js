/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

let $cursor = $('figure.cursor')

let cursorHidden = true
let cursorPosition = {
	current: {
		x: 0,
		y: 0
	},
	target: {
		x: 0,
		y: 0
	}
}

let cursorSize = {
	current: {
		width: 400,
		height: 400
	},
	target: {
		width: 400,
		height: 400
	},
	base: {
		width: 400,
		height: 400
	}
}
let lastTime = 0;

$(window).on('mousemove', (event) => {
	if (cursorHidden) cursorHidden = setCursor(false)
	cursorPosition.target.x = event.clientX
	cursorPosition.target.y = event.clientY
})

const animate = (currentTime) => {
	const deltaTime = (currentTime - lastTime) / 1000; // in seconds

	lastTime = currentTime;

	cursorPosition.current.x += (cursorPosition.target.x - cursorPosition.current.x - (cursorSize.current.width * 0.25)) * deltaTime * 5
	cursorPosition.current.y += (cursorPosition.target.y - cursorPosition.current.y - (cursorSize.current.height * 0.75)) * deltaTime * 5

	cursorSize.current.width += (cursorSize.target.width - cursorSize.current.width) * deltaTime * 5
	cursorSize.current.height += (cursorSize.target.height - cursorSize.current.height) * deltaTime * 5

	const t = `translate3d(${cursorPosition.current.x}px,${cursorPosition.current.y}px,0px)`
	$cursor.css({'transform': t,
		'webkitTransform': t,
		'mozTransform': t,
		'msTransform': t,
		'width': cursorSize.current.width,
		'height': cursorSize.current.height,
		'border-radius': cursorSize.current.height / 10
	})

	window.requestAnimationFrame(animate)
}

setCursorSize(cursorSize.current)

window.requestAnimationFrame(animate)
