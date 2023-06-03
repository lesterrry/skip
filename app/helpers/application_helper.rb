# Handcrafted by Aydar N.
# 2023
#
# me@aydar.media
#

# frozen_string_literal: true

module ApplicationHelper
	def explode_span(text, span_class = nil)
		r = ''
		open = span_class.nil? ? '<span>' : "<span class=#{span_class}>"
		text.each_char do |i|
			r += "#{open}#{i}</span>"
		end
		sanitize(r)
	end
end
