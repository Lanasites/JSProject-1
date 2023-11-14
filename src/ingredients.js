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
      console.log(data);
      for (let key in data) {
        // obj - ингредиент со всеми свойствами
        let obj = data[key];
        console.log(obj);
        print(key, obj.name, obj.cocktails, obj.img);
      }
      let coctailsElement = document.getElementsByClassName("container_item");

      // Добавление обработчика события клика к каждому ингредиенту
      Array.from(coctailsElement).forEach(function (container_item) {
        container_item.addEventListener('click', function () {
          let name = this.querySelector('.container_item__ingredient').textContent;
          let description = this.querySelector('.container_item__coctails').textContent;

          showModal(name, description);
        });
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
    <div class="container_item__coctails"><span>Содержится в коктейлях:</span><br> ${cocktails}</div>
  </div>
    `
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  printElement.appendChild(newElement);
}

testGetData()

let modalElement = document.getElementById('modal');
// Функция отображения модального окна
function showModal(name, description) {
  modalElement.style.display = 'block';
  modalElement.textContent = 'Информация о товаре:\n'
}



/*
// Функция для обработки события клика
function showInfo() {
  // Создаем новый элемент div с информацией
  const infoElement = document.createElement('div');
  infoElement.textContent = 'Дополнительная информация о коктейлях'; // Вместо этого текста можно добавить свою информацию

  // Добавляем класс для стилизации
  infoElement.classList.add('additional-info');

  // Добавляем информацию внутрь элемента container
  const containerElement = document.getElementById('container');
  containerElement.appendChild(infoElement);
}

// Получаем элемент, на который нужно добавить обработчик события
const cocktailsElement = document.querySelectorAll('.container_item__coctails');

// Добавляем обработчик события клика
cocktailsElement.addEventListener('click', showInfo);
*/





