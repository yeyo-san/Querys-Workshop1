const querys =[
    {id: 1, title: 'Query 1', description: 'Selecciona todos los usuarios cuyo nombre contiene la letra "a".', src:'./img/query.png' },
    { id: 2, title: 'Query 2', description: 'Selecciona todos los usuarios cuyo apellido empieza con ‘S’.', src: './img/query2.png' },
    { id: 3, title: 'Query 3', description: 'Selecciona todos los usuarios cuyo correo electrónico personal termina en ‘gmail.com’.', src: './img/query3.png' },
    { id: 4, title: 'Query 4', description: 'Selecciona los nombres y correos electrónicos de todos los usuarios ordenados alfabéticamente por nombre.', src: './img/query4.png' },
    { id: 5, title: 'Query 5', description: 'Selecciona los usuarios ordenados por su edad de forma descendente.', src: './img/query5.png' },
    { id: 6, title: 'Query 6', description: 'Selecciona los primeros 10 usuarios ordenados por su fecha de creación.', src: './img/query6.png' },
    { id: 7, title: 'Query 7', description: 'Selecciona los últimos 5 usuarios ordenados por su fecha de actualización.', src: './img/query7.png' },
    { id: 8, title: 'Query 8', description: 'Selecciona los usuarios que tienen entre 2 y 4 hijos.', src: './img/query8.png' },
    { id: 9, title: 'Query 9', description: 'Selecciona los usuarios cuyo país no es ‘USA’.', src: './img/query9.png' },
    { id: 10, title: 'Query 10', description: 'Selecciona los usuarios cuyo patrimonio es mayor que 100000.', src: './img/query10.png' },
    { id: 11, title: 'Query 11', description: 'Selecciona los usuarios con el género ‘female’ y estado ‘active’.', src: './img/query11.png' },
    { id: 12, title: 'Query 12', description: 'Selecciona los usuarios con correos electrónicos personales que contienen ‘work’.', src: './img/query12.png' },
    { id: 13, title: 'Query 13', description: 'Selecciona los usuarios cuya ciudad empieza con ‘M’.', src: './img/query13.png' },
    { id: 14, title: 'Query 14', description: 'Selecciona el usuario más joven.', src: './img/query14.png' },
    { id: 15, title: 'Query 15', description: 'Selecciona el usuario más viejo.', src: './img/query15.png' },
    { id: 16, title: 'Query 16', description: 'Selecciona el usuario con el patrimonio más alto.', src: './img/query16.png' },
    { id: 17, title: 'Query 17', description: 'Selecciona el usuario con el patrimonio más bajo.', src: './img/query17.png' },
    { id: 18, title: 'Query 18', description: 'Selecciona el usuario con más hijos.', src: './img/query18.png' },
    { id: 19, title: 'Query 19', description: 'Selecciona el usuario con menos hijos.', src: './img/query19.png' },
    { id: 20, title: 'Query 20', description: 'Selecciona el número total de usuarios.', src: './img/query20.png' },
    { id: 21, title: 'Query 21', description: 'Selecciona el número total de usuarios activos.', src: './img/query21.png' },
    { id: 22, title: 'Query 22', description: 'Selecciona el número total de usuarios inactivos.', src: './img/query22.png' },
    { id: 23, title: 'Query 23', description: 'Selecciona el promedio de edad de todos los usuarios.', src: './img/query23.png' },
    { id: 24, title: 'Query 24', description: 'Selecciona el promedio de patrimonio de todos los usuarios.', src: './img/query24.png' },
    { id: 25, title: 'Query 25', description: 'Selecciona el total de activos de todos los usuarios.', src: './img/query25.png' },
    { id: 26, title: 'Query 26', description: 'Selecciona el total de pasivos de todos los usuarios.', src: './img/query26.png' },
    { id: 27, title: 'Query 27', description: 'Selecciona los usuarios agrupados por país y cuenta cuántos usuarios hay en cada país.', src: './img/query27.png' },
    { id: 28, title: 'Query 28', description: 'Selecciona los usuarios agrupados por ciudad y cuenta cuántos usuarios hay en cada ciudad.', src: './img/query28.png' },
    { id: 29, title: 'Query 29', description: 'Selecciona el número total de usuarios cuya música favorita es ‘Rock’.', src: './img/query29.png' },
    { id: 30, title: 'Query 30', description: 'Selecciona el número total de usuarios cuyo género es ‘male’ y están activos.', src: './img/query30.png' },
    { id: 31, title: 'Query 31', description: 'Selecciona los usuarios ordenados por su número de hijos en forma ascendente.', src: './img/query31.png' },
    { id: 32, title: 'Query 32', description: 'Selecciona los usuarios ordenados por su patrimonio en forma descendente.', src: './img/query32.png' },
    { id: 33, title: 'Query 33', description: 'Selecciona los usuarios cuyo nombre o apellido contiene la letra ‘e’.', src: './img/query33.png' },
    { id: 34, title: 'Query 34', description: 'Selecciona el usuario cuyo nombre es ‘Alice’ y su género es ‘female’.', src: './img/query34.png' },
    { id: 35, title: 'Query 35', description: 'Selecciona los usuarios que tienen más de 2 hijos y menos de 5.', src: './img/query35.png' },
    { id: 36, title: 'Query 36', description: 'Selecciona los usuarios cuyo correo electrónico personal no contiene ‘gmail.com’.', src: './img/query36.png' },
    { id: 37, title: 'Query 37', description: 'Selecciona los usuarios cuyo número de teléfono empieza con ‘555’.', src: './img/query37.png' },
    { id: 38, title: 'Query 38', description: 'Selecciona los usuarios que fueron creados en el último mes.', src: './img/query38.png' },
    { id: 39, title: 'Query 39', description: 'Selecciona los usuarios cuya edad es múltiplo de 5.', src: './img/query39.png' },
    { id: 40, title: 'Query 40', description: 'Selecciona los usuarios agrupados por estado y calcula el promedio de patrimonio en cada grupo.', src: './img/query40.png' }
] 

document.addEventListener('DOMContentLoaded', () =>{
    const $containerQuerys = document.getElementById('containerQuerys')
    
    querys.map((item) =>{
        $containerQuerys.innerHTML += /*html*/ `
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