
let botonLogout = document.querySelector('.logout');

if (botonLogout != null) {

    botonLogout.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('email');
        location.href = './index.html';
    });
}
