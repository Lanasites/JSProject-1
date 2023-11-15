import { takeAllObjects } from './firebase.js';
import { takeAlkoCocktail } from './firebase.js';
import { takeCocktailByLetter } from './firebase.js';
import { gallerySlider } from './cocktailsGallerySlider.js';
import { Grid } from '@splidejs/splide-extension-grid';
import { printCocktailPreview } from './cocktailsCocktailAndErrorPrint.js';
import { printErrorPreview } from './cocktailsCocktailAndErrorPrint.js';
import { printWaitPreview } from './cocktailsCocktailAndErrorPrint.js';

const splideList = document.getElementById('splideList');

export async function fetchAllCocktails() {
    try {
        printWaitPreview();
        splideList.innerHTML = '';
        const data = await takeAllObjects('cocktails');
        if (data.length === 0) {
            console.log(`No cocktails available starting with the letter ${letter}`);
            printErrorPreview();
        } else {
            for (let key in data) {
                let obj = data[key];
                printCocktailPreview(obj);
            }
            gallerySlider.mount({ Grid });
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

export async function fetchAlcoCocktails(alcohol) {
    try {
        printWaitPreview();
        splideList.innerHTML = '';
        const data = await takeAlkoCocktail(alcohol);
        if (data.length === 0) {
            console.log(`No cocktails available starting with the letter ${letter}`);
            printErrorPreview();
        } else {
            for (let key in data) {
                let obj = data[key];
                printCocktailPreview(obj);
            }
            gallerySlider.mount({ Grid });
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

export async function fetchCocktailsByLetter(letter) {
    try {
        printWaitPreview();
        splideList.innerHTML = '';
        const data = await takeCocktailByLetter(letter);
        if (data.length === 0) {
            console.log(`No cocktails available starting with the letter ${letter}`);
            printErrorPreview();
        } else {
            for (let key in data) {
                let obj = data[key];
                printCocktailPreview(obj);
            }
            gallerySlider.mount({ Grid });
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}
