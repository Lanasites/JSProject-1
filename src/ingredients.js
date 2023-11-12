import { takeAllObjects } from './firebase.js'
import { takeOneIngredient } from './firebase.js'

/*
async function show() {
  try {
    const response = await fetch('./database-ingredients.json');
    console.log(response);
    if (!response.ok) {
      throw new Error(`Ошибка загрузки JSON файла: ${response.status}`);
    }
    const elem = await response.json();
    console.log(elem);
    print();
  } catch (error) {
    console.error(error);
    return null;
  }
}

window.onload = show();
show();

*/

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
    })
    .catch(error => {
      // обрабатываем ошибку, если она возникла
      console.error(error);
    });

}

function print(id, name, cocktails, img) {
  const printElement = document.getElementById('container');
  const template = `
    <img src="${img}" alt="">
    <div>${name}</div>
    <div>Содержится в коктейлях: ${cocktails}</div>
    <ul id = ${id}></ul>
    `
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  printElement.appendChild(newElement);
}


/*
function printSostav(ingrArr) {
  // console.log(ingrArr);
  // захотим в массив из ингредиентов для коктеля, чтобы взять свойства
  let item = '';
  for (let i = 0; i < ingrArr.length; i++) {
    // console.log(ingrArr[i]);
    let kolvo = ingrArr[i].quantity;
    let name = ingrArr[i].Idingredient;
    // const a = await takeOneIngredient(ingrArr[i].Idingredient);
    // let name = a.name;
    // console.log(name, kolvo);
    item += `<li> ${name}: ${kolvo}</li>`;
    // console.log(item);
    // console.log('a',a.name);
    // .then(data => {
    //     name = data.name;
    //     // console.log(name, kolvo);
    //     item = `<li>${name}: ${kolvo}</li>`;
    //     return item;
    //     // throw new Error('ошибка в запросе имени эелента');
    // })
    // .catch(error => {
    //     // обрабатываем ошибку, если она возникла
    //     console.error(error);
    // });
  }
  // console.log('item', item);
  return item;
}
*/

testGetData()
