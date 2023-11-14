import { takeAllObjects } from './firebase.js';
import { takeAlkoCocktail } from './firebase.js';
import { gallerySlider } from './gallerySlider';
import { Grid } from '@splidejs/splide-extension-grid';

const splideList = document.getElementById('splideList');

export async function fetchAllCocktails() {
    try {
        splideList.innerHTML = '';
        const data = await takeAllObjects('cocktails');
        for (let key in data) {
            let obj = data[key];
            printCocktailPreview(obj);
        }
        gallerySlider.mount({ Grid });
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

export async function fetchAlcoCocktails(alcohol) {
    try {
        splideList.innerHTML = '';
        const data = await takeAlkoCocktail(alcohol);
        for (let key in data) {
            let obj = data[key];
            printCocktailPreview(obj);
        }
        gallerySlider.mount({ Grid });
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

// makes a div, puts pic and name into it. will be used to print small cocktail cards
const printCocktailPreview = item => {
    let newSlide = document.createElement('li');
    newSlide.className = 'splide__slide';
    const newCocktail = document.createElement('a');
    newCocktail.className = 'preview';
    newCocktail.id = item.name;
    newCocktail.href = './index.html';
    const template = `<img src=${item.imageUrl} alt=${item.name} class="preview-img" />
    <div class="preview-title">${item.name}</div>`;
    newCocktail.innerHTML = `${template}`;
    newCocktail.addEventListener('click', function() {
        document.cookie = `cocktailId=${item.name}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `cocktailId = ${item.name}`;
    });
    newSlide.appendChild(newCocktail);
    splideList.appendChild(newSlide);
};
