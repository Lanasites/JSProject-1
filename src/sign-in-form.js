// const form = document.forms.formSignIn
// const email = document.querySelector('#email')
// const inputPassword = form.elements.password

const btnLogin = document.getElementById('btnLogin');
// функция входа пользователя
import { loginEmailPassword } from './authentication.js';

import { monitorAuthState } from './authentication.js'
// монитогин идентификации
monitorAuthState();

btnLogin.addEventListener('click', loginEmailPassword);

