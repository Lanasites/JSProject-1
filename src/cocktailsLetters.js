import { takeAllObjects } from './firebase.js';
import { takeAlkoCocktail } from './firebase.js';

const allLetterDivs = document.querySelectorAll('.letter');

export const fetchAllFirstLetters = async type => {
    // console.log(`i started fetch all first letters ${type}`);
    try {
        let data;
        // receiving necessary data from DB depending on type passed as argument
        if (type === 'anyType') {
            data = await takeAllObjects('cocktails'); // all cocktails
        } else if (type === 'nonalcoholic') {
            data = await takeAlkoCocktail(false); //nonalco
        } else if (type === 'alcoholic') {
            data = await takeAlkoCocktail(true); // alco
        }
        let letters = []; // array containing first letters of all received cocktails
        for (let key in data) {
            let obj = data[key];
            let firstLetter = obj.name.substring(0, 1);
            letters.push(firstLetter);
        }
        letters = letters.filter(function(value, index, self) {
            return self.indexOf(value) === index; // filter out repeating letters
        });
        //making all letters present in array shine
        allLetterDivs.forEach(div => highlightLetter(div, letters));
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
};

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
