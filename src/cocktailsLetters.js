import cocktails from '../database-cocktail.json';

// this block of code filters out first letters of cocktails contained in database to be printed out on page
export const letters = cocktails
    .map(function(item) {
        // Return the first letter of every cocktail's name
        return item.name.substring(0, 1);
    })
    .filter(function(value, index, self) {
        return self.indexOf(value) === index; // filter out repeating letters
    })
    .sort(); // put letters in alphabetical order

//makes a div, fills it with a letter and puts the div into filterLetter div
export const printLetter = item => {
    const filterLetter = document.getElementById('filterLetter'); // div where letters go
    const newLetter = document.createElement('div');
    newLetter.className = 'letter';
    newLetter.textContent = item;
    filterLetter.appendChild(newLetter);
};
