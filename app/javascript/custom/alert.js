/*************************
Handcrafted by Aydar N.
2023

me@aydar.media

*************************/

let $alert = $('dialog.alert')
let $alertCall = $('.alert-call')
let $alertMessage = $('.alert p')

$alertCall.on('click', (event) => {
	event.preventDefault()
	$alertMessage.text(event.currentTarget.dataset.alertMessage)
	$alert[0].showModal()
})
