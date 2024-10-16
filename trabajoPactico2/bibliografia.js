fetch("modelos.json")
    .then(res => res.json())
    .then(modelos => {
        crearInfo(modelos);
    })
    .catch(error => console.error("Error al cargar los datos:", error));

function crearInfo(modelos) {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    
    const modeloBuscado = modelos.find(modelo => modelo.id == id);
    const contenedor = document.getElementById("modelo_info");

    if (modeloBuscado) {
        contenedor.innerHTML = `
            <div class="column">
                <h2>${modeloBuscado.nombre}</h2>
                <img src="${modeloBuscado.imagen}" alt="${modeloBuscado.nombre}">
            </div>
            <div class="column">
                <h3>Edad: ${modeloBuscado.edad} años</h3>
                <h3>Altura: ${modeloBuscado.altura}</h3>
                <h3>Medidas: ${modeloBuscado.medidas}</h3>
                <p>${modeloBuscado.biografia}</p>
            </div>`;
    } else {
        contenedor.innerHTML = `<p>Modelo no encontrada</p>`;
    }
}
