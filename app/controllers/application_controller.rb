# Handcrafted by Aydar N.
# 2023
#
# me@aydar.media
#

# frozen_string_literal: true

class ApplicationController < ActionController::Base
	before_action :set_locale

		private

	def set_locale
		loc = extract_locale
		return if loc.nil?

		I18n.locale = loc
		cookies[:locale] = loc
	end

	def extract_locale
		if !params[:locale].blank?
			parsed_locale = params[:locale]
		elsif !cookies[:locale].blank?
			parsed_locale = cookies[:locale]
		else
			return nil
		end
		I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
	end
end
