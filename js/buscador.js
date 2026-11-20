
let formularioBusqueda = document.querySelector('.header form');
let campoBusqueda = document.querySelector('.header form input');
let errorBusqueda = document.querySelector('.errorBusqueda');

formularioBusqueda.addEventListener('submit', function(event) {
    event.preventDefault();

if (campoBusqueda.value == '') {
        errorBusqueda.innerText = 'El campo de búsqueda es obligatorio';

} else if (campoBusqueda.value.length < 3) {
        errorBusqueda.innerText = 'La búsqueda debe tener al menos 3 caracteres';

    } else {

        errorBusqueda.innerText = '';
        this.submit();

    }

});
