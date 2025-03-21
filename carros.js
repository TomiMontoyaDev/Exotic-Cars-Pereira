const carros = [
  {
    nombre: "Mazda MX5 (Primera Generacion)",
    imagen: "./Carrosfotos/Carros Pagina/Mazda MX5 red/mx5red.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedorCarros");

  carros.forEach((carro) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    card.innerHTML = `
        <div class="card h-100 bg-dark mb-3 border-light">
          <img src="${carro.imagen}" class="card-img-top" alt="${
      carro.nombre
    }" />
          <div class="card-body">
            <h5 class="card-title text-white">${carro.nombre}</h5>
            <a href="especificaciones.html?carro=${encodeURIComponent(
              carro.nombre
            )}" 
               class="btn btn-primary" target="_blank">Acerca Del Carro</a>
          </div>
        </div>
      `;

    contenedor.prepend(card);
  });
});
