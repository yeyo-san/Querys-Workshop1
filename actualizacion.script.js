const querysUpdate = [
    { id: 1, title: 'Query 1', description: 'Incrementa la edad de todos los usuarios cuyo país es ‘Canada’ y tienen más de 2 hijos en 2 años.', src: './img/query41.png' },
    { id: 2, title: 'Query 2', description: 'Cambia el estado a ‘inactive’ para todos los usuarios cuyo correo personal no contiene ‘work’ y son mayores de 50 años.', src: './img/query42.png' },
    { id: 3, title: 'Query 3', description: 'Duplica los activos para todos los usuarios cuyo patrimonio es menor que 50000.', src: './img/query43.png' },
    { id: 4, title: 'Query 4', description: 'Cambia la ciudad a ‘Unknown’ para todos los usuarios que no tienen hijos y están inactivos.', src: './img/query44.png' },
    { id: 5, title: 'Query 5', description: 'Actualiza el género a ‘female’ para todos los usuarios cuyo nombre contiene la letra ‘a’ y tienen más de 3 hijos.', src: './img/query45.png' },
    { id: 6, title: 'Query 6', description: 'Incrementa los pasivos en un 20% para todos los usuarios que tienen activos mayores que 100000.', src: './img/query46.png' },
    { id: 7, title: 'Query 7', description: 'Cambia el correo personal a ‘unknown@example.com’ para todos los usuarios cuyo dominio de correo es ‘hotmail.com’.', src: './img/query47.png' },
    { id: 8, title: 'Query 8', description: 'Reduce en 5 años la edad de todos los usuarios cuyo estado es ‘active’ y viven en ‘New York’.', src: './img/query48.png' },
    { id: 9, title: 'Query 9', description: 'Actualiza el patrimonio a 100000 para todos los usuarios cuyo número de hijos es par.', src: './img/query49.png' },
    { id: 10, title: 'Query 10', description: 'Cambia la música favorita a ‘Jazz’ para todos los usuarios que tienen más de 2 hijos y están activos.', src: './img/query50.png' },
    { id: 11, title: 'Query 11', description: 'Incrementa el número de hijos en 1 para todos los usuarios cuyo género es ‘male’ y tienen pasivos menores que 50000.', src: './img/query51.png' },
    { id: 12, title: 'Query 12', description: 'Cambia el estado a ‘active’ para todos los usuarios que tienen un correo electrónico que contiene ‘example’.', src: './img/query52.png' },
    { id: 13, title: 'Query 13', description: 'Actualiza la ciudad a ‘New City’ para todos los usuarios cuyo patrimonio es mayor que 200000 y tienen menos de 3 hijos.', src: './img/query53.png' },
    { id: 14, title: 'Query 14', description: 'Duplica el patrimonio para todos los usuarios cuyo género es ‘female’ y están inactivos.', src: './img/query54.png' },
    { id: 15, title: 'Query 15', description: 'Cambia el país a ‘Unknown’ para todos los usuarios cuya edad es mayor que 70.', src: './img/query55.png' },
    { id: 16, title: 'Query 16', description: 'Incrementa los activos en 50000 para todos los usuarios cuyo nombre empieza con ‘J’ y tienen más de 1 hijo.', src: './img/query56.png' },
    { id: 17, title: 'Query 17', description: 'Cambia el teléfono a ‘000-000-0000’ para todos los usuarios cuyo correo electrónico contiene ‘test’.', src: './img/query57.png' },
    { id: 18, title: 'Query 18', description: 'Reduce los activos a la mitad para todos los usuarios cuyo estado es ‘inactive’ y tienen más de 4 hijos.', src: './img/query58.png' },
    { id: 19, title: 'Query 19', description: 'Cambia la música favorita a ‘Classical’ para todos los usuarios cuya edad es mayor que 60 y viven en ‘USA’.', src: './img/query59.png' },
    { id: 20, title: 'Query 20', description: 'Incrementa el número de hijos en 2 para todos los usuarios cuyo estado es ‘active’ y tienen activos menores que 50000.', src: './img/query60.png' }
];

document.addEventListener('DOMContentLoaded', () =>{
    const $containerUpdate = document.getElementById('containerUpdate')
    
    querysUpdate.map((item) =>{
        $containerUpdate.innerHTML += /*html*/ `
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
