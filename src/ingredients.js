import { takeAllObjects, takeOneCocktail } from './firebase.js'

import { burgerMenu, goToPageAndChangeLinkStyle, searchCocktailByName } from './header.js';
burgerMenu();
goToPageAndChangeLinkStyle();
searchCocktailByName();

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeButton = document.getElementsByClassName("close")[0];


function testGetData() {
  console.log('Функция загрузки данных вызвана');
  // получение промиса
  const promise = takeAllObjects('ingredients');
  //console.log(promise);
  promise
    // .then(response => response.json())
    .then(data => {
      // работаем с полученными данными - объект с объектами
      //console.log(data);
      for (let key in data) {
        // obj - ингредиент со всеми свойствами
        let obj = data[key];
        //console.log(obj);
        print(key, obj.name, obj.cocktails, obj.img);
      }
    })
    .catch(error => {
      // обрабатываем ошибку, если она возникла
      console.error(error);
    });
}

// Функция отображения ингредиентов на странице
function print(id, name, cocktails, img) {
  const printElement = document.getElementById('container_ingredients');
  const template = `
  <div class="container_item">
    <img class="container_item__image" src="${img}" alt="">
    <div class="container_item__ingredient">${name}</div>
    <div class="container_item__coctails"><br> ${cocktails}</div>
    <button class="container_item__btn" id="${id}"><span>Содержится в коктейлях</span></button>
</div>
    `
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  printElement.appendChild(newElement);

  const elem = document.getElementById(id);
  // console.log(elem);

  elem.addEventListener('click', function () {
    openModal(cocktails);
  });
}

testGetData()

// Функция модального окна
function openModal(coctails) {
  modal.style.display = "block";
  coctails.forEach(element => {
    console.log(element); //название коктейля
    let promis = takeOneCocktail(element);
    console.log(promis); //промис этого коктейля
    promis
      .then(data => {
        //console.log(data); //объект со всеми его свойствами
        const template = `
          <div class="modal_item">
            <div class="modal_item-1">
            <img class="modal_item-1__img" src="${data.imageUrl}" alt="">
          </div>
          <div class="modal_item-2">
            <div class="modal_item-2__name">Название: ${data.name}</div>
            <div class="modal_item-2__description"><span>Описание:</span> ${data.description}</div>
            <div class="modal_item-2__cooking"><span>Рецепт:</span> ${data.cooking}</div>
              <ul class="modal_item-2__id" id = ${data.id}></ul>
            </div>
          </div>`
        const newElement = document.createElement('div');
        newElement.innerHTML = template;
        modalContent.appendChild(newElement);
      })
      .catch(error => {
        // обрабатываем ошибку, если она возникла
        console.error(error);
      });
  });
}

// Функция закрытия модального окна
closeButton.onclick = function () {
  modal.style.display = "none";
  modalContent.textContent = '';
}

// Функция закрытия модального окна, если пользователь нажмет на область вне модального окна.
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalContent.textContent = '';
  }
}
// ----------Событие при загрузке страницы для коррекции меню при нажатии на человечка-------------------------------------
// на все страницы с меню надо добавить
import { clickProfileMenu, getMenuForPerson } from './header.js';
document.addEventListener("DOMContentLoaded", getMenuForPerson);
clickProfileMenu();
// ------------------------------------------------------------------------------------------------------------------------