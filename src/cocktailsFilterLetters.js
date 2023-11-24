import { getCocktailData } from './firebase.js';

const allLetterDivs = document.querySelectorAll('.letter');

export const filterAllFirstLetters = async type => {
    try {
        const data = await getCocktailData(type);
        const uniqueFirstLetters = [...new Set(Object.values(data).map(obj => obj.name.charAt(0)))];
        allLetterDivs.forEach(div => highlightLetter(div, uniqueFirstLetters));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const highlightLetter = (div, array) => {
    div.classList.remove('activeLetter');
    const letter = div.textContent.trim();
    if (array.includes(letter)) {
        div.classList.add('activeLetter');
    }
};
