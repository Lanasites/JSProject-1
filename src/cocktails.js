'use strict';
// import cocktails from '../database-cocktail.json';
import { gallerySlider } from './cocktailsGallerySlider.js';
import { fetchAllCocktails } from './cocktailsFetch.js';
import { fetchAlcoCocktails } from './cocktailsFetch.js';
import { fetchCocktailsByLetter } from './cocktailsFetch.js';
import { fetchAllFirstLetters } from './cocktailsLetters';
import { fetchAlkoFirstLetters } from './cocktailsLetters';

// const splideList = document.getElementById('splideList');

const alcoholic = document.getElementById('alcoholic');
const nonalcoholic = document.getElementById('nonalcoholic');
const any = document.getElementById('any');

export const filterTitles = document.querySelectorAll('.filter-title');
export const allLetterDivs = document.querySelectorAll('.letter');

document.addEventListener('DOMContentLoaded', event => {
    any.classList.add('selected');

    clearSelectedOnAllLetters();

    fetchAllCocktails();
    fetchAllFirstLetters();
});

alcoholic.addEventListener('click', event => {
    // apply selected class on clicked element and remove from all other elements
    clearSelectedOnAllTitles();
    event.target.classList.add('selected');

    clearSelectedOnAllLetters();

    gallerySlider.destroy(); // Destroy the existing slider
    fetchAlcoCocktails(true);
    fetchAlkoFirstLetters(true);
});

nonalcoholic.addEventListener('click', event => {
    clearSelectedOnAllTitles();

    event.target.classList.add('selected');

    clearSelectedOnAllLetters();

    gallerySlider.destroy(); // Destroy the existing slider
    fetchAlcoCocktails(false);
    fetchAlkoFirstLetters(false);
});

any.addEventListener('click', event => {
    clearSelectedOnAllTitles();

    event.target.classList.add('selected');

    clearSelectedOnAllLetters();

    gallerySlider.destroy(); // Destroy the existing slider
    fetchAllCocktails();
    fetchAllFirstLetters();
});

allLetterDivs.forEach(div => {
    div.addEventListener('click', function() {
        //ooh-la-la this is an loop over a loop!
        clearSelectedOnAllLetters();
        event.target.classList.add('selected');
        const clickedLetter = this.textContent; // Get text content of clicked div

        //finding which filter title is selected
        let activeDivId = null;
        // Loop through each div to find the one with class 'active'
        filterTitles.forEach(div => {
            if (div.classList.contains('selected')) {
                activeDivId = div.id; // Get the ID of the div with class 'active'
                console.log(activeDivId);
            }
        });
        gallerySlider.destroy(); // Destroy the existing slider
        fetchCocktailsByLetter(clickedLetter, activeDivId); // Call the function with the clicked letter
    });
});

const clearSelectedOnAllLetters = () => {
    allLetterDivs.forEach(title => {
        title.classList.remove('selected');
    });
};

const clearSelectedOnAllTitles = () => {
    filterTitles.forEach(title => {
        title.classList.remove('selected');
    });
};
