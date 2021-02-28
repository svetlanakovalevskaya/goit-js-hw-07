const rangeInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rangeInputEl.addEventListener('input', onInputRangeElement);

function onInputRangeElement (event) {
    let startValueRange = +event.target.value;
    textEl.style.fontSize = `${startValueRange + 50}%`;
}