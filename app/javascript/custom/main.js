/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

import 'jquery'
import gsap from 'gsap'

const setCursor = (hidden) => {
	gsap.to($cursor[0], { opacity: hidden ? 0 : 1 })
	return hidden
}

const setCursorSize = (size) => {
	$cursor.css({ 'width' : size.width, 'height': size.height })
	return size
}
