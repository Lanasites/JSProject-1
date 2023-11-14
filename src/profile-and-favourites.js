//Вывод алфавита (букв-ссылок) на страницу
const alphabet = 'абвгдежзиклмнопрстуфхцчшщэюя';
const alphabetDiv = document.getElementById('alphabet');

for (let i = 0; i < alphabet.length; i++) {// Проходимся по каждой букве в алфавите
    let letterLink = document.createElement('a');// Создаем ссылку для каждой буквы
    letterLink.href = '#' + alphabet[i]; // Устанавливаем якорь для перехода на конкретную букву
    letterLink.textContent = alphabet[i]; // Устанавливаем текст ссылки
    alphabetDiv.appendChild(letterLink);// Добавляем ссылку в блок алфавита
}