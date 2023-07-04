function validation() {
    if (validationName()&&validatePassword()&&submitForm()) {
        return true;
    }
    return false;
}


function validationName() {
    var userName = document.regForm.username.value;
    if (userName.trim().length <= 1) {
        alert("Incorrect User Name");
        document.regForm.username.focus();
        return false;
    }
    return true;
}

function validatePassword() {
    const minLength = 8; // Минимальная длина пароля

    var pwd1 = document.regForm.pwd1.value;
    var pwd2 = document.regForm.pwd2.value;

    if (pwd1.length < minLength) {
        alert("Пароль должен содержать не менее " + minLength + " символов.");
        document.regForm.pwd1.value.focus();
        return false;
    }

    if (pwd1 !== pwd2) {
        alert("Пароли не совпадают.");
        document.regForm.pwd2.value.focus();
        return false;
    }
    // Дополнительные правила для проверки пароля
    // Можно добавить свои требования, например, проверку наличия заглавных букв, цифр, спецсимволов и т.д.

    // Пароль прошел все проверки
    return true;
}
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function submitForm() {
    // Получение значения email из поля ввода
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    // Проверка на корректность email
    if (validateEmail(email)) {
        alert('Email верный!');
    } else {
        alert('Email некорректный!');
    }
}