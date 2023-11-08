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

// Функция записи данных о коктеле
function writeCocktailData(cocktailId, name, description, ingredients, cooking, imageUrl, alcohol) {
    set(ref(database, 'cocktails/' + cocktailId), {
        username: name,
        description: description,
        ingredients: ingredients,
        cooking: cooking,
        imageUrl: imageUrl,
        alcohol: alcohol
    });
}
export { writeCocktailData };

// Функция записи данных об ингридиенте
function writeIngredientData(ingredientId, name, cocktails) {
    set(ref(database, 'ingredients/' + ingredientId), {
        username: name,
        cocktails: cocktails
    });
}
export { writeIngredientData };
// writeCocktailData('margarita', 'Маргарита', 'Описание коктеля', '[{"voda", "100 мл"},{"lemon", "2 дольки"}]', 'приготовление-рецепт', 'https://ru.inshaker.com/uploads/cocktail/hires/57/Bacardi_shooting_5_800.jpg', true);
// writeIngredientData('voda', 'вода', ['margarita', 'limonchello'])

// чтение данных для вывода на странице 
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
export { takeAllObjects };// возвращает промис с объектами takeAllObjects('cocktails');

// console.log(takeAllObjects('cocktails'));

// const objects = takeAllObjects('ingredients');
// objects.then(function (value) {
//     const ingridients = JSON.stringify(value);
//     console.log(value);
//     console.log(`Из промиса получены данные: ${ingridients}`);
// })
// console.log('objects', objects);