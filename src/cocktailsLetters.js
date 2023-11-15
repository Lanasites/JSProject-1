import { takeAllObjects } from './firebase.js';
import { takeAlkoCocktail } from './firebase.js';

const allLetterDivs = document.querySelectorAll('.letter');

export async function fetchAllFirstLetters() {
    try {
        const data = await takeAllObjects('cocktails');
        let letters = []; // array containing first letters of all received cocktails
        for (let key in data) {
            let obj = data[key];
            let firstLetter = obj.name.substring(0, 1);
            letters.push(firstLetter);
        }
        letters = letters.filter(function(value, index, self) {
            return self.indexOf(value) === index; // filter out repeating letters
        });
        allLetterDivs.forEach(div => highlightLetter(div, letters));
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

export async function fetchAlkoFirstLetters(alcohol) {
    try {
        const data = await takeAlkoCocktail(alcohol);
        let letters = [];
        for (let key in data) {
            let obj = data[key];
            let firstLetter = obj.name.substring(0, 1);
            letters.push(firstLetter);
        }
        letters = letters.filter(function(value, index, self) {
            return self.indexOf(value) === index; // filter out repeating letters
        });
        allLetterDivs.forEach(div => highlightLetter(div, letters));
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

const highlightLetter = (div, array) => {
    div.classList.remove('active');
    // Get the text content of the current div
    const letter = div.textContent.trim();
    // Check if the letter is present in the 'letters array'
    if (array.includes(letter)) {
        // If the letter is in the array, add the 'active' class to the div
        div.classList.add('active');
    }
};
