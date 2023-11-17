// makes a li, puts link pic and name into it. will be used to print small cocktail cards
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
    newCocktail.addEventListener('click', function() {
        document.cookie = `cocktailId=${item.id}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `cocktailId = ${item.id}`;
        console.log(item.id);
    });
    newSlide.appendChild(newCocktail);
    splideList.appendChild(newSlide);
};

// makes a li, puts div error text and link to register into it
export const printErrorPreview = item => {
    let newSlide = document.createElement('li');
    newSlide.className = 'splide__slide';
    let errorDiv = document.createElement('div');
    errorDiv.className = 'message';
    const template = `<p>Удивительно, но мы не нашли такой коктейль!</p>
    <p>Чтобы добавить его, Вы можете зарегистрироваться или авторизоваться <a href="../reg-form.html">здесь</a> </p>`;
    errorDiv.innerHTML = `${template}`;
    newSlide.appendChild(errorDiv);
    splideList.appendChild(newSlide);
};

// makes a li, puts div waiting text into it
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
