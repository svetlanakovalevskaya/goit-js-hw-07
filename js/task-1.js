const categoriesEl = document.querySelectorAll('.item');

console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach((category) => console.log(
    `Категория: ${category.firstElementChild.textContent}
    Количество элементов: ${category.lastElementChild.children.length}`
));