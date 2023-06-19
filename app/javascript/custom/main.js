/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

import 'jquery'
import gsap from 'gsap'


const setCursor = (hidden) => {
	gsap.killTweensOf($cursor[0])
	gsap.to($cursor[0], { opacity: hidden ? 0 : 1, onComplete: () => {
			setCursorSize(size)
		}
	})
	return hidden
}

const setCursorSize = (size) => {
	$cursor.css({ 'width' : size.width, 'height': size.height })
	return size
}
