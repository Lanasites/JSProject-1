

// const randomIndex = Math.floor(Math.random() * cocktailsAll.length);
import { takeOneCocktail } from './firebase.js';
import { takeAllObjects } from './firebase.js';


//рандомный индекс для коктейля
async function getRandomCocktail() {
    const cocktailsAll = await takeAllObjects("cocktails");
    console.log(cocktailsAll);
    let cocktailsArr = []
    for (let key in cocktailsAll) {
        //console.log(key);
        cocktailsArr.push(key);
    }
    console.log(cocktailsArr);
    const randomIndex = Math.floor(Math.random() * cocktailsArr.length);
    return cocktailsArr[randomIndex];
}



// добавление инфы о коктейле на страницу самого коктейля
const cocktailId = getRandomCocktail();
console.log(cocktailId);

cocktailId
    .then((data) => {
        console.log(data);
        let randomCocktailId = data;
        console.log(randomCocktailId);
        showCocktail(data);
    })
    .catch((err) => console.error('Ошибка:', err));


// let randomCocktailId;
// async function getCocktailFromPromise() {
//     try {
//         // ожидание разрешения промиса
//         randomCocktailId = await cocktailId;
//         console.log(randomCocktailId);
//         showCocktail()
//     } catch (err) {
//         console.error('Ошибка:', err);
//     }
// }

// // Вызываем нашу асинхронную функцию
// getCocktailFromPromise();
// console.log(randomCocktailId);

async function showCocktail(cocktailId) {
    //console.log(cocktailId);
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

document.querySelectorAll('.container-wrapper__recipe-favourite').forEach(container => {
    container.addEventListener('click', function () {

        // проверяю, есть ли уже этот коктейль в избранном
        const favouriteCocktail = window.localStorage.getItem(cocktailId);

        if (!favouriteCocktail) {
            // если нет, то добавляю
            window.localStorage.setItem(cocktailId, 'favourite');
            this.querySelector('.favourite-star').src = "./assets/img/favourite_filled.svg";
            document.querySelector('.label').textContent = 'УДАЛИТЬ ИЗ ИЗБРАННОГО';
        } else {
            // если есть, то удаляю
            window.localStorage.removeItem(cocktailId);
            this.querySelector('.favourite-star').src = "./assets/img/icon_favourites-01.svg";
            document.querySelector('.label').textContent = 'ДОБАВИТЬ В ИЗБРАННОЕ';
        }
    });
});





