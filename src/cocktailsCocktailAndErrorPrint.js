// makes a li, puts link pic and name into it. will be used to print small cocktail cards
export const printCocktailPreview = item => {
    let newSlide = document.createElement('li');
    newSlide.className = 'splide__slide';
    const newCocktail = document.createElement('a');
    newCocktail.className = 'preview';
    newCocktail.id = item.name;
    newCocktail.href = './index.html';
    const template = `<img src=${item.imageUrl} alt=${item.name} class="preview-img" />
    <div class="preview-title">${item.name}</div>`;
    newCocktail.innerHTML = `${template}`;
    newCocktail.addEventListener('click', function() {
        document.cookie = `cocktailId=${item.name}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `cocktailId = ${item.name}`;
    });
    newSlide.appendChild(newCocktail);
    splideList.appendChild(newSlide);
};

// makes a li, puts div error text and link to register into it
export const printErrorPreview = item => {
    const gallerySlider = document.getElementById('galleryslider');
    let newSlide = document.createElement('li');
    newSlide.className = 'splide__slide';
    let errorDiv = document.createElement('div');
    errorDiv.className = 'message';
    const template = `<p>Удивительно, но мы не нашли такой коктейль!</p>
    <p>Вы можете <a href="#">зарегистрироваться здесь</a> и добавить его</p>`;
    errorDiv.innerHTML = `${template}`;
    newSlide.appendChild(errorDiv);
    splideList.appendChild(newSlide);
};

// makes a li, puts div waiting text into it
export const printWaitPreview = item => {
    const gallerySlider = document.getElementById('galleryslider');
    let newSlide = document.createElement('li');
    newSlide.className = 'splide__slide';
    let errorDiv = document.createElement('div');
    errorDiv.className = 'message';
    const template = `<p>Получаем данные</p>`;
    errorDiv.innerHTML = `${template}`;
    newSlide.appendChild(errorDiv);
    splideList.appendChild(newSlide);
};