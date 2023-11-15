'use strict';
// import cocktails from '../database-cocktail.json';
import { gallerySlider } from './gallerySlider';
import { fetchAllCocktails } from './cocktailsPreview';
import { fetchAlcoCocktails } from './cocktailsPreview.js';
import { fetchAllFirstLetters } from './cocktailsLetters';
import { fetchAlkoFirstLetters } from './cocktailsLetters';

// const splideList = document.getElementById('splideList');

const alcoholic = document.getElementById('alcoholic');
const nonalcoholic = document.getElementById('nonalcoholic');
const any = document.getElementById('any');

const filterTitles = document.querySelectorAll('.filter-title');
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
