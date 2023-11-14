'use strict';
// import cocktails from '../database-cocktail.json';
import { gallerySlider } from './gallerySlider';
import { fetchAllCocktails } from './cocktailsPreview';
import { fetchAlcoCocktails } from './cocktailsPreview.js';
import { fetchAllFirstLetters } from './cocktailsLetters';
import { fetchAlkoFirstLetters } from './cocktailsLetters';

// const splideList = document.getElementById('splideList');

document.addEventListener('DOMContentLoaded', event => {
    fetchAllCocktails();
    fetchAllFirstLetters();
});

document.getElementById('alcoholic').addEventListener('click', function() {
    gallerySlider.destroy(); // Destroy the existing slider
    fetchAlcoCocktails(true);
    fetchAlkoFirstLetters(true);
});

document.getElementById('nonalcoholic').addEventListener('click', function() {
    gallerySlider.destroy(); // Destroy the existing slider
    fetchAlcoCocktails(false);
    fetchAlkoFirstLetters(false);
});

document.getElementById('any').addEventListener('click', function() {
    gallerySlider.destroy(); // Destroy the existing slider
    fetchAllCocktails();
    fetchAllFirstLetters();
});
