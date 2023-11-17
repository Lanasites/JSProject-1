document.getElementById("profile").addEventListener("click", function() {
    let menu = document.getElementsByClassName("user-profile__btn");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });

//Вывод алфавита (букв-ссылок) на страницу
function AddLetters () {
const alphabet = 'абвгдежзиклмнопрстуфхцчшщэюя';
const alphabetDiv = document.getElementById('alphabet');
for (let i = 0; i < alphabet.length; i++) {// Проходимся по каждой букве в алфавите
    let letterLink = document.createElement('a');// Создаем ссылку для каждой буквы
    letterLink.href = '#' + alphabet[i]; // Устанавливаем ссылку для перехода на конкретную букву
    letterLink.innerHTML = alphabet[i].toUpperCase(); // Устанавливаем текст ссылки
    alphabetDiv.appendChild(letterLink);// Добавляем ссылку в блок алфавита
}
alphabetDiv.classList.add("LetterStyle");
};
AddLetters();