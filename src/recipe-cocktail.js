import cocktail from '../js-project-cocktails.json';
import { takeOneCocktail } from './firebase';

import { getDatabase, ref, get } from "firebase/database";

const dbRef = ref(getDatabase());

// Функция для получения значения cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// добавление инфы о коктейле на страницу самого коктейля
const cocktailId = getCookie('cocktailId');
async function showCocktail() {
    if (cocktailId) {
        try {
            const specificCocktail = await takeOneCocktail(cocktailId);
            console.log('specificCocktail');
            const cocktailImage = document.querySelector('.container-wrapper__pic-img');
            const cocktailName = document.getElementById('name');
            const cocktailDescription = document.getElementById('description');
            const cocktailIngredients = document.getElementById('ingredients');
            const cocktailCooking = document.getElementById('cooking');

            cocktailImage.src = specificCocktail.imageUrl;
            console.log(specificCocktail.imageUrl);
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
        } catch (error) {
            console.error(error.message);
        }
    }
}

document.addEventListener('DOMContentLoaded', showCocktail);
export { showCocktail };


// добавить в избранное

const favouriteCocktails = []; // массив с избранным

document.querySelectorAll('.container-wrapper__recipe-favourite').forEach(container => {
    container.addEventListener('click', function () {
        // этой строчки не будет, будет сразу следующая
        const cocktailId = this.getAttribute('id');

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
