const monoSection = document.querySelector('#monoSection');
const colorSection = document.querySelector('#colorSection');
const colorSwitcher = document.querySelector('#colorSwitcher');
colorSwitcher.addEventListener('change', checkChecker);
monoSection.style.display = 'none';
colorSection.style.display = 'unset';

function checkChecker(event) {
	if (event.target.checked) {
		monoSection.style.display = 'unset';
		colorSection.style.display = 'none';
	} else {
		monoSection.style.display = 'none';
		colorSection.style.display = 'unset';
	}
}
