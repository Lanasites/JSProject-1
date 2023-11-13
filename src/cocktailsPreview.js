// makes a div, puts pic and name into it. will be used to print small cocktail cards
const printCocktailPreview = item => {
    const newCocktail = document.createElement('div');
    newCocktail.className = 'preview';
    newCocktail.setAttribute('id', item.name);
    const template = `<img src=${item.image} alt=${item.name} class="preview-img" />
    <div class="preview-title">${item.name}</div>`;
    newCocktail.innerHTML = `${template}`;
    return newCocktail;
};

const createSlide = item => {
    const splideList = document.getElementById('splideList'); // div where cocktail slides go
    let newSlide = document.createElement('li');
    newSlide.className = 'splide__slide';
    let itemElement = printCocktailPreview(item);
    newSlide.appendChild(itemElement);
    splideList.appendChild(newSlide);
};

// makes a slide, puts preview div into it made from each array item
// export const createSplideList = array => {
//     const splideList = document.getElementById('splideList'); // div where cocktail slides go
//     array.forEach(item => createSlide(item));
// };

export const createSplideList = (array, isAlcoholic) => {
    const splideList = document.getElementById('splideList'); // div where cocktail slides go
    splideList.innerHTML = ''; // Clear the existing slides
    let filteredCocktails = [];
    if (isAlcoholic === 'true') {
        filteredCocktails = array.filter(cocktail => cocktail.alcohol === true);
        console.log(filteredCocktails);
    } else if (isAlcoholic === 'false') {
        filteredCocktails = array.filter(cocktail => cocktail.alcohol === false);
        console.log(filteredCocktails);
    } else {
        filteredCocktails = array;
        console.log(filteredCocktails);
    }
    filteredCocktails.forEach(item => createSlide(item, splideList));
};
