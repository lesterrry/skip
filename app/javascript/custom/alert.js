/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

let $alert = $('.alert')
let $alertCall = $('.alert-call')
let $alertMessage = $('.alert p')
let $alertClose = $('.alert .button')

$alertCall.on('click', (event) => {
	event.preventDefault()
	$alertMessage.text(event.currentTarget.dataset.alertMessage)
	$alert.css({'display': 'initial'})
})

$alertClose.on('click', (event) => {
	event.preventDefault()
	$alert.removeAttr('style')
})
