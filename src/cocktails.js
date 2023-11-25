'use strict';

import { gallerySlider } from './cocktailsGallerySlider.js';
import { filterCocktails } from './cocktailsFilter.js';
import { filterAllFirstLetters } from './cocktailsFilterLetters.js';
import { burgerMenu, goToPageAndChangeLinkStyle, searchCocktailByName, clickProfileMenu, getMenuForPerson } from './header.js';

const logotype = document.getElementById('logotype');
logotype.addEventListener('click', function() {
    window.location.href = 'index.html';
});

const filterType = document.getElementById('filterType');
const filterLetter = document.getElementById('filterLetter');
const filterTitles = document.querySelectorAll('.filter-title');
const allLetterDivs = document.querySelectorAll('.letter');
const any = document.getElementById('anyType');

document.addEventListener('DOMContentLoaded', event => {
    initializeHeader();
    initializeFilters();
});

const initializeHeader = () => {
    burgerMenu();
    goToPageAndChangeLinkStyle();
    searchCocktailByName();
    clickProfileMenu();
    getMenuForPerson();
};

const initializeFilters = () => {
    any.classList.add('selected');
    clearSelected(allLetterDivs);
    filterAllFirstLetters('anyType');
    filterCocktails('anyType', 'anyLetter');
};

const clearSelected = elements => {
    elements.forEach(element => {
        element.classList.remove('selected');
    });
};

const getActiveDivId = () => {
    let activeId = 'anyType';
    filterTitles.forEach(title => {
        if (title.classList.contains('selected')) {
            activeId = title.id;
        }
    });
    return activeId;
};

const getSelectedLetter = () => {
    let selectedLetter = 'anyLetter';
    allLetterDivs.forEach(letterDiv => {
        if (letterDiv.classList.contains('selected') && letterDiv.id !== 'anyLetter') {
            selectedLetter = letterDiv.textContent;
        }
    });
    return selectedLetter;
};

const handleLetterClick = clickedLetterDiv => {
    clearSelected(allLetterDivs);
    clickedLetterDiv.classList.add('selected');
    let clickedLetter = clickedLetterDiv.id === 'anyLetter' ? 'anyLetter' : clickedLetterDiv.textContent;
    const activeDivId = getActiveDivId();
    gallerySlider.destroy();
    filterCocktails(activeDivId, clickedLetter);
};

const handleTitleClick = clickedTitleDiv => {
    clearSelected(filterTitles);
    clickedTitleDiv.classList.add('selected');
    const activeDivId = clickedTitleDiv.id;
    filterAllFirstLetters(activeDivId);
    const clickedLetter = getSelectedLetter();
    gallerySlider.destroy();
    filterCocktails(activeDivId, clickedLetter);
};

filterType.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('filter-title')) {
        handleTitleClick(target);
    }
});

filterLetter.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('letter')) {
        handleLetterClick(target);
    }
});
