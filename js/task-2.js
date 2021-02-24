const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const createIngredientsColletion = ingredients => {
    return ingredients.map(ingredient => {
        const ingredientEl = document.createElement('li');
        ingredientEl.textContent = ingredient;
        return ingredientEl;
    });
};

const ingredientElements = createIngredientsColletion(ingredients);
ingredientsEl.append(...ingredientElements);