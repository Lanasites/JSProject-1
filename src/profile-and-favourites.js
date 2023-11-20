import { burgerMenu } from './header.js'; 
burgerMenu();

import { monitorAuthState } from './authentication.js';
monitorAuthState();


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


let form = document.getElementById("settings-form");
document.getElementById("set-form").addEventListener("click", function(event) {
  event.preventDefault(); // Отменить стандартное поведение ссылки
        if (form.style.display === "flex") {
          form.style.display = "none";
        } else {
          form.style.display = "flex";
        }
  
  
});


document.addEventListener('DOMContentLoaded', function() {
  // Получаем значение email из URL
  let email = getParameterByName('email');
  
  // Устанавливаем значение email в поле в форме настройки
  document.getElementById('profile-email').value = email;
});

// // Функция для получения значения параметра из URL
// function getParameterByName(name) {
//   name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//   let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//   let results = regex.exec(location.search);
//   return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
// }



// Обработчик события нажатия на кнопку "Сменить пароль"
let changePasswordButton = document.getElementById("changePasswordButton");
if (changePasswordButton) {
  changePasswordButton.addEventListener("click", function() {
    let email = profileEmailInput.value;

    // Отправка данных для смены пароля


    // Вместо alert можно использовать модальное окно??
    alert("Информация о смене пароля отправлена на email: " + email);
  });
}

// Обработчик события нажатия на кнопку "Сохранить"
let saveButton = document.getElementById("saveButton");
if (saveButton) {
  saveButton.addEventListener("click", function() {
    let fullNameInput = document.getElementById("fullName");
    let phoneInput = document.getElementById("phone");

    // Получение данных из полей ввода
    let fullName = fullNameInput.value;
    let phone = phoneInput.value;

    // Сохранение данных в cookies/local storage 
    // Вместо alert можно использовать модальное??
    alert("Изменения сохранены успешно:\n" + "ФИО: " + fullName + "\nТелефон: " + phone);
  });
}