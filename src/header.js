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
// if (window.location.href.indexOf('profile-and-favourites.html') === -1) {
//     profileButton.addEventListener('click', function(event) { // Обработчик для всех страниц, кроме «profile-and-favourites»
//         window.location.href = "sign-in-form.html"; // Перенаправление на страницу личного кабинета на формы входа/регистрации
//         //window.location.href = "sign-in-form.html"/"profile-and-favourites.html"
//     });
// } else {
//     profileButton.addEventListener('click', function(event) {  // Обработчик только для страницы «profile-and-favourites»
//         let profileMenu = document.getElementById("profile-menu");
//         event.preventDefault(); // Отменить поведение по умолчанию для клика
//         if (profileMenu.style.display === "block") {
//             profileMenu.style.display = "none";
//         } else {
//             profileMenu.style.display = "block";
//         }
//     });
//   };

//--переход на страницу избранного--//
document.getElementById('star').addEventListener("click", goToFavoutitesPage);
function goToFavoutitesPage() {
    window.location.href = "favourites.html";
}

//--переход на главную страницу по клику на лого--//
const logotype = document.getElementById('logotype');
logotype.addEventListener('click', function () {
    window.location.href = 'index.html';
});

// Функция, подгружающая нужное меню второго уровня 
// в случае авторизованного пользователя выводит меню при нажатии на человечка "email, настройки, выход"
// в случае авторизованного пользователя выводит меню при нажатии на человечка "вход, регистрация"
import { getCookie, exitProfile } from './authentication.js'
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

