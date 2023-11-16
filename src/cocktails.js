'use strict';

import { gallerySlider } from './cocktailsGallerySlider.js';
import { fetchCocktails } from './cocktailsFetch.js';
import { fetchAllFirstLetters } from './cocktailsLetters';
// import { fetchAlkoFirstLetters } from './cocktailsLetters';

const alcoholic = document.getElementById('alcoholic');
const nonalcoholic = document.getElementById('nonalcoholic');
const any = document.getElementById('any');

export const filterTitles = document.querySelectorAll('.filter-title');
export const allLetterDivs = document.querySelectorAll('.letter');

document.addEventListener('DOMContentLoaded', event => {
    any.classList.add('selected');

    clearSelectedOnAllLetters();

    fetchAllFirstLetters('any');
    fetchCocktails('any', '0');
});

allLetterDivs.forEach(div => {
    div.addEventListener('click', function(event) {
        clearSelectedOnAllLetters();

        event.currentTarget.classList.add('selected');
        const clickedLetter = event.currentTarget.textContent; // Get text content of clicked div

        //finding which filter title is selected
        filterTitles.forEach(div => {
            if (div.classList.contains('selected')) {
                activeDivId = div.id;
                console.log(activeDivId);
            }
        });
        gallerySlider.destroy(); // Destroy the existing slider
        fetchCocktails(activeDivId, clickedLetter); // Call the function with the clicked letter
    });
});

let activeDivId = 'global div id';
let clickedLetter = 'global letter';

filterTitles.forEach(div => {
    div.addEventListener('click', function(event) {
        clearSelectedOnAllTitles();
        event.currentTarget.classList.add('selected');
        activeDivId = event.currentTarget.id;

        fetchAllFirstLetters(activeDivId); // need to change

        let selectedLetter = false;
        allLetterDivs.forEach(div => {
            if (div.classList.contains('selected')) {
                clickedLetter = div.textContent; // Get the ID of the div with class 'selected'
                selectedLetter = true;
            }
        });
        if (!selectedLetter) {
            clickedLetter = '0';
        }
        gallerySlider.destroy(); // Destroy the existing slider
        fetchCocktails(activeDivId, clickedLetter); // Call the function with the clicked letter
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
