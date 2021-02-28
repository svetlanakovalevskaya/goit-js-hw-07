let counterValue = 0;

const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');

counterEl.firstElementChild.addEventListener('click', onClickDecrementButton);
counterEl.lastElementChild.addEventListener('click', onClickIncrementButton);

function onClickIncrementButton () { 
    counterValue += 1;
    valueEl.textContent = `${counterValue}`;
}

function onClickDecrementButton () { 
    counterValue -= 1;
    valueEl.textContent = `${counterValue}`;
}