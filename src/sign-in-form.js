// const form = document.forms.formSignIn
// const email = document.querySelector('#email')
// const inputPassword = form.elements.password

import { burgerMenu, goToPageAndChangeLinkStyle, searchCocktailByName } from './header.js';
burgerMenu();
goToPageAndChangeLinkStyle();
searchCocktailByName();

const btnLogin = document.getElementById('btnLogin');
// функция входа пользователя
import { loginEmailPassword } from './authentication.js';

import { monitorAuthState } from './authentication.js'
// монитогин идентификации
monitorAuthState();

btnLogin.addEventListener('click', loginEmailPassword);

// ----------Событие при загрузке страницы для коррекции меню при нажатии на человечка-------------------------------------
// на все страницы с меню надо добавить
import { clickProfileMenu, getMenuForPerson } from './header.js';
document.addEventListener("DOMContentLoaded", getMenuForPerson);
clickProfileMenu();
// ------------------------------------------------------------------------------------------------------------------------