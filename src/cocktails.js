// 'use strict';

import { gallerySlider } from './cocktailsGallerySlider.js';
import { filterCocktails } from './cocktailsFilter.js';
import { filterAllFirstLetters } from './cocktailsLetters';

import { burgerMenu, goToPageAndChangeLinkStyle, searchCocktailByName } from './header.js';
burgerMenu();
goToPageAndChangeLinkStyle();
searchCocktailByName();

//--переход на главную страницу по клику на лого--//
const logotype = document.getElementById('logotype');
logotype.addEventListener('click', function() {
    window.location.href = 'index.html';
});

const any = document.getElementById('anyType');

export const filterTitles = document.querySelectorAll('.filter-title');
export const allLetterDivs = document.querySelectorAll('.letter');

document.addEventListener('DOMContentLoaded', event => {
    any.classList.add('selected');

    clearSelectedOnAllLetters();

    filterAllFirstLetters('anyType');
    filterCocktails('anyType', 'anyLetter');
});

allLetterDivs.forEach(div => {
    div.addEventListener('click', function(event) {
        clearSelectedOnAllLetters();

        event.currentTarget.classList.add('selected');
        let clickedLetter;
        if (event.currentTarget.id === 'anyLetter') {
            clickedLetter = 'anyLetter';
        } else {
            clickedLetter = event.currentTarget.textContent; // Get text content of clicked div
        }

        //finding which filter title is selected
        filterTitles.forEach(div => {
            if (div.classList.contains('selected')) {
                activeDivId = div.id;
                // console.log(activeDivId);
            }
        });
        gallerySlider.destroy(); // Destroy the existing slider
        filterCocktails(activeDivId, clickedLetter); // Call the function with the clicked letter
    });
});

let activeDivId = 'anyType';
let clickedLetter = 'anyLetter';

filterTitles.forEach(div => {
    div.addEventListener('click', function(event) {
        clearSelectedOnAllTitles();
        event.currentTarget.classList.add('selected');
        activeDivId = event.currentTarget.id;

        filterAllFirstLetters(activeDivId); // need to change

        let selectedLetter = false;
        let clickedLetter;
        allLetterDivs.forEach(div => {
            if (div.classList.contains('selected')) {
                if (div.id === 'anyLetter') {
                    clickedLetter = 'anyLetter';
                } else {
                    clickedLetter = div.textContent; // Get text content of clicked div
                }
                selectedLetter = true;
            }
        });
        if (!selectedLetter) {
            clickedLetter = 'anyLetter';
        }
        gallerySlider.destroy(); // Destroy the existing slider
        filterCocktails(activeDivId, clickedLetter); // Call the function with the clicked letter
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

// ----------Событие при загрузке страницы для коррекции меню при нажатии на человечка-------------------------------------
// на все страницы с меню надо добавить
import { clickProfileMenu, getMenuForPerson } from './header.js';
document.addEventListener('DOMContentLoaded', getMenuForPerson);
clickProfileMenu();
// ------------------------------------------------------------------------------------------------------------------------
