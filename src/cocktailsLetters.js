import { takeAllObjects } from './firebase.js';
import { takeAlkoCocktail } from './firebase.js';

const filterLetter = document.getElementById('filterLetter'); // div where letters go

export async function fetchAllFirstLetters() {
    try {
        filterLetter.innerHTML = '';
        const data = await takeAllObjects('cocktails');
        let letters = [];
        for (let key in data) {
            let obj = data[key];
            let firstLetter = obj.name.substring(0, 1);
            letters.push(firstLetter);
        }
        letters = letters
            .filter(function(value, index, self) {
                return self.indexOf(value) === index; // filter out repeating letters
            })
            .sort(); // put letters in alphabetical order
        letters.forEach(item => printLetter(item));
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

export async function fetchAlkoFirstLetters(alcohol) {
    try {
        filterLetter.innerHTML = '';
        const data = await takeAlkoCocktail(alcohol);
        let letters = [];
        for (let key in data) {
            let obj = data[key];
            let firstLetter = obj.name.substring(0, 1);
            letters.push(firstLetter);
        }
        letters = letters
            .filter(function(value, index, self) {
                return self.indexOf(value) === index; // filter out repeating letters
            })
            .sort(); // put letters in alphabetical order
        letters.forEach(item => printLetter(item));
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

//makes a div, fills it with a letter and puts the div into filterLetter div
const printLetter = item => {
    const newLetter = document.createElement('div');
    newLetter.className = 'letter';
    newLetter.textContent = item;
    filterLetter.appendChild(newLetter);
};
