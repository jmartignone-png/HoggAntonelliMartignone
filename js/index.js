
fetch('https://dummyjson.com/products/category/sports-accessories')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let seccion = document.querySelector('.masvendidos');

        for (let i = 0; i < 10; i++){

            seccion.innerHTML += `
                <article>
                    <h3>${data.products[i].title}</h3>
                    <img src="${data.products[i].images[0]}" alt="producto">
                    <h4>$${data.products[i].price}</h4>
                    <p>${data.products[i].description}</p>
                    <a href="./product.html?id=${data.products[i].id}">VER DETALLE</a>
                </article>
            `;

        }

    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });


fetch('https://dummyjson.com/products/category/mobile-accessories')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let seccion = document.querySelector('.catalogo');

        for (let i = 0; i < 10; i++){

            seccion.innerHTML += `
                <article>
                    <h3>${data.products[i].title}</h3>
                    <img src="${data.products[i].images[0]}" alt="producto">
                    <h4>$${data.products[i].price}</h4>
                    <p>${data.products[i].description}</p>
                    <a href="./product.html?id=${data.products[i].id}">VER DETALLE</a>
                </article>
            `;

        }

    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });
