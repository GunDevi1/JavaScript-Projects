const input = document.querySelector('.qr__input')
const qrCode = document.querySelector('.qr__qr-code-img')
const sizeSelector = document.querySelector('.qr__select')
const firstColor = document.querySelector('.firstColor')
const secondColor = document.querySelector('.secondColor')

input.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		generateQRCode()
	}
})

const generateButton = document.querySelector('.generate')

generateButton.addEventListener('click', function () {
	generateQRCode()
})

function generateQRCode() {
	let size = sizeSelector.options[sizeSelector.selectedIndex].textContent
	let color = firstColor.value.split('#')[1]
	let bgcolor = secondColor.value.split('#')[1]
	qrCode.src = `http://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=${size}&color=${color}&bgcolor=${bgcolor}`
}
