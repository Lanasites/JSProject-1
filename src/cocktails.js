'use strict';
import cocktails from '../database-cocktail.json';
import { Grid } from '@splidejs/splide-extension-grid';
import { gallerySlider } from './gallerySlider';
import { printLetter } from './cocktailsLetters';
import { createSplideList } from './cocktailsPreview';
import { letters } from './cocktailsLetters';

document.addEventListener('DOMContentLoaded', event => {
    // iterate over letters array and call letterPrint function on every item of arrray = all letters printed
    letters.forEach(item => printLetter(item));
    createSplideList(cocktails);
    gallerySlider.mount({ Grid });
});

document.getElementById('alcoholic').addEventListener('click', function() {
    gallerySlider.destroy(); // Destroy the existing slider
    createSplideList(cocktails, 'true');
    gallerySlider.mount({ Grid });
});

document.getElementById('nonalcoholic').addEventListener('click', function() {
    gallerySlider.destroy(); // Destroy the existing slider
    createSplideList(cocktails, 'false');
    gallerySlider.mount({ Grid });
});

document.getElementById('any').addEventListener('click', function() {
    gallerySlider.destroy(); // Destroy the existing slider
    createSplideList(cocktails);
    gallerySlider.mount({ Grid });
});
