let queryString = location.search
let parametros = new URLSearchParams(queryString);
let id = parametros.get('id');

fetch('https://dummyjson.com/products/' + id)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let titulo = document.querySelector('.Producto h1');
        let imagen = document.querySelector('.imagen_texto img');
        let datos = document.querySelectorAll('.imagen_texto article p');
        let listaTags = document.querySelector('.tags ul');
        let seccionReviews = document.querySelector('.reviews section');

        titulo.innerText = data.title;
        imagen.src = data.thumbnail;

        datos[0].innerText = `Marca: ${data.brand}`;
        datos[1].innerText = data.description;
        datos[2].innerText = `Precio: $${data.price}`;
        datos[3].innerHTML = `Categoría: <a href="./category.html?categoria=${data.category}&url=https://dummyjson.com/products/category/${data.category}">${data.category}</a>`;
        datos[4].innerText = `Stock: ${data.stock} unidades`;

        listaTags.innerHTML = '';

        for (let i = 0; i < data.tags.length && i < 3; i++){

            listaTags.innerHTML += `<li>${data.tags[i]}</li>`;

        }

        seccionReviews.innerHTML = '<h2>Reviews</h2>';

        for (let i = 0; i < data.reviews.length; i++){

            seccionReviews.innerHTML += `
                <article class="review">
                    <p><strong>${data.reviews[i].reviewerName}</strong></p>
                    <p>Rating: ${data.reviews[i].rating}/5</p>
                    <p>${data.reviews[i].date}</p>
                    <p>${data.reviews[i].comment}</p>
                </article>
            `;

        }

    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });
