import { initializeApp } from "firebase/app";
import Swal from 'sweetalert2';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9NxHk9mUmNACk8EFBrFi1_kuCyyWKCEU",
    authDomain: "js-project-1-49be0.firebaseapp.com",
    databaseURL: "https://js-project-1-49be0-default-rtdb.firebaseio.com",
    projectId: "js-project-1-49be0",
    storageBucket: "js-project-1-49be0.appspot.com",
    messagingSenderId: "580525730958",
    appId: "1:580525730958:web:47489777447b08c50b2ddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// ----------------------------------------------Регистрация новых пользователей---------------------------------------------------

async function registrationEmailPassword() {
    const elemEmail = document.getElementById('email');
    const elemPassword = document.getElementById('password');
    // const btnLogin = document.getElementById('btnLogin');

    const txtEmail = elemEmail.value;
    const txtPassword = elemPassword.value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, txtEmail, txtPassword);
        const user = userCredential.user;
        console.log('Создался пользователь', user);
        modal1('Поздравляем!', 'Вы успешно зарегистрировались на сайте', 'success', 'Ок');
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Подробнее об ошибке: ', errorCode, errorMessage);
        if (error.message.indexOf('email-already-in-use') > 0)
            modal1('Внимание!', 'Пользователь с таким email уже зарегистрирован. Перейдите на вкладку ВОЙТИ или нажмите на кнопку ниже', 'warning', `<a class = 'unline-w' href="sign-in-form.html">Войти</a> `);
    };

}
// btnLogin.addEventListener('click', loginEmailPassword);
export { registrationEmailPassword };

// ------------------------------------------------------Вход существующих пользователей---------------------------------------------------------
async function loginEmailPassword() {
    console.log("Вызов функции входа в ЛК");

    const elemEmail = document.getElementById('email');
    const elemPassword = document.getElementById('password');

    const txtEmail = elemEmail.value;
    const txtPassword = elemPassword.value;
    console.log(txtEmail, txtPassword);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, txtEmail, txtPassword);
        console.log(userCredential);
        const user = userCredential.user;
        console.log('Пользователь авторизовался на сайте', user);
        modalSuccess1();
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Подробнее об ошибке: ', errorCode, errorMessage);
        if (error.message.indexOf('auth/invalid-email') > 0) {
            modal1('Внимание!', 'Пользователя с таким email не существует. Если вы ранее не регистрироваоись, выберите вкладку РЕГИСТРАЦИЯ или нажмите на кнопку ниже', 'warning', `<a class = 'unline-w' href="reg-form.html">Зарегистрироваться</a> `);
        }
        if (error.message.indexOf('auth/invalid-login-credentials') > 0)
            modalError2();
    };

}
// btnLogin.addEventListener('click', loginEmailPassword);
export { loginEmailPassword };

// ----------------------------Установите наблюдателя состояния аутентификации и получите пользовательские данные--------------------------

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            const email = user.email;
            const uid = user.uid;
            console.log(email, uid);
            // тут можно сделать так, чтобы при нажатии на человечка показывался email была возможность выйти
            // сслыка при попытке добавить избранное не работает и выдвет сообщение о том, что эта функция работает только для зарегистрированных пользователей
        } else {
            // тут можно сделать так, чтобы при нажатии на человечка показывалось окно с выбором входа или регистрации
            // ссылка при нажатии на звезду в меню работает
            // ссылка при нажатии на звезду в коктеле тоже работает и выдает сообщение о том, что коктейль добавтлся в избранное
        }
    })
}
export { monitorAuthState };

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
function modalSuccess1() {
    Swal.fire(
        {
            title: 'Вы успешно вошли на сайт',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });
}

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
        Swal.fire(`Вы ввели: ${email}`);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                console.log('письмо было отправлено на ', email);
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
}

