// // ------------------------------функция регистрации пользователя в БД--------------------------------------------------
import { registrationEmailPassword } from './authentication.js';

// ----------Событие при загрузке страницы для коррекции меню при нажатии на человечка-------------------------------------
// на все страницы с меню надо добавить
import { clickProfileMenu, getMenuForPerson } from './header.js';
document.addEventListener('DOMContentLoaded', getMenuForPerson);
clickProfileMenu();
// ------------------------------------------------------------------------------------------------------------------------

import { burgerMenu, goToPageAndChangeLinkStyle, searchCocktailByName } from './header.js';
burgerMenu();
goToPageAndChangeLinkStyle();
searchCocktailByName();

const form = document.forms.formRegistration;
const btnLogin = document.getElementById('btnLogin');
// регистрация нового клиента в firebase
btnLogin.addEventListener('click', registrationEmailPassword);

const inputPassword = form.elements.password;
const inputPassword2 = form.elements.passwordRepeat;

//добавление класса ошибки для поля
function formAddError(input) {
    input.classList.add('_error');
}

//удаление класса для ошибки для поля
function formRemoveError(input) {
    input.classList.remove('_error');
}

//=================================================================
// По примеру Ланы:

document.querySelector('.form__submit').onclick = validation;
const error = document.querySelector('#error-empty');
//Динамическая валидация полей при вводе

//email
const inputEmail = document.getElementById('email');
const errorEmail = document.querySelector('#email-error');
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,30}$/i;
inputEmail.oninput = function() {
    let emailValue = inputEmail.value;
    if (emailValue.match(emailPattern) || emailValue == '') {
        errorEmail.classList.add('invisible');
        formRemoveError(inputEmail); //убрать подсветку поля красным
    } else {
        errorEmail.classList.remove('invisible');
        formAddError(inputEmail);
    }
};

//пароль первое поле
//проверка надежности пароля
const error_pwd1 = document.querySelector('#password-error');
const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
inputPassword.oninput = function() {
    let pwdValue = inputPassword.value;
    if (pwdValue.match(pwdPattern) || pwdPattern == '') {
        error_pwd1.classList.add('invisible');
    } else {
        error_pwd1.classList.remove('invisible');
        formAddError(inputPassword);
    }
};

//пароль второе поле
//проверка, что при повторном введении пароля, значения паролей были идентичными
const error_pwd2 = document.querySelector('#passwordRepeat-error');
inputPassword2.oninput = function() {
    console.log('сверка паролей');
    if (inputPassword2.value === inputPassword.value) {
        error_pwd2.classList.add('invisible');
    } else {
        error_pwd2.classList.remove('invisible');
        formAddError(inputPassword2);
    }
};

//функция валидации при нажатии на кнопку
function validation(event) {
    event.preventDefault(event); //отмена события по умолчанию

    //очищение формы от ошибок
    formRemoveEmptyError();

    //валидация email
    validationEmail(inputEmail);

    //валидация пароля
    validationPassword(inputPassword);
    validationPassword(inputPassword2);
}

//Ниже функции валидайции формы при нажатии на кнопку

function formRemoveEmptyError() {
    error.classList.add('invisible'); //убираем сообщение об ошибке, если оно было
}

function validationEmail(input) {
    let validity = input.validity;
    let errorPattern = errorEmail.classList.contains('invisible'); //false, если есть ошибка формата ввода

    if (validity.valueMissing) {
        //значение не введено
        formAddError(input); //подсветить поле красным
        error.classList.remove('invisible'); // показать ошибку, что не все поля заполнены
        return false;
    } else if (errorPattern) {
        //если ошибок ввода нет
        error.classList.add('invisible'); //скрыть ошибку формата ввода
        formRemoveError(input); //убрать красную подсветку поля
        return true;
    } else {
        //подсветить поле с ошибкой
        formAddError(input);
        return false;
    }
}

function validationPassword(input) {
    let validity = input.validity;
    let errorPattern = error_pwd1.classList.contains('invisible'); //false, если есть ошибка формата ввода

    if (validity.valueMissing) {
        //значение не введено
        formAddError(input); //подсветить поле красным
        error.classList.remove('invisible'); // показать ошибку, что не все поля заполнены
        return false;
    } else if (errorPattern) {
        //если ошибок ввода нет
        error.classList.add('invisible'); //скрыть ошибку формата ввода
        formRemoveError(input); //убрать красную подсветку поля
        return true;
    } else {
        //подсветить поле с ошибкой
        formAddError(input);
        return false;
    }
}
