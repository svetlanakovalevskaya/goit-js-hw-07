const rangeInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = '50px';

rangeInputEl.addEventListener('input', onInputRangeElement);

function onInputRangeElement (event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}