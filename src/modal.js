import Swal from 'sweetalert2';

import 'sweetalert2/src/sweetalert2.scss';
// --------------------------------Модальное окно успеха, закрывающееся по таймеру 1---------------------------
// выбиаем кнопку
const btnSuccess1 = document.getElementById('btn-success1');
// вешаем на нее слушатель
btnSuccess1.addEventListener('click', modalSuccess1)

function modalSuccess1() {
    Swal.fire(
        {
            title: 'Вы успешно вошли на сайт',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });
}
export { modalSuccess1 }

// --------------------------------Модальное окно успеха, закрывающееся по таймеру 2---------------------------
// выбиаем кнопку
const btnSuccess2 = document.getElementById('btn-success2');
// вешаем на нее слушатель
btnSuccess2.addEventListener('click', modalSuccess2);
function modalSuccess2() {
    Swal.fire(
        {
            position: "top-end",
            title: 'Коктейль успешно добален в избранное',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });
}
// --------------------------------Модальное окно успеха с кнопкой-ссылкой на другую страницу--------------------------
// выбиаем кнопку
const btnSuccess3 = document.getElementById('btn-success-btn2');
// вешаем на нее слушатель
btnSuccess3.addEventListener('click', modalSuccess3);
function modalSuccess3() {
    Swal.fire(
        {
            title: 'Поздравляем!',
            text: 'Вы успешно зарегистрировались на сайте. Чтобы войти, нажмите кнопку ниже',
            icon: 'success',
            showCloseButton: true,
            // отмена стандартных стилей кнопки
            buttonsStyling: false,
            customClass: {
                confirmButton: 'my-custom-button-class'
            },
            confirmButtonText: `<a class = 'unline-w' href="sign-in-form.html">Войти</a> `
        });
}
// --------------------------------Модальное окно ошибки 1--------------------------
// выбиаем кнопку
const btnEr1 = document.getElementById('btn-error1');
// вешаем на нее слушатель
btnEr1.addEventListener('click', modalError1);
// функция вывода сообщения об ошибке
function modalError1() {
    Swal.fire({
        title: 'Ошибка!',
        text: 'Пользователя с таким адресом email не зарегистрировано',
        icon: 'error',
        showCloseButton: true,
        buttonsStyling: false,
        customClass: {
            confirmButton: 'my-custom-button-class'
        },
        confirmButtonText: 'Попробовать еще раз'
    })
}
// --------------------------------Модальное окно ошибки 2--------------------------
// выбиаем кнопку
const btnEr2 = document.getElementById('btn-error2');
// вешаем на нее слушатель
btnEr2.addEventListener('click', modalError2);
// функция вывода сообщения об ошибке
function modalError2() {
    Swal.fire({
        title: 'Ошибка!',
        text: 'Пароль введен не верно',
        icon: 'error',
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: 'Попробовать еще раз',
        confirmButtonColor: 'gray',
        confirmButtonText: '<a class = "unline-b" onclick="changeEmail()">Сменить пароль</a> ',

        // отмена стандартных стилей кнопки
        buttonsStyling: false,
        customClass: {
            confirmButton: 'akcent',
            cancelButton: 'my-custom-button-class'
        },
        reverseButtons: true
    })
        .then((result) => {
            if (result.isConfirmed) {
                changeEmail(); // Вызов функции при нажатии на кнопку "ОК"
            }
        });

}
// окно с почтой для восстаноления пароля
async function changeEmail() {
    const { value: email } = await Swal.fire({
        title: "Введите email, который вы указывали при регистрации",
        input: "email",
        inputLabel: "На почту вам придет письмо со ссылкой для смены пароля",
        inputPlaceholder: "email",
        showCloseButton: true,
        validationMessage: 'email введен не правильно. Пример: ivanov@yandex.ru',
        buttonsStyling: false,
        showCancelButton: true,
        customClass: {
            confirmButton: 'akcent',
            cancelButton: 'my-custom-button-class'
        }
    });
    if (email) {
        Swal.fire(`Entered email: ${email}`);
    }
}


// --------------------------------Модальное окно инфоррмационное--------------------------
// выбиаем кнопку
const btnInf = document.getElementById('btn-inf');
// вешаем на нее слушатель
btnInf.addEventListener('click', modalInf);
function modalInf() {
    Swal.fire(
        {
            title: 'Внимание',
            text: 'Сайт только для пользователей старше 18 лет',
            icon: 'warning',
            showCloseButton: true,
            showCloseButton: true,
            buttonsStyling: false,
            customClass: {
                confirmButton: 'my-custom-button-class'
            },
            confirmButtonText: `Ок`
        });
}
export { modalInf }

// -----------------универсальное модальное окно------------
// модальные окна
function modal1(title, text, type, textButton) {
    console.log('вызов функции modal1', title, text, type);
    Swal.fire(
        {
            title: title,
            text: text,
            icon: type,
            showCloseButton: true,
            // отмена стандартных стилей кнопки
            buttonsStyling: false,
            customClass: {
                confirmButton: 'my-custom-button-class'
            },
            confirmButtonText: textButton
        });
}

export { modal1 }