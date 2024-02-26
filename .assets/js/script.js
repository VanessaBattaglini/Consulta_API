
let button = document.querySelector('button');
const urlApi = 'https://jsonplaceholder.typicode.com/posts';
let ul = document.getElementById('post-data');

//Lamamos al evento de click para mostrar datos

button.addEventListener('click', function () {
    getPosts()
});

//Creamos una función para llamar los datos de la API a consultar
let getPosts = async () => {
    try {
    const respuesta = await fetch(urlApi);
    const data = await respuesta.json();
    mostrarDatos(data);
    } catch (e) {
    console.log(e)
    };
};

//Iteramos la lista por cada linea para editar y mostrar datos
function mostrarDatos(data) {
    let mostrarData = "";
    data.forEach((post) => {
    mostrarData += `
            <li><span><b>${post.title}</b></span><span>${post.body}</span></li>
            `;
    });

    ul.innerHTML = mostrarData;
}