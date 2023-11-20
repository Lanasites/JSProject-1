import { takeAllObjects } from './firebase.js';
import { takeAlkoCocktail } from './firebase.js';
import { gallerySlider } from './cocktailsGallerySlider.js';
import { Grid } from '@splidejs/splide-extension-grid';
import { printCocktailPreview } from './cocktailsCocktailAndErrorPrint.js';
import { printErrorPreview } from './cocktailsCocktailAndErrorPrint.js';
import { printWaitPreview } from './cocktailsCocktailAndErrorPrint.js';

const splideList = document.getElementById('splideList');

export const fetchCocktails = async (type, letter) => {
    try {
        // console.log(`i started fetchCocktails func with ${letter} and ${type}`);
        printWaitPreview();
        splideList.innerHTML = '';
        let data;
        // receiving necessary data from DB depending on type passed as argument
        if (type === 'anyType') {
            data = await takeAllObjects('cocktails'); //get all cocktails
        } else if (type === 'alcoholic') {
            data = await takeAlkoCocktail(true); //get alco cocktails
        } else if (type === 'nonalcoholic') {
            data = await takeAlkoCocktail(false); //get nonalco cocktails
        }
        // console.log(data);
        // creating array with cocktails depending on letter passed
        let arrByLetter = [];
        // if no letter is passed i used "anyLetter" just in case
        if (letter === 'anyLetter') {
            for (let cocktail in data) {
                let obj = data[cocktail];
                arrByLetter.push(obj);
            }
        } else {
            for (let cocktail in data) {
                //actually filter out cocktails by letter
                let obj = data[cocktail];
                let firstLetter = obj.name.substring(0, 1);
                if (firstLetter === letter) {
                    arrByLetter.push(obj);
                }
            }
        }
        // console.log(arrByLetter);
        // if we have no cocktails on this letter, then we get an prompt to register and one
        if (arrByLetter.length === 0) {
            console.log(`No cocktails available starting with the letter ${letter}`);
            printErrorPreview();
        } else {
            //finally if we received something we print it out into splider
            for (let key in arrByLetter) {
                let obj = arrByLetter[key];
                // console.log(obj);
                printCocktailPreview(obj);
            }
            gallerySlider.mount({ Grid });
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
};
