// ФУНКЦИИ ДЛЯ РАБОТЫ С БД

// Функция записи данных о коктеле
// writeCocktailData(cocktailId, name, description, ingredients, cooking, imageUrl, alcohol)
// пример
// writeCocktailData('margarita', 'Маргарита', 'Описание коктеля', '[{"voda", "100 мл"},{"lemon", "2 дольки"}]', 'приготовление-рецепт', 'https://ru.inshaker.com/uploads/cocktail/hires/57/Bacardi_shooting_5_800.jpg', true);
import {writeCocktailData} from './firebase'

// Функция записи данных об ингридиенте
// writeIngredientData(ingredientId, name, cocktails)
// пример
// writeIngredientData('voda', 'вода', ['margarita', 'limonchello'])
import {writeIngredientData} from './firebase'

// Функция, которая возвращает промис со всеми коктелями или всеми ингридиентами
// takeAllObjects(nameObject)
// takeAllObjects('cocktails') //- коктели
// takeAllObjects('ingredients') //- промис с ингридиентами
// nameObject: ingredients | cocktails
import {takeAllObjects} from './firebase'
// ------------------------------------------------------------------------------------------


