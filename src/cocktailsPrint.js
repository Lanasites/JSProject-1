export const setCocktailCookie = id => {
    document.cookie = `cocktailId=${id}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `cocktailId=${id}`;
};

export const printCocktailPreview = item => {
    let newSlide = document.createElement('li');
    newSlide.className = 'splide__slide';
    const newCocktail = document.createElement('a');
    newCocktail.className = 'preview';
    newCocktail.id = item.id;
    newCocktail.href = './recipe-cocktail.html';
    const template = `<img src=${item.imageUrl} alt=${item.name} class="preview-img" />
    <div class="preview-title">${item.name}</div>`;
    newCocktail.innerHTML = `${template}`;
    newCocktail.addEventListener('click', () => setCocktailCookie(item.id));
    newSlide.appendChild(newCocktail);
    splideList.appendChild(newSlide);
};

export const printErrorPreview = item => {
    let newSlide = document.createElement('li');
    newSlide.className = 'splide__slide';
    let errorDiv = document.createElement('div');
    errorDiv.className = 'message';
    const template = `<p>Удивительно, но мы не нашли такой коктейль!</p>`;
    errorDiv.innerHTML = `${template}`;
    newSlide.appendChild(errorDiv);
    splideList.appendChild(newSlide);
};

export const printWaitPreview = item => {
    let newSlide = document.createElement('li');
    newSlide.className = 'splide__slide';
    let errorDiv = document.createElement('div');
    errorDiv.className = 'message';
    const template = `<p>Получаем данные</p>`;
    errorDiv.innerHTML = `${template}`;
    newSlide.appendChild(errorDiv);
    splideList.appendChild(newSlide);
};
