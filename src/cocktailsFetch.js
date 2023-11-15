import { takeAllObjects } from './firebase.js';
import { takeAlkoCocktail } from './firebase.js';
import { gallerySlider } from './cocktailsGallerySlider.js';
import { Grid } from '@splidejs/splide-extension-grid';
import { printCocktailPreview } from './cocktailsCocktailAndErrorPrint.js';
import { printErrorPreview } from './cocktailsCocktailAndErrorPrint.js';
import { printWaitPreview } from './cocktailsCocktailAndErrorPrint.js';

const splideList = document.getElementById('splideList');

export const fetchAllCocktails = async () => {
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
};

export const fetchAlcoCocktails = async alcohol => {
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
};

export const fetchCocktailsByLetter = async (letter, type) => {
    try {
        console.log(`i started fetchCocktailsByLetter func with ${letter} and ${type}`);
        printWaitPreview();
        splideList.innerHTML = '';
        let data = null;
        if (type === 'any') {
            data = await takeAllObjects('cocktails');
        } else if (type === 'alcoholic') {
            data = await takeAlkoCocktail(true);
        } else if (type === 'nonalcoholic') {
            data = await takeAlkoCocktail(false);
        }
        console.log(data);
        let arrByLetter = [];
        for (let cocktail in data) {
            let obj = data[cocktail];
            let firstLetter = obj.name.substring(0, 1);
            if (firstLetter === letter) {
                arrByLetter.push(obj);
            }
        }
        if (arrByLetter.length === 0) {
            console.log(`No cocktails available starting with the letter ${letter}`);
            printErrorPreview();
        } else {
            for (let key in arrByLetter) {
                let obj = arrByLetter[key];
                printCocktailPreview(obj);
            }
            gallerySlider.mount({ Grid });
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
};
