import cocktail from '../js-project-cocktails.json';

//рандомный индекс для коктейля
function getRandomCocktail() {
    const randomIndex = Math.floor(Math.random() * cocktail.length);
    return cocktail[randomIndex];
}

// добавление инфы о коктейле на страницу самого коктейля

function showRandomCocktail() {
    const randomCocktail = getRandomCocktail();

    const cocktailImage = document.querySelector('.container-wrapper__pic-img');
    const cocktailName = document.getElementById('name');
    const cocktailDescription = document.getElementById('description');
    const cocktailIngredients = document.getElementById('ingredients');
    const cocktailCooking = document.getElementById('cooking');

    //const specificCocktail = cocktail['Bumblebee'];
    cocktailImage.src = randomCocktail.imageUrl;
    cocktailImage.alt = randomCocktail.idcocktail;

    //cocktailImage.src = specificCocktail.imageUrl;
    //cocktailImage.alt = specificCocktail.idcocktail;

    const itemName = document.createElement('p');
    itemName.textContent = randomCocktail.name;
    //itemName.textContent = specificCocktail.name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = randomCocktail.description;
    //itemDescription.textContent = specificCocktail.description;

    const itemIngredients = document.createElement('ul');
    randomCocktail.ingredients.forEach(ingredient => {
        //specificCocktail.ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = `${ingredient.name}: ${ingredient.quantity}`;
        itemIngredients.appendChild(listItem);
    });

    const itemCooking = document.createElement('p');
    itemCooking.textContent = randomCocktail.cooking;
    //itemCooking.textContent = specificCocktail.cooking;


    cocktailName.appendChild(itemName);
    cocktailDescription.appendChild(itemDescription);
    cocktailIngredients.appendChild(itemIngredients);
    cocktailCooking.appendChild(itemCooking);
};

showRandomCocktail();