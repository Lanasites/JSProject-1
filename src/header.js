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
// //--переход на страницу личного кабинета--//
// document.getElementById('profile').addEventListener("click", goToPersonalAccount);
// function goToPersonalAccount (){
//     window.location.href = "profile-and-favourites.html";
// }
