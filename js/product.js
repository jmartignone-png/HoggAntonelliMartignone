let queryString = location.search;
let parametros = new URLSearchParams(queryString);
let id = parametros.get('id');
fetch('https://dummyjson.com/products/' + id)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let titulo = document.querySelector('.Producto h1');
        let imagenTexto = document.querySelector('.imagen_texto');
        let listaTags = document.querySelector('.tags ul');
        let seccionReviews = document.querySelector('.reviews section');

        titulo.innerText = data.title;
        imagenTexto.innerHTML = `
            <img src="${data.images[0]}" alt="producto">
            <article>
                <p>Marca: ${data.brand}</p>
                <p>${data.description}</p>
                <p>Precio: $${data.price}</p>
                <p>Categoría: <a href="./category.html?categoria=${data.category}&url=https://dummyjson.com/products/category/${data.category}">${data.category}</a></p>
                <p>Stock: ${data.stock} unidades</p>
            </article>
        `;





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
