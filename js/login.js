let formularioLogin = document.querySelector('.formulario form');
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#password');
let error = document.querySelector('.error');

formularioLogin.addEventListener('submit', function(e) {

    if (campoEmail.value == '') {
        e.preventDefault();
        error.innerText = 'El campo email es obligatorio';
    } else if (campoPassword.value == '') {
        e.preventDefault();
        error.innerText = 'El campo contraseña es obligatorio';
    } else if (campoPassword.value.length < 6) {
        e.preventDefault();
        error.innerText = 'La contraseña debe tener al menos 6 caracteres';
    } else {
        localStorage.setItem('email', campoEmail.value);
    }

});