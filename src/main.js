// --------------------------ФУНКЦИИ ДЛЯ РАБОТЫ С БД----------------------------
// 
//Для подключения БД
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

// --------------------------админские----------------------------

// Функция добавления коктелей из файла database-cocktail.json
// запускается только, когда были изменения в файле с данными, один раз в начале проекта
// далее при необходимости
import { addCockteils } from './UpdateData.js'
// addCockteils()

// Функция добавления ингредиентолв из файла database-ingredients.json
// запускается только, когда были изменения в файле с данными, один раз в начале проекта
// далее при необходимости
import { addIngridiens } from './UpdateData.js'

// --------------------------для отображения контента на сайте----------------------------
// Функция записи данных о коктеле
// writeCocktailData(cocktailId, name, description, ingredients, cooking, imageUrl, alcohol)
// пример
// writeCocktailData('margarita', 'Маргарита', 'Описание коктеля', '[{"voda", "100 мл"},{"lemon", "2 дольки"}]', 'приготовление-рецепт', 'https://ru.inshaker.com/uploads/cocktail/hires/57/Bacardi_shooting_5_800.jpg', true);
import { writeCocktailData } from './firebase.js'

// Функция записи данных об ингридиенте
// writeIngredientData(ingredientId, name, cocktails)
// пример
// writeIngredientData('voda', 'вода', ['margarita', 'limonchello'])
import { writeIngredientData } from './firebase.js'

// Функция, которая возвращает промис со всеми коктелями или всеми ингридиентами
// takeAllObjects(nameObject)
// takeAllObjects('cocktails') //- коктели
// takeAllObjects('ingredients') //- промис с ингридиентами
// nameObject: ingredients | cocktails
import { takeAllObjects } from './firebase.js'

// Функция, которая возвращает промис с определенным коктелем по ID 
// пример
// takeOneCocktail('Bumblebee');
import { takeOneCocktail } from './firebase.js'

// Функция, которая возвращает промис с определенным ингредиентом по ID 
// пример
// takeOneIngredient('lemon');
import { takeOneIngredient } from './firebase.js'

// Функция, которая возвращает промис объектами-коктелями по типу алкогольные или нет
// Использование функции takeAlkoCocktail
// takeAlkoCocktail(false) //true
//     .then(arr => {
//         // Обрабатываем результат - массив найденных коктейлей
//         console.log(arr);
//     })
//     .catch(error => {
//         // Обрабатываем ошибку, если она возникла
//         console.error(error);
//     });
import { takeAlkoCocktail } from './firebase.js'


// ------------------------------------------------------------------------------------------import Splide from '@splidejs/splide';
/*document.addEventListener("DOMContentLoaded", function () {
  const agePopup = document.getElementById("age-confirmation-popup");
  const ageInput = document.getElementById("age-input");
  const confirmBtn = document.getElementById("confirm-btn");

  confirmBtn.addEventListener("click", function () {
    const age = parseInt(ageInput.value);

    if (age >= 18) {
      agePopup.style.display = "none";
    } else {
      alert("Вы должны быть старше 18 лет!");
    }
  });
});*/


const mySlider = new Splide('.splide');
mySlider.mount();
new Splide( '.splide', {
  type   : 'loop',
  perPage: 3,
} );