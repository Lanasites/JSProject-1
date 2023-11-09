import { writeCocktailData } from './firebase'
import { writeIngredientData } from './firebase'

async function loadJSONFile(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки JSON файла: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function addCockteils() {
    // получение массива данных из файла json
    const cocktailArr = await loadJSONFile('./database-cocktail.json')
    cocktailArr.forEach(element => {
        writeCocktailData(element.idcocktail, element.name, element.description, element.ingredients, element.cooking, element.image, element.alcohol);
        // console.log(element);
    });
}
// addCockteils();

async function addIngridiens() {
    const ingridientArr = await loadJSONFile('./database-ingredients.json')
    ingridientArr.forEach(element => {
        writeIngredientData(element.idingredient, element.name, element.cocktails);
        // console.log(element);
    });
}

// addIngridiens();