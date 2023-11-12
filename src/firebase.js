// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9NxHk9mUmNACk8EFBrFi1_kuCyyWKCEU",
    authDomain: "js-project-1-49be0.firebaseapp.com",
    databaseURL: "https://js-project-1-49be0-default-rtdb.firebaseio.com",
    projectId: "js-project-1-49be0",
    storageBucket: "js-project-1-49be0.appspot.com",
    messagingSenderId: "580525730958",
    appId: "1:580525730958:web:47489777447b08c50b2ddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database);
// console.log(database);

// -----------------------------------------------------------------------------------------------------------
// Функция записи данных о коктеле
function writeCocktailData(cocktailId, name, description, ingredients, cooking, imageUrl, alcohol) {
    set(ref(database, 'cocktails/' + cocktailId), {
        name: name,
        description: description,
        ingredients: ingredients,
        cooking: cooking,
        imageUrl: imageUrl,
        alcohol: alcohol
    });
    console.log('данные о коктелях добаылены в БД');
}
export { writeCocktailData };

// -----------------------------------------------------------------------------------------------------------
// Функция записи данных об ингридиенте
function writeIngredientData(ingredientId, name, cocktails) {
    set(ref(database, 'ingredients/' + ingredientId), {
        name: name,
        cocktails: cocktails
    });
    console.log('данные об ингредиентах добаылены в БД');
}
export { writeIngredientData };
// writeCocktailData('margarita', 'Маргарита', 'Описание коктеля', '[{"voda", "100 мл"},{"lemon", "2 дольки"}]', 'приготовление-рецепт', 'https://ru.inshaker.com/uploads/cocktail/hires/57/Bacardi_shooting_5_800.jpg', true);
// writeIngredientData('voda', 'вода', ['margarita', 'limonchello'])

// -----------------------------------------------------------------------------------------------------------
// удаление коктейлей 


// -----------------------------------------------------------------------------------------------------------
// чтение данных для вывода на странице 

// Функция, которая возвращает промис со всеми коктелями или всеми ингредиентами
// nameObject: ingredients | cocktails
async function takeAllObjects(nameObject) {
    // обращение к обьекту 
    try {
        const snapshot = await get(child(dbRef, `${nameObject}`));
        if (snapshot.exists()) {
            // console.log(snapshot.val());
            return snapshot.val(); // возвращает промис с объектами
        } else {
            throw new Error("Запрашиваемого объекта нет");
        }
    } catch (error) {
        console.error(error);
        return null; // Возвращаем null в случае ошибки
    }
}
// возвращает промис с объектами 
// takeAllObjects('cocktails') //- коктели
// takeAllObjects('ingredients') - промис с ингридиентами
export { takeAllObjects };
// console.log(takeAllObjects('cocktails'));
// const objects = takeAllObjects('ingredients');
// objects.then(function (value) {
//     const ingridients = JSON.stringify(value);
//     console.log(value);
//     console.log(`Из промиса получены данные: ${ingridients}`);
// })
// console.log('objects', objects);


// -----------------------------------------------------------------------------------------------------------
// Функция, которая возвращает промис с определенным коктелем по ID 
async function takeOneCocktail(idCocktail) {
    // обращение к обьекту 
    try {
        const snapshot = await get(child(dbRef, `cocktails/${idCocktail}`));
        if (snapshot.exists()) {
            // console.log(snapshot.val());
            return snapshot.val(); // возвращает промис с объектами
        } else {
            throw new Error("Запрашиваемого коктеля нет");
        }
    } catch (error) {
        console.error(error);
        return null; // Возвращаем null в случае ошибки
    }
} export { takeOneCocktail };

// -----------------------------------------------------------------------------------------------------------

// Функция, которая возвращает промис с определенным ингредиентом по ID 
async function takeOneIngredient(idIngredient) {
    // обращение к обьекту 
    try {
        const snapshot = await get(child(dbRef, `ingredients/${idIngredient}`));
        if (snapshot.exists()) {
            console.log(snapshot.val());
            return snapshot.val(); // возвращает промис с объектами
        } else {
            throw new Error("Запрашиваемого коктеля нет");
        }
    } catch (error) {
        console.error(error);
        return null; // Возвращаем null в случае ошибки
    }
} export { takeOneIngredient };

// -----------------------------------------------------------------------------------------------------------

// Функция, которая возвращает промис с коктелями на определенную букву 
async function takeWordCocktail(word) {
    // выбираем все коктели
    // takeAllObjects(cocktails);
}
export { takeWordCocktail };


// -----------------------------------------------------------------------------------------------------------

// Функция, которая возвращает массив с коктелями по типу алкогольные или нет
function takeAlkoCocktail(alcohol) {
    return new Promise((resolve, reject) => {
        takeAllObjects('cocktails')
            .then(data => {
                let arr = [];
                for (let cocktail in data) {
                    let obj = data[cocktail];

                    if (obj.alcohol === alcohol) {
                        arr.push(obj);
                    }
                }
                // console.log(arr);
                resolve(arr);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export { takeAlkoCocktail };