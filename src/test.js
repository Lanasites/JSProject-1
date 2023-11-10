import { takeAllObjects } from './firebase.js'
import { takeOneIngredient } from './firebase.js'

function testGetData() {
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
                // console.log(obj);
                print(key, obj.username, obj.description, obj.cooking, obj.imageUrl);
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
                    throw new Error('Эметента в БД не найдено');
                }


            }
        })
        .catch(error => {
            // обрабатываем ошибку, если она возникла
            console.error(error);
        });

}

function print(id, name, description, cooking, img) {
    const printElement = document.getElementById('print');
    const template = `
    <img src="${img}" alt="">
    <div>Название: ${name}</div>
    <div>Описание: ${description}</div>
    <div>Рецепт: ${cooking}</div>
    <ul id = ${id}></ul>
    `
    const newElement = document.createElement('div');
    // newElement.classList.add(`${gfdg}`)
    newElement.innerHTML = template;
    printElement.appendChild(newElement);
}

function printSostav(ingrArr) {
    // console.log(ingrArr);
    // захотим в массив из ингредиентов для коктеля, чтобы взять свойства
    let item = '';
    for (let i = 0; i < ingrArr.length; i++) {
        // console.log(ingrArr[i]);
        let kolvo = ingrArr[i].quantity;
        let name = ingrArr[i].Idingredient;

        item += `<li> ${name}: ${kolvo}</li>`;

    }
    // console.log('item', item);
    return item;
}


testGetData()