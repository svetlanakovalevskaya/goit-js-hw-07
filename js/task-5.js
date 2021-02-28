const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputNameOutput);

function onInputNameOutput (event) {
    nameOutputEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        nameOutputEl.textContent = 'незнакомец';
    }
}