import cocktail from '../js-project-cocktails.json';

// 
// document.querySelectorAll('.класс контейнера с коктейлем').forEach(cocktail => {
//     cocktail.addEventListener('click', function() {
//         const cocktailId = this.getAttribute('id(тут атрибут, где хранится id коктейля)');
//         document.cookie = `selectedCocktail=${cocktailId}`;
//         window.location.href = 'recipe-cocktail.html'; // перенаправление на страницу с рецептом
//     });
// });

// получаю id коктейля из куки

// const getCocktailId = () => {
//     const cookies = document.cookie.split('; ');
//     for (let i = 0; i < cookies.length; i++) {
//         const cookie = cookies[i].split('=');
//         if (cookie[0] === 'selectedCocktail') {
//             return cookie[1];
//         }
//     }
//     return null;
// };

// добавление инфы о коктейле на страницу самого коктейля

function showCocktail() {
    //const cocktailId = getCocktailId();
    //if (cocktailId) {
    const cocktailImage = document.querySelector('.container-wrapper__pic-img');
    const cocktailName = document.getElementById('name');
    const cocktailDescription = document.getElementById('description');
    const cocktailIngredients = document.getElementById('ingredients');
    const cocktailCooking = document.getElementById('cooking');

    //const specificCocktail = cocktail['cocktailId'];
    const specificCocktail = cocktail['Bumblebee'];
    cocktailImage.src = specificCocktail.imageUrl;
    cocktailImage.alt = specificCocktail.idcocktail;

    const itemName = document.createElement('p');
    itemName.textContent = specificCocktail.name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = specificCocktail.description;

    const itemIngredients = document.createElement('ul');
    specificCocktail.ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = `${ingredient.name}: ${ingredient.quantity}`;
        itemIngredients.appendChild(listItem);
    });

    const itemCooking = document.createElement('p');
    itemCooking.textContent = specificCocktail.cooking;


    cocktailName.appendChild(itemName);
    cocktailDescription.appendChild(itemDescription);
    cocktailIngredients.appendChild(itemIngredients);
    cocktailCooking.appendChild(itemCooking);
    //}
    // else {
    //     // если id коктейля не найден, то переадресация на страницу с ошибкой
    //     window.location.href = 'index.html'; // тут пока основная
    // }
};

showCocktail();



// добавить в избранное

const favouriteCocktails = []; // массив с избранным

document.querySelectorAll('.container-wrapper__recipe-favourite').forEach(container => {
    container.addEventListener('click', function () {
        const cocktailId = this.getAttribute('data-cocktail-id');

        // проверяю, есть ли уже этот коктейль в избранном
        const index = favouriteCocktails.indexOf(cocktailId);

        if (index === -1) {
            // если нет, то добавляю
            favouriteCocktails.push(cocktailId);
            this.querySelector('.favourite-star').src = "./assets/img/favourite_filled.svg";
        } else {
            // если есть, то удаляю
            favouriteCocktails.splice(index, 1);
            this.querySelector('.favourite-star').src = "./assets/img/icon_favourites-01.svg";
        }

        // тут 
    });
});
