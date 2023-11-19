import { burgerMenu } from './header.js'; 
burgerMenu();

// //Вывод алфавита (букв-ссылок) на страницу
// function addLetters () {
// const alphabet = 'абвгдежзиклмнопрстуфхцчшщэюя';
// const alphabetDiv = document.getElementById('alphabet');
// for (let i = 0; i < alphabet.length; i++) {// Проходимся по каждой букве в алфавите
//     let letterLink = document.createElement('a');// Создаем ссылку для каждой буквы
//     letterLink.href = '#' + alphabet[i]; // Устанавливаем ссылку для перехода на конкретную букву
//     letterLink.innerHTML = alphabet[i].toUpperCase(); // Устанавливаем текст ссылки
//     alphabetDiv.appendChild(letterLink);// Добавляем ссылку в блок алфавита
// }
// alphabetDiv.classList.add("letterStyle");
// };
// addLetters();

//-- Форма Настройки --//
const changeLoginCheckbox = document.querySelector('#set-new-log');
const changePasswordCheckbox = document.querySelector('#set-new-passw');
const passwordInput = document.getElementById('change-password');
const passwordConfirmInput = document.getElementById('change-password-confirm');

// Обработчик события изменения состояния первого чекбокса
changeLoginCheckbox.addEventListener('change', function() {
if (changeLoginCheckbox.checked) { 
    passwordInput.placeholder = 'Логин';
    passwordConfirmInput.placeholder = 'Повторите логин';
    changePasswordCheckbox.disabled = true;
} else {
    passwordInput.placeholder = 'Пароль';
    passwordConfirmInput.placeholder = 'Повторите пароль';
    changePasswordCheckbox.disabled = false;
}
});
// Обработчик события изменения состояния второго чекбокса
changePasswordCheckbox.addEventListener('change', function() {
if (changePasswordCheckbox.checked) {
    changeLoginCheckbox.disabled = true;
} else {
    changeLoginCheckbox.disabled = false;
}
});