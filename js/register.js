let formulario = document.querySelector('.formulario form');
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#password');
let campoRepeatPassword = document.querySelector('#repeatPassword');
let error = document.querySelector('.error');

formulario.addEventListener('submit', function(event) {
     event.preventDefault();
     if (campoEmail.value == '') {
        error.innerText = 'El campo email es obligatorio';

    } else if (campoPassword.value == '') {

        error.innerText = 'El campo contraseña es obligatorio';

    } else if (campoPassword.value.length < 6) {

        error.innerText = 'La contraseña debe tener al menos 6 caracteres';

    } else if (campoPassword.value != campoRepeatPassword.value) {

        error.innerText = 'Las contraseñas no coinciden';

    } else {

        error.innerText = '';
        this.submit();

    }
});
