//Добавление навигации бургер-меню
function burgerMenu (){
let menuBtn = document.querySelector('.burger-menu__btn');
let menu = document.querySelector('.header-block__bm-list');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});
}

export { burgerMenu };

//Переходы с кнопок
// --переход на формы входа/регистрации перед входом в личный кабинет--//
let profileButton = document.getElementById("profile"); // Проверка URL и применение соответствующих обработчиков событий
if (window.location.href.indexOf('profile-and-favourites.html') === -1) {
    profileButton.addEventListener('click', function(event) { // Обработчик для всех страниц, кроме «profile-and-favourites»
        window.location.href = "sign-in-form.html"; // Перенаправление на страницу личного кабинета на формы входа/регистрации
        //window.location.href = "sign-in-form.html"/"profile-and-favourites.html"
    });


    // Создается кнопка "Временная кнопка для прямого перехода в ЛК"
    let tempButton = document.createElement('button');
    tempButton.textContent = 'Временная кнопка для прямого перехода в ЛК';
    tempButton.style.backgroundColor = "green";
    tempButton.style.color = "white";
    // Устанвливается событие - переход на страницу ЛК при клике на временную кнопку
    tempButton.addEventListener('click', function() {
      window.location.href ="profile-and-favourites.html";
    });
    // добавляем кнопку в body
   let body = document.querySelector('body');
    // Вставляем кнопку в боковую часть элемента
    body.insertAdjacentElement('afterBegin', tempButton);


} else {
    profileButton.addEventListener('click', function(event) {  // Обработчик только для страницы «profile-and-favourites»
        let profileMenu = document.getElementById("profile-menu");
        event.preventDefault(); // Отменить поведение по умолчанию для клика
        if (profileMenu.style.display === "block") {
            profileMenu.style.display = "none";
        } else {
            profileMenu.style.display = "block";
        }
    });
  };

//--переход на страницу избранного--//
document.getElementById('star').addEventListener("click", goToFavoutitesPage);
function goToFavoutitesPage (){
    window.location.href = "favourites.html";
}

//--переход на главную страницу по клику на лого--//
const logotype = document.getElementById('logotype');
logotype.addEventListener('click', function() {
  window.location.href = 'index.html';
});


