
let email = localStorage.getItem('email');
let navegacion = document.querySelector('.navegacion ul');

if (email != null) {

    navegacion.innerHTML = `
        <li><a href="./index.html">Home</a></li>
        <li>Bienvenido: ${email}</li>
        <li><a href="#" class="logout">Logout</a></li>
    `;

}
