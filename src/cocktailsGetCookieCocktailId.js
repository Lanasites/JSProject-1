// pls import and use this function to do something with cocktail name that got stored in cookies after it was clicked on cocktails page

export const getCookieCocktailId = () => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; cocktailId=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

//add these to your js file check the output
// import { getCookieCocktailId } from './getCookieCocktailId.js'; //or provide relevant path
// const newCookie = getCookieCocktailId();
//your code here
// console.log(newCookie);
