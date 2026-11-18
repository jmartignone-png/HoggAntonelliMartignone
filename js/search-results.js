
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get('busqueda');

let termino = document.querySelector('.terminoBuscado');
let resultados = document.querySelector('.resultados');
let sinResultados = document.querySelector('.sinResultados');

termino.innerText = 'Resultados de búsqueda para: ' + busqueda;

sinResultados.style.display = 'none';

fetch('https://dummyjson.com/products/search?q=' + busqueda)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        if (data.products.length == 0) {

            sinResultados.innerText = 'No hay resultados para el término: ' + busqueda;
            sinResultados.style.display = 'block';

        } else {

            for (let i = 0; i < data.products.length; i++) {

                resultados.innerHTML += `
                    <article>
                        <h2>${data.products[i].title}</h2>
                        <img src="${data.products[i].thumbnail}" alt="producto">
                        <p>$${data.products[i].price}</p>
                        <a href="./product.html?id=${data.products[i].id}">Ver detalle</a>
                    </article>
                `;

            }

        }

    })
    .catch(function(error) {
        console.log('El error es: ' + error);
    });
