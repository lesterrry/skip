// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require_tree .

import 'jquery'
import gsap from 'gsap'

const setCursor = (hidden) => {
	gsap.to($cursor[0], { opacity: hidden ? 0 : 1 })
	return hidden
}
