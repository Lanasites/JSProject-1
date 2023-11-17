import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

import cocktail from '../database-cocktail.json';

import { writeCocktailData } from './firebase.js'

// добавление инфы о коктейле на страницу самого коктейля

function showCocktail() {
    const cocktailImage = document.querySelector('.container-wrapper__pic-img');
    const cocktailName = document.getElementById('name');
    const cocktailDescription = document.getElementById('description');
    const cocktailIngredients = document.getElementById('ingredients');
    const cocktailCooking = document.getElementById('cooking');

    const specificCocktail = cocktail['Mojito'];
    const itemImage = document.createElement('img');
    itemImage.src = specificCocktail.imageUrl;
    itemImage.alt = specificCocktail.idcocktail;

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

    cocktailImage.appendChild(itemImage);
    cocktailName.appendChild(itemName);
    cocktailDescription.appendChild(itemDescription);
    cocktailIngredients.appendChild(itemIngredients);
    cocktailCooking.appendChild(itemCooking);
};

showCocktail();


// // рандомный коктейль
// function getRandomCocktail() {
//     const randomIndex = Math.floor(Math.random() * cocktail.length);
//     return cocktail[randomIndex];
// }

// function showRandomCocktail() {
//     const cocktailImage = document.querySelector('.container-wrapper__pic-img');
//     const cocktailName = document.getElementById('name');
//     const cocktailDescription = document.getElementById('description');
//     const cocktailIngredients = document.getElementById('ingredients');
//     const cocktailCooking = document.getElementById('cooking');

//     const randomCocktail = getRandomCocktail();

//     cocktailImage.src = randomCocktail.image;
//     cocktailImage.alt = randomCocktail.idcocktail;

//     const itemName = document.createElement('p');
//     itemName.textContent = randomCocktail.name;

//     const itemDescription = document.createElement('p');
//     itemDescription.textContent = randomCocktail.description;

//     const itemIngredients = document.createElement('ul');
//     randomCocktail.ingredients.forEach(ingredient => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${ingredient.name}: ${ingredient.quantity}`;
//         itemIngredients.appendChild(listItem);
//     });

//     const itemCooking = document.createElement('p');
//     itemCooking.textContent = randomCocktail.cooking;

//     cocktailName.appendChild(itemName);
//     cocktailDescription.appendChild(itemDescription);
//     cocktailIngredients.appendChild(itemIngredients);
//     cocktailCooking.appendChild(itemCooking);
// }

// document.getElementById('random-cocktail-page').addEventListener('click',)
// showRandomCocktail();

// document.getElementById('button').addEventListener('click', showCoctail);