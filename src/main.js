import Splide from '@splidejs/splide';
/*document.addEventListener("DOMContentLoaded", function () {
  const agePopup = document.getElementById("age-confirmation-popup");
  const ageInput = document.getElementById("age-input");
  const confirmBtn = document.getElementById("confirm-btn");

  confirmBtn.addEventListener("click", function () {
    const age = parseInt(ageInput.value);

    if (age >= 18) {
      agePopup.style.display = "none";
    } else {
      alert("Вы должны быть старше 18 лет!");
    }
  });
});*/


const mySlider = new Splide('.splide');
mySlider.mount();