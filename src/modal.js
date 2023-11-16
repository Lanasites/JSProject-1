import Swal from 'sweetalert2';

import 'sweetalert2/src/sweetalert2.scss';

Swal.fire(
    {
        title: 'Custom Button Style',
        text: 'This is a custom button style',
        icon: 'success',
        confirmButtonClass: 'my-custom-button-class',
        confirmButtonText: 'Custom Button'
    });

// // выбиаем кнопку
// const btnEr = document.getElementById('btn-error')
// // вешаем на нее слушатель
// btnEr.addEventListener('click', modalError)
// // функция вывода сообщения об ошибке
// function modalError() {
//     Swal.fire({
//         title: 'Error!',
//         text: 'Do you want to continue',
//         icon: 'error',
//         confirmButtonText: 'Cool'
//     })
// }

