const querysDelete = [
    { id: 1, title: 'Query 61', description: 'Elimina todos los usuarios que tienen más de 3 hijos y cuyo patrimonio es menor que 100000.', src: './img/query61.png' },
    { id: 2, title: 'Query 62', description: 'Elimina todos los usuarios cuyo correo personal contiene ‘spam’ y tienen más de 50 años.', src: './img/query62.png' },
    { id: 3, title: 'Query 63', description: 'Elimina todos los usuarios que no tienen activos pero tienen pasivos mayores que 0.', src: './img/query63.png' },
    { id: 4, title: 'Query 64', description: 'Elimina todos los usuarios que están inactivos y cuyo nombre o apellido contiene la letra ‘z’.', src: './img/query64.png' },
    { id: 5, title: 'Query 65', description: 'Elimina todos los usuarios cuyo número de teléfono contiene la secuencia ‘123’ y tienen más de 2 hijos.', src: './img/query65.png' },
    { id: 6, title: 'Query 66', description: 'Elimina todos los usuarios que viven en ‘Unknown’ y cuyo estado es ‘inactive’.', src: './img/query66.png' },
    { id: 7, title: 'Query 67', description: 'Elimina todos los usuarios que fueron creados antes del año 2000 y cuyo país es ‘USA’.', src: './img/query67.png' },
    { id: 8, title: 'Query 68', description: 'Elimina todos los usuarios cuyo patrimonio es negativo y tienen el estado ‘active’.', src: './img/query68.png' },
    { id: 9, title: 'Query 69', description: 'Elimina todos los usuarios cuyo correo electrónico termina en ‘example.com’ y tienen activos mayores que 50000.', src: './img/query69.png' },
    { id: 10, title: 'Query 70', description: 'Elimina todos los usuarios que tienen más de 5 hijos y cuyo correo personal no contiene ‘family’.', src: './img/query70.png' }
];

document.addEventListener('DOMContentLoaded', () =>{
    const $containerDelete = document.getElementById('containerDelete')
    
    querys.map((item) =>{
        $containerDelete.innerHTML += /*html*/ `
            <div key=${item.id} class='card'>
                <img src=${item.src} alt="Query">

                <h3>${item.title}</h3>

                <p>${item.description}</p>
                <button onclick="openModal('${item.src}')">Ver imagen</button>
            </div>
        `
    })
})


function openModal(src){
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('imgModal');
    modal.style.display = "block";
    modalImg.src = src;

    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}