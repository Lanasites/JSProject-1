import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";

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
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Подробнее об ошибке: ', errorCode, errorMessage);
        if (error.message.indexOf('email-already-in-use') > 0)
            alert('Пользователь с таким email уже зарегистрирован. Перейдите на вкладку "Войти"');
    };

}
// btnLogin.addEventListener('click', loginEmailPassword);
export { registrationEmailPassword };


async function loginEmailPassword() {
    console.log("Вызов функции входа в ЛК");
    // const elemEmail = document.getElementById('email');
    // const elemPassword = document.getElementById('password');
    // // const btnLogin = document.getElementById('btnLogin');

    // const txtEmail = elemEmail.value;
    // const txtPassword = elemPassword.value;

    // try {
    //     const userCredential = await signInWithEmailAndPassword(auth, txtEmail, txtPassword);
    //     console.log(userCredential);
    //     // const user = userCredential.user;
    //     // console.log('Создался пользователь', user);
    // }
    // catch (error) {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.error('Подробнее об ошибке: ', errorCode, errorMessage);
    // };

}
// btnLogin.addEventListener('click', loginEmailPassword);
export { loginEmailPassword };

// const auth = getAuth();
// ----------------------------------------------Регистрация новых пользователей---------------------------------------------------
// Когда пользователь заполняет форму, проверьте адрес электронной почты и пароль, предоставленные пользователем, 
// а затем передайте их методу createUserWithEmailAndPassword
// createUserWithEmailAndPassword(auth, txtEmail, txtPassword)
//     .then((userCredential) => {
//         // Signed up
//         const user = userCredential.user;
//         console.log('Создался пользователь', user);
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error('!!!!!!!!!', errorCode, errorMessage);
//         // ..
//     });
// console.log(userCredential.user);



// ------------------------------------------------------Войти существующих пользователей---------------------------------------------------------
// Когда пользователь заполнит форму, вызовите метод signInWithEmailAndPassword
// signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log(user);
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });

// ----------------------------Установите наблюдателя состояния аутентификации и получите пользовательские данные--------------------------
// Прикрепите наблюдателя с помощью метода onAuthStateChanged . Когда пользователь успешно входит в систему, вы можете получить информацию о пользователе в наблюдателе.

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const uid = user.uid;
//         console.log(uid);
//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
// });