//Комментарий для контрольного задания 12 (работа с ветками)

//Еще один комментарий
//И еще один

window.onload = function () {
    let inputs = document.getElementsByClassName('form__base-input');

    let fullNameInput = document.getElementById('full-name-input');
    let usernameInput = document.getElementById('username-input');
    let emailInput = document.getElementById('email-input');
    let passwordInput = document.getElementById('password-input');
    let repeatPasswordInput = document.getElementById('repeat-password-input');

    fullNameInput.onkeydown = (e) => {
        let number = parseInt(e.key);
        if (!isNaN(number)) {
            return false;
        }
    }

    usernameInput.onkeydown = (e) => {
        if (e.key === ',' || e.key === '.') {
            return false;
        }
    }

    let checkbox = document.getElementById('checkbox');
    checkbox.onchange = (e) => {
        e.target.checked ? console.log('Согласен') : console.log('Не согласен');
    }

    let form = document.getElementById('form');
    let formSubmitButton = document.getElementById('form-submit-button');
    let popup = document.getElementById('popup');

    function handleSubmit(e) {
        e.preventDefault();

        for (let i = 0; i < inputs.length; i++) {
            const errorMessage = 'Заполните поле ' + inputs[i].parentElement.innerText;
            if (!inputs[i].value) {
                alert(errorMessage);
                return;
            }
        }

        if (passwordInput.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            return;
        }

        if (formSubmitButton.innerText === 'Sign Up') {
            if (passwordInput.value !== repeatPasswordInput.value) {
                alert('Пароли не совпадают');
                return;
            }
        }

        if (!checkbox.checked) {
            alert('Необходимо согласиться с Условиями обслуживания и Положением о конфиденциальности');
            return;
        }

        if (formSubmitButton.innerText === 'Sign Up') {
            popup.classList.add('popup_open');
        } else {
            alert('Добро пожаловать, ' + usernameInput.value + '!');
        }

    }

    form.addEventListener('submit', handleSubmit);

    let isAlreadyAccountButton = document.getElementById('is-already-account-button');

    function goToSignin() {
        form.reset();

        document.getElementById('main-title').innerText = 'Log in to the system';

        fullNameInput.parentElement.remove();
        emailInput.parentElement.remove();
        repeatPasswordInput.parentElement.remove();
        checkbox.parentElement.remove();


        formSubmitButton.innerText = 'Sign In';

        isAlreadyAccountButton.remove();

        popup.classList.remove('popup_open');
    }

    document.getElementById('popup-submit-button').onclick = () => {
        goToSignin();
    };

    isAlreadyAccountButton.onclick = () => {
        goToSignin();
    };

}
