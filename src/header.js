//Добавление навигации бургер-меню
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
    // Получаем текущий путь страницы
    let path = window.location.pathname;
    // Извлекаем имя файла из пути
    let page = path.split("/").pop();
    // Получаем список всех пунктов меню
    let menuItems = document.querySelectorAll(".headline__nav-item");
    // Проходим по каждому пункту меню и проверяем, является ли ссылка активной
    menuItems.forEach(function (item) {
        let link = item.querySelector("a");
        // Если ссылка на страницу соответствует текущей странице, устанавливаем класс "active"
        if (link.getAttribute("href") === page) {
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
        alert('Авторизуйтесь!');
    }
}

// Вызов мониторинга состояния авторизации при загрузке страницы
window.addEventListener("load", () => {
    monitorAuthState();
});