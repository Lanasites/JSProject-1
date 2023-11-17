
import { takeAllObjects, takeOneCocktail } from './firebase.js'

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

    })
    .catch(error => {
      // обрабатываем ошибку, если она возникла
      console.error(error);
    });

}
// showModal('${cocktails}')
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

  const elem = document.getElementById(id);
  // console.log(elem);

  elem.addEventListener('click', function () {
    showModal(cocktails);

  });

}


// Функция отображения модального окна
function showModal(coctails) {

  coctails.forEach(element => {
    console.log(element);
    let promis = takeOneCocktail(element);
    console.log(promis);
  });
}

testGetData()