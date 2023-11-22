import { burgerMenu, getMenuForPerson, goToPageAndChangeLinkStyle, searchCocktailByName } from './header.js';

burgerMenu();
goToPageAndChangeLinkStyle();
// ----------Событие при загрузке страницы для коррекции меню при нажатии на человечка-------------------------------------
// на все страницы с меню надо добавить
document.addEventListener('DOMContentLoaded', getMenuForPerson);
import { clickProfileMenu } from './header.js';
clickProfileMenu();
// ------------------------------------------------------------------------------------------------------------------------

// Обработчик события нажатия на кнопку "Сменить пароль"
let changePasswordButton = document.getElementById('changePasswordButton');
// if (changePasswordButton) {
changePasswordButton.addEventListener('click', function() {
    changeEmail();
});
// }

// Обработчик события нажатия на кнопку "Сохранить"
let saveButton = document.getElementById('saveButton');
if (saveButton) {
    saveButton.addEventListener('click', function() {
        let fullNameInput = document.getElementById('fullName');
        let phoneInput = document.getElementById('phone');

        // Получение данных из полей ввода
        let fullName = fullNameInput.value;
        let phone = phoneInput.value;

        // Сохранение данных в cookies/local storage
        // Вместо alert можно использовать модальное??
        alert('Изменения сохранены успешно:\n' + 'ФИО: ' + fullName + '\nТелефон: ' + phone);
    });
}
