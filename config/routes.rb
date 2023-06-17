# frozen_string_literal: true

Rails.application.routes.draw do
	# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

	root 'pages#index'
	get '/events', to: 'pages#events'
	get '/model-a', to: 'pages#model_a'
end
