const contenedorCards = document.getElementById("contenedor_cards");
const inputBuscar = document.getElementById("buscar");

let modelosFiltrados = [];

// Cargar datos desde el archivo JSON
fetch("modelos.json")
    .then(res => res.json())
    .then(modelos => {
        modelosFiltrados = modelos;
        crearTarjetas(modelosFiltrados);
    })
    .catch(error => console.error("Error al cargar los datos:", error));

function crearTarjetas(modelos) {
    contenedorCards.innerHTML = "";  // Limpiar tarjetas previas

    for (const modelo of modelos) {
        const tarjetaHTML = `
        <div class="card">
            <img src="${modelo.imagen}" alt="${modelo.nombre}">
            <p><b>${modelo.nombre}</b></p>
            <p>${modelo.pais}</p>
            <a class="btn btn-danger" href="./bibliografia.html?id=${modelo.id}">Ver más</a>
        </div>
        `;
        contenedorCards.innerHTML += tarjetaHTML;
    }
}


inputBuscar.addEventListener('input', () => {
    const textoBusqueda = inputBuscar.value.toLowerCase();
    const resultadosFiltrados = modelosFiltrados.filter(modelo =>
        modelo.nombre.toLowerCase().includes(textoBusqueda) ||
        modelo.pais.toLowerCase().includes(textoBusqueda)
    );

    if (resultadosFiltrados.length === 0) {
        contenedorCards.innerHTML = "<h2>Sin Resultados</h2>";
    } else {
        crearTarjetas(resultadosFiltrados);
    }
});
