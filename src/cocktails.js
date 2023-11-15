'use strict';
// import cocktails from '../database-cocktail.json';
import { gallerySlider } from './cocktailsGallerySlider.js';
import { fetchAllCocktails } from './cocktailsFetch.js';
import { fetchAlcoCocktails } from './cocktailsFetch.js';
import { fetchCocktailsByLetter } from './cocktailsFetch.js';
import { fetchAllFirstLetters } from './cocktailsLetters';
import { fetchAlkoFirstLetters } from './cocktailsLetters';
import { allLetterDivs } from './cocktailsLetters';

// const splideList = document.getElementById('splideList');

const alcoholic = document.getElementById('alcoholic');
const nonalcoholic = document.getElementById('nonalcoholic');
const any = document.getElementById('any');

export const filterTitles = document.querySelectorAll('.filter-title');
const filterLetters = document.querySelectorAll('.letter');

document.addEventListener('DOMContentLoaded', event => {
    any.classList.add('selected');
    fetchAllCocktails();
    fetchAllFirstLetters();
});

alcoholic.addEventListener('click', event => {
    // apply selected class on clicked element and remove from all other elements
    filterTitles.forEach(title => {
        title.classList.remove('selected');
    });
    event.target.classList.add('selected');

    gallerySlider.destroy(); // Destroy the existing slider
    fetchAlcoCocktails(true);
    fetchAlkoFirstLetters(true);
});

nonalcoholic.addEventListener('click', event => {
    // apply selected class on clicked element and remove from all other elements
    filterTitles.forEach(title => {
        title.classList.remove('selected');
    });
    event.target.classList.add('selected');
    gallerySlider.destroy(); // Destroy the existing slider
    fetchAlcoCocktails(false);
    fetchAlkoFirstLetters(false);
});

any.addEventListener('click', event => {
    // apply selected class on clicked element and remove from all other elements
    filterTitles.forEach(title => {
        title.classList.remove('selected');
    });
    event.target.classList.add('selected');
    gallerySlider.destroy(); // Destroy the existing slider
    fetchAllCocktails();
    fetchAllFirstLetters();
});

allLetterDivs.forEach(div => {
    div.addEventListener('click', function() {
        const clickedLetter = this.textContent; // Get text content of clicked div
        gallerySlider.destroy(); // Destroy the existing slider
        fetchCocktailsByLetter(clickedLetter); // Call the function with the clicked letter
    });
});
