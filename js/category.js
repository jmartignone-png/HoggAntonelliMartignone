let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get('categoria');

let titulo = document.querySelector('.contenidoPrincipal h1');
titulo.innerText = categoria;

fetch('https://dummyjson.com/products/category/' + categoria + '?limit=0')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let seccion = document.querySelector('.productosCategoria');

        for (let i = 0; i < data.products.length; i++){

            seccion.innerHTML += `
                <article>
                    <h2>${data.products[i].title}</h2>
                    <img src="${data.products[i].thumbnail}" alt="producto">
                    <h3>$${data.products[i].price}</h3>
                    <p>${data.products[i].description}</p>
                    <a href="./product.html?id=${data.products[i].id}">VER DETALLE</a>
                </article>
            `;

        }

    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });
