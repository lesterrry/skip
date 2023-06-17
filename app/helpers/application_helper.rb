# Handcrafted by Aydar N.
# 2023
#
# me@aydar.media
#

# frozen_string_literal: true

require 'spanned'

module ApplicationHelper
	def explode_span(text, span_class = nil, ignore = ' ')
		r = Spanned.explode(text, span_class: span_class, ignore: ignore)
		sanitize(r)
	end
end
