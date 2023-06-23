# Handcrafted by Aydar N.
# 2023
#
# me@aydar.media
#

# frozen_string_literal: true

class PagesController < ApplicationController
  def index; end
  def events; end
  def model_a; end
  def store; end
  def space; end

  def not_found
    render 'not_found', status: 404
  end
end
