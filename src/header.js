//-- Добавление навигации бургер-меню
function burgerMenu() {
    let menuBtn = document.querySelector('.burger-menu__btn');
    let menu = document.querySelector('.header-block__bm-list');
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });
}
export { burgerMenu };

//Переходы с кнопок
// --переход на формы входа/регистрации перед входом в личный кабинет--//
function clickProfileMenu() {
    const profileButton = document.getElementById("profile"); // Проверка URL и применение соответствующих обработчиков событий
    profileButton.addEventListener('click', function (event) {
        const profileMenu = document.getElementById("profile-menu");
        event.preventDefault(); // Отменить поведение по умолчанию для клика
        if (profileMenu.style.display === "block") {
            profileMenu.style.display = "none";
        } else {
            profileMenu.style.display = "block";
        }
    });
}
export { clickProfileMenu };

//--переход на главную страницу по клику на лого--//
const logotype = document.getElementById('logotype');
logotype.addEventListener('click', function () {
    window.location.href = 'index.html';
});

//-- Применение стиля активного пункта меню в зависимости от страницы --//
function goToPageAndChangeLinkStyle() {
    let path = window.location.pathname; // Получаем текущий путь страницы
    let page = path.split("/").pop(); // Извлекаем имя файла из пути
    let menuItems = document.querySelectorAll(".headline__nav-item"); // Получаем список всех пунктов меню
    menuItems.forEach(function(item) {// Проходим по каждому пункту меню и проверяем, является ли ссылка активной
        let link = item.querySelector("a");
        if (link.getAttribute("href") === page) { // Если ссылка на страницу соответствует текущей странице, устанавливаем класс "active"
            item.classList.add("active");
        }
    });
}
export { goToPageAndChangeLinkStyle };

// Функция, подгружающая нужное меню второго уровня 
// в случае авторизованного пользователя выводит меню при нажатии на человечка "email, настройки, выход"
// в случае авторизованного пользователя выводит меню при нажатии на человечка "вход, регистрация"
import { getCookie, exitProfile, monitorAuthState } from './authentication.js'
function getMenuForPerson() {
    const useremail = getCookie("userEmail"); // Получение значения cookie с именем "userEmail"
    const pointOfMenu = document.querySelector('.user-profile__btn');
    if (useremail) {
        const temptateMenu = `
        <ul>
            <li class = 'bold'> Вы вошли как: <span class='accent'>${useremail}</span></li>
            <li id = 'settings'> Настройки </li>
            <li id = 'exit'> Выход </li>
        </ul>
        `;
        const profileMenu = document.createElement('div')
        profileMenu.id = 'profile-menu';
        profileMenu.innerHTML = temptateMenu;
        pointOfMenu.append(profileMenu);
    } else {
        console.log("Нет зарегистрированных пользователей");
        const temptateMenu = `
        <ul>
            <li id  = 'login' >Вход</li>
            <li id  = 'registration'>Регистрация</li>
        </ul>
        `;
        const profileMenu = document.createElement('div')
        profileMenu.id = 'profile-menu';
        profileMenu.innerHTML = temptateMenu;
        pointOfMenu.append(profileMenu);
    }
    //--выход при нажатии на "выход"--//
    const exit = document.getElementById('exit');
    if (exit)
        exit.addEventListener('click', exitProfile);
    //-- открытие формы на вход при нажатии на "вход"--//
    const login = document.getElementById('login');
    if (login)
        login.addEventListener('click', function () {
            window.location.href = 'sign-in-form.html';
        });
    //--открытие формы регистрации при нажатии на "регистрация"--//
    const registration = document.getElementById('registration');
    if (registration)
        registration.addEventListener('click', function () {
            window.location.href = 'reg-form.html';
        });
    //--открытие страницы ЛК при нажатии на "Настройки"--//
    const settings = document.getElementById('settings');
    if (settings)
        settings.addEventListener('click', function () {
            window.location.href = 'profile-and-favourites.html';
        });
}

export { getMenuForPerson };


//--Пререход на страницу избранного с проверкой авторизации --//
//Алерт лучше заменить на модальное окно
document.getElementById('star').addEventListener("click", goToFavouritesPage);
function goToFavouritesPage() {
    const userEmail = getCookie("userEmail");
    if (userEmail) {
        // Если пользователь авторизован, производим перенаправление на страницу избранных
        window.location.href = "favourites.html";
    } else {// Если пользователь не авторизован
    alert ('Авторизуйтесь!');
    }
}
// Вызов мониторинга состояния авторизации при загрузке страницы
window.addEventListener("load", () => {
    monitorAuthState();
});

//-- Поиск по названию коктейля --//
import { takeAllObjects, takeOneCocktail } from './firebase.js'; 
function searchCocktailByName() { 
    // Функция для получения данных из базы данных Firebase 
    function getDataFromFirebase() { 
        console.log('Функция загрузки данных вызвана'); 
        const promise = takeAllObjects('cocktails'); 
        return promise;
    }
    // Функция для отображения результатов поиска 
    function showResults(results) {
        const searchResultsElement = document.createElement('div'); 
        searchResultsElement.id = 'searchResults';
        searchResultsElement.className = 'fade-in'; // Добавить класс плавности появления
        searchResultsElement.style.display='flex';
        searchResultsElement.style.flexWrap = 'wrap';
        searchResultsElement.style.border='1px groove black';
        searchResultsElement.style.marginBottom='20px';
        for (let key in results) {
            let obj = results[key]; 
            displayCocktail(searchResultsElement, key, obj.name, obj.imageUrl); 
        } 
        // Получаем тело страницы и добавляем searchResultsElement в него 
        const bodyElement = document.querySelector('header'); 
        bodyElement.appendChild(searchResultsElement); 
    }
    // Функция для отображения информации о коктейле
    function displayCocktail(searchResultsElement, key, name, imageUrl) { 
        // Создаем элемент для отображения информации о коктейле
        const cocktailElement = document.createElement('div'); 
        cocktailElement.style.width = '350px';
        cocktailElement.style.display = 'flex';
        cocktailElement.style.justifyContent='center';
        cocktailElement.style.paddingTop = '20px';
        cocktailElement.style.paddingBottom = '20px';
        cocktailElement.classList.add('cocktail'); 
        // Создаем элементы для отображения названия и изображения коктейля 
        const nameElement = document.createElement('а'); 
        nameElement.href = '';
        nameElement.textContent = name; 
        nameElement.style.paddingRight = '20px';
        const imageElement = document.createElement('img'); 
        imageElement.style.maxWidth = '200px';
        imageElement.style.maxHeight = '200px';
        imageElement.src = imageUrl; 
        // Добавляем элементы в родительский элемент 
        cocktailElement.appendChild(nameElement);
        cocktailElement.appendChild(imageElement); 
        searchResultsElement.appendChild(cocktailElement);
    } 
    function showNoResults() {
        const noResultsElement = document.createElement('div');
        noResultsElement.id = 'noResults';
        noResultsElement.style.display='flex';
        noResultsElement.style.justifyContent='center';
        noResultsElement.style.paddingBottom='20px';
        noResultsElement.style.fontSize='2rem';
        noResultsElement.style.transform='scale(1)';
        noResultsElement.style.transition='transform 1s ease-in';
        noResultsElement.style.color='#BC2525';
        noResultsElement.textContent = 'Ничего не смогли найти. Повторите пожалуйста, поиск';
        document.querySelector('header').appendChild(noResultsElement);
        setTimeout(showNoResultText, 1000);
        function showNoResultText(){
            noResultsElement.style.transform='scale(0)';
        }
        setTimeout(function() {
            noResultsElement.remove();
        }, 2000);
    }
    // Функция для поиска по названию коктейля 
    function searchCocktailByName(cocktailName) { 
        const promise = getDataFromFirebase(); 
        // Получаем данные из базы данных
        promise.then(data => { 
            const searchResults = {}; 
            // Объект для хранения результатов поиска
            for (let key in data) { 
                let obj = data[key]; 
                // Если название коктейля содержит введенную пользователем строку, добавляем его в результаты
                if (obj.name.toLowerCase().includes(cocktailName.toLowerCase())) {
                    searchResults[key] = obj;
                } 
            } 
            if (Object.keys(searchResults).length === 0){
                showNoResults();
            } else {
            showResults(searchResults); 
            // Отображаем результаты поиска 
            }
        }) 
        .catch(error => { 
            console.error(error);
        }); 
    } 
    // Обработчик события для кнопки поиска 
    document.getElementById('search').addEventListener('click', function() { 
    const searchInput = document.getElementById('search-value'); 
    const cocktailName = searchInput.value.trim(); 
    // Получаем значение из поля ввода 
    if (cocktailName !== '') { 
        searchCocktailByName(cocktailName); 
        searchInput.value='';
        // Выполняем поиск по названию коктейля
        } else {
            showNoResults();
            alert('Введите название коктейля'); 
        } 
    }); 
    // Обработчик события клика на окне
    window.addEventListener('click', function() {
        const searchResultsElement = document.getElementById('searchResults');
        const noResultsElement = document.getElementById('noResults');
        if (searchResultsElement) {
            searchResultsElement.remove();
        }
        if (noResultsElement) {
            noResultsElement.remove();
        }
    });
} 
export { searchCocktailByName };


