import { takeAllObjects, takeOneCocktail } from './firebase.js'

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
    showModal(cocktails);
  });
}

const modalInfo = document.getElementById('modal_info');
const modalElement = document.getElementById('modal');

// Функция отображения модального окна
function showModal(coctails) {
  modalElement.style.display = 'block';
  coctails.forEach(element => {
    console.log(element); //название коктейля
    let promis = takeOneCocktail(element);
    console.log(promis); //промис этого коктейля
    promis
      .then(data => {
        //console.log(data); //объект со всеми его свойствами
        // работаем с полученными данными - объект с объектами
        //for (let key in data) {
        // obj - ингредиент со всеми свойствами
        //let obj = data[key];
        //console.log(obj);
        //console.log(data.description);

        //const printElement = document.getElementById('print');
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
        modalInfo.appendChild(newElement);

        //{
        // // так как ингредиенты в массиве хранятся, то их отдельно считываем, чтобы сделать список
        //let ingrArr = data.ingredients;
        //console.log(ingrArr); // объект со всеми ингредиентами

        //printSostav(ingrArr)

        // const templateIng = `
        //       <ul class="modal_item-2__id" id = ${data.id}><span>Рецепт:</span></ul>
        //       <li >`${ingrArr.name}: ${ingrArr.quantity}`</li>`
        // const newElement2 = document.createElement('div');
        // newElement2.innerHTML = templateIng;
        // modalElement.appendChild(newElement2);
        // const ingrList = printSostav(ingrArr);
        // const ingr = document.getElementById(id);

        // if (ingr !== null) {
        //   ingr.innerHTML = ingrList;
        //   // console.log(ingr);
        //   const newElement = document.createElement('div');
        //   newElement.innerHTML = template;
        //   modalElement.appendChild(newElement);

        // }
        //}

      })
      .catch(error => {
        // обрабатываем ошибку, если она возникла
        console.error(error);
      });
  });
}

testGetData()

document.querySelector('.btn_close').addEventListener('click', function () {
  modalElement.style.display = 'none';
  modalInfo.textContent = '';
})


// function printSostav(ingrArr) {
//   // console.log(ingrArr);
//   // захотим в массив из ингредиентов для коктеля, чтобы взять свойства
//   let item = '';
//   for (let i = 0; i < ingrArr.length; i++) {
//     // console.log(ingrArr[i]);
//     let kolvo = ingrArr[i].quantity;
//     let name = ingrArr[i].name;

//     item += `< li > ${name}: ${kolvo}</ > `;

//   }
//   // console.log('item', item);
//   return item;
// }
