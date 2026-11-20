fetch('https://dummyjson.com/products/categories')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let lista = document.querySelector('.categorias ul');

        for (let i = 0; i < data.length; i++){

            lista.innerHTML += `
                <li>
                    <a href="./category.html?categoria=${data[i].name}&url=${data[i].url}">${data[i].name}</a>
                </li>
            `;
        }
    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });