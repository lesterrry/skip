# frozen_string_literal: true

# Pin npm packages by running ./bin/importmap

pin 'application', preload: true
pin 'gsap', to: 'https://ga.jspm.io/npm:gsap@3.11.5/index.js', preload: true
pin 'jquery', to: 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.js', preload: true
