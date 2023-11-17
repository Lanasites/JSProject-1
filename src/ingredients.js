
import { takeAllObjects } from './firebase.js'
//import { takeOneIngredient } from './firebase.js'

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
      let coctailsElement = document.getElementsByClassName("container_item__btn");
      console.log(coctailsElement);
      // Добавление обработчика события клика к каждому ингредиенту
      Array.from(coctailsElement).forEach(function (container_item__btn) {
        container_item__btn.addEventListener('click', showModal()
          //{
          //let name = this.querySelector('.container_item__ingredient').textContent;
          //let description = this.querySelector('.container_item__coctails').textContent;

          //showModal(id, name, description, cooking, img);
          //showModal();
          //}
        );
        console.log(container_item__btn.cocktails);
      });
    })
    .catch(error => {
      // обрабатываем ошибку, если она возникла
      console.error(error);
    });

}

function print(id, name, cocktails, img) {
  const printElement = document.getElementById('container');
  const template = `
  <div class="container_item">
    <img class="container_item__image" src="${img}" alt="">
    <div class="container_item__ingredient">${name}</div>
    <div class="container_item__coctails"><br> ${cocktails}</div>
    <button class="container_item__btn" id="${id}"><span>Содержится в коктейлях:</span></button>
</div>
    `
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  printElement.appendChild(newElement);
  document.getElementById(id).addEventListener('click', showModal(cocktails));
}

testGetData()


// Функции для заполнения модального окна

const modalElement = document.getElementById('modal');

// Функция отображения модального окна
function showModal(cocktails) {
  modalElement.style.display = 'block';
  testGetDataModal();
  const coctailElememt = document.querySelectorAll

  // const newElement = document.createElement('div');
  // newElement.innerHTML = template;
  // modalElement.appendChild(newElement);
  // //modalElement.textContent = 'Информация о товаре:\n'
}

function testGetDataModal() {
  console.log('Функция загрузки данных вызвана');
  // получение промиса
  const promise = takeAllObjects('cocktails');
  // console.log(promise);
  promise
    // .then(response => response.json())
    .then(data => {
      // работаем с полученными данными - объект с объектами
      // console.log(data);
      for (let key in data) {
        // obj - коктель со всеми свойствами
        let obj = data[key];
        // console.log(key.trim);
        printModal(key, obj.name, obj.description, obj.cooking, obj.imageUrl);
        // так как ингредиенты в массиве хранятся, то их отдельно считываем, чтобы сделать список
        let ingrArr = obj.ingredients;
        // console.log(ingrArr);
        const ingrList = printSostav(ingrArr);
        const ingr = document.getElementById(key);

        if (ingr !== null) {
          ingr.innerHTML = ingrList;
          // console.log(ingr);
        }
        else {
          throw new Error('Элемента в БД не найдено');
        }
      }
    })
    .catch(error => {
      // обрабатываем ошибку, если она возникла
      console.error(error);
    });
}

function printModal(id, name, description, cooking, img) {
  //const printElement = document.getElementById('print');
  const template = `
    < div class= "modal_item" >
  <div class="modal_item-1">
  <img class="modal_item-1__img" src="${img}" alt="">
  </div>
  <div class="modal_item-2">
  <div class="modal_item-2__name">Название: ${name}</div>
  <div class="modal_item-2__description"><span>Описание:</span> ${description}</div>
  <div class="modal_item-2__cooking"><span>Рецепт:</span> ${cooking}</div>
  <ul class="modal_item-2__id" id = ${id}></ul>
  </div>
  </ >
    `
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  modalElement.appendChild(newElement);
}

function printSostav(ingrArr) {
  // console.log(ingrArr);
  // захотим в массив из ингредиентов для коктеля, чтобы взять свойства
  let item = '';
  for (let i = 0; i < ingrArr.length; i++) {
    // console.log(ingrArr[i]);
    let kolvo = ingrArr[i].quantity;
    let name = ingrArr[i].name;

    item += `< li > ${name}: ${kolvo}</ > `;

  }
  // console.log('item', item);
  return item;
}

document.querySelector('.btn_close').addEventListener('click', function () {
  modalElement.style.display = 'none';
})






