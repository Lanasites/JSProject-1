import { getCocktailData } from './firebase.js';
import { gallerySlider } from './cocktailsGallerySlider.js';
import { printCocktailPreview, printErrorPreview, printWaitPreview } from './cocktailsPrint.js';
import { Grid } from '@splidejs/splide-extension-grid';

const splideList = document.getElementById('splideList');

export const filterCocktails = async (type, letter) => {
    try {
        printWaitPreview();
        splideList.innerHTML = '';
        const data = await getCocktailData(type);
        const arrByLetter = Object.values(data).filter(cocktail => {
            if (letter === 'anyLetter') {
                return true;
            } else {
                const firstLetter = cocktail.name.substring(0, 1);
                return firstLetter === letter;
            }
        });
        if (arrByLetter.length === 0) {
            printErrorPreview();
        } else {
            arrByLetter.forEach(cocktail => {
                printCocktailPreview(cocktail);
            });
            gallerySlider.mount({ Grid });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
