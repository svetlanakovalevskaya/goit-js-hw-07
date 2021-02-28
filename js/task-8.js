const controlsEl = document.querySelector('#controls');
const renderButtonEl = document.querySelector('[data-action="render"]');
const destroyButtonEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

let boxesAmount = 0;

controlsEl.firstElementChild.addEventListener('blur', onChangeRangeInput);
renderButtonEl.addEventListener('click', onClickRenderButton);
destroyButtonEl.addEventListener('click', onClickDestroyButton);

function createBoxes(amount) {

    const boxesArray = [];
    let width = 20;
    let height = 20;

    for (let i = 0; i < amount; i += 1) {
        const el = document.createElement('div');
        el.classList.add('box');
        width += 10;
        height += 10;
        el.style.backgroundColor = `rgb(
            ${Math.random() * (100 - 1) + 1}%, 
            ${Math.random() * (100 - 1) + 1}%, 
            ${Math.random() * (100 - 1) + 1}%
        )`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        console.log(el);
        boxesArray.push(el);
    }

    boxesEl.append(...boxesArray);
}

function onChangeRangeInput () {
    boxesAmount = Number(controlsEl.firstElementChild.value);
}

function onClickRenderButton () {
    createBoxes(boxesAmount);
    controlsEl.firstElementChild.value = 0;
}

function onClickDestroyButton () {
    boxesEl.innerHTML = '';
}