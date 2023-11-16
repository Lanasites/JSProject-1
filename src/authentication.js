import { initializeApp } from "firebase/app";
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
        alert('Вы успешно зареристрировались! Для входа войдите по ссылке');
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Подробнее об ошибке: ', errorCode, errorMessage);
        if (error.message.indexOf('email-already-in-use') > 0)
            alert('Пользователь с таким email уже зарегистрирован. Перейдите на вкладку ВОЙТИ');
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
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Подробнее об ошибке: ', errorCode, errorMessage);
        if (error.message.indexOf('auth/invalid-email') > 0)
            alert('Пользователя с таким email не существует. Если вы ранее не регистрироваоись, выберите вкладку РЕГИСТРАЦИЯ');
        if (error.message.indexOf('auth/invalid-login-credentials') > 0)
            alert('Пароль введет не верно!');
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
