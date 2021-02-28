const validationInputEl = document.querySelector('#validation-input');
const validationNumber = Number(validationInputEl.getAttribute('data-length'));

validationInputEl.addEventListener('change', onChangeValidationInput);

function onChangeValidationInput (event) {
   if (event.currentTarget.value.length === validationNumber) {
            validationInputEl.classList.add('valid');
            validationInputEl.classList.remove('invalid');
    } else if (event.currentTarget.value.length === 0) {
        validationInputEl.classList.remove('invalid');
    }
    else {
        validationInputEl.classList.add('invalid');
        validationInputEl.classList.remove('valid');
    }
}