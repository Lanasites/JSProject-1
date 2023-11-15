
const form = document.forms.formRegistration
const allInputs = document.querySelectorAll('input')

const inputPassword = form.elements.password
const inputPassword2 = form.elements.passwordRepeat

let errors = [];


form.addEventListener('submit', function (event) {
    event.preventDefault();
    errors = [];
    formValidate();
});


function formValidate() {
    let requiredInputs = document.querySelectorAll('._req');
    let values = [];

    //валидация каждого обязательного поля и коллекционирование значений этих полей в массив value
    for (let input of requiredInputs) {
        checkValidity(input);
        values.push(getInputName(input) + ': ' + input.value);
    }

    checkPasswords();

    //если форма проходит проверку валидности(нет ошибок), то форма очищается
    if (errors.length == 0) {
        form.reset();
    }
}



function checkValidity(input) {
    let validity = input.validity;
    let isValid = true

    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения');
        isValid = false
    }

    else if (validity.typeMismatch) {
        errors.push('Значение не соответствует заданному типу поля');
        isValid = false
    }

    else if (validity.rangeOverflow) {
        errors.push('Значение превосходит максимально допустимое');
        isValid = false
    }

    else if (validity.rangeUnderflow) {
        errors.push('Значение меньше минимально допустимого');
        isValid = false
    }

    else if (validity.stepMismatch) {
        errors.push('Недопустимое значение в соответствии с шагом');
        isValid = false
    }

    else if (validity.tooLong) {
        errors.push('Значение слишком длинное');
        isValid = false
    }

    else if (validity.tooShort) {
        errors.push('Значение слишком короткое');
        isValid = false
    }

    else if (validity.valueMissing) {
        errors.push('Необходимо заполнить поле');
        isValid = false
    }

    if (isValid === false) {
        formAddError(input)
        addErrorText(input)
    } else {
        formRemoveError(input)
        removeErrorText(input)
    }
}


function getInputName(input) {
    return input.getAttribute('name');
}

//добавление текста ошибки для каждого поля
function addErrorText(input) {
    let inputName = getInputName(input);
    document.getElementById(`${inputName}-error`).innerHTML = input.validationMessage;
}

//удаление текста ошибки для каждого поля
function removeErrorText(input) {
    let inputName = getInputName(input);
    document.getElementById(`${inputName}-error`).innerHTML = '';
}

//добавление класса ошибки для поля
function formAddError(input) {
    input.classList.add('_error');
}

//удаление класса для ошибки для поля
function formRemoveError(input) {
    input.classList.remove('_error');
}

//проверка, что при повторном введении пароля, значения паролей были идентичными
function checkPasswords() {
    if (inputPassword2.value !== inputPassword.value) {
        formAddError(inputPassword2);
        document.getElementById(`passwordRepeat-error`).innerHTML = 'Пароли не совпадают.';
        errors.push('Пароли не совпадают.');
    }
}
