import { burgerMenu } from './header.js'; 
burgerMenu();

// import { monitorAuthState } from './authentication.js';
import { monitorAuthState } from './authentication.js'
monitorAuthState()

let favorites = []; // Массив для хранения избранных коктейлей

function updateFavorites() {
  let favoritesTitleElement = document.getElementById("title-for-favourite");
  let favoritesContainerElement = document.getElementById("favoritesContainer");
  
  if (favorites.length > 0) {
    favoritesTitleElement.innerText = "Избранное:";
    favoritesContainerElement.innerHTML = ""; // Очистить контейнер перед добавлением избранных коктейлей
    
    for (let i = 0; i < favorites.length; i++) {
      let cocktailNameElement = document.createElement("p");
      cocktailNameElement.innerText = favorites[i].name;
      favoritesContainerElement.appendChild(cocktailNameElement);
    }
  } else {
    favoritesTitleElement.innerText = "Пока избранного нет";
    favoritesContainerElement.innerHTML = "";
  }
  favoritesTitleElement.classList.add("favourite-title");
}

// При загрузке страницы проверяем, есть ли сохраненные избранные коктейли в localStorage
const savedFavorites = localStorage.getItem("favorites");
if (savedFavorites) {
  favorites = JSON.parse(savedFavorites);
}

updateFavorites(); // Обновить отображение избранных коктейлей