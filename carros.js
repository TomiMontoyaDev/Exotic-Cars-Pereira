const carros = [
  /* CARRO 1 */
  {
    nombre: "Mazda MX5 (Primera Generacion)",
    imagen: "./Carrosfotos/Carros Pagina/Mazda MX5 red/mx5red.jpg",
  },
  /* FIN CARRO 1 */

  /* CARRO 2 */
  {
    nombre: "Ford Mustang GT 50 Years Edition",
    imagen: "./Carrosfotos/Carros Pagina/Mustang GT Black/MustangGT50.jpg",
  },
  /* FIN CARRO 2 */

  /* CARRO 3 */
  {
    nombre: "Mazda MX5 NC (Tercera Generacion)",
    imagen: "./Carrosfotos/Carros Pagina/Mazda MX5 black/IMG_4107.jpg",
  },
  /* FIN CARRO 3 */

  /* CARRO 4 */
  {
    nombre: "Porsche Cayenne",
    imagen: "./Carrosfotos/Carros Pagina/Porsche cayenne/Cayenne.jpg",
  },
  /* FIN CARRO 4 */

  /* CARRO 5 */
  {
    nombre: "Chevrolet Corvette C8",
    imagen: "./Carrosfotos/Carros Pagina/Corvette/Corvette.jpg",
  },
  /* FIN CARRO 5 */

  /* CARRO 6 */
  {
    nombre: "Volkswagen Jetta GLI",
    imagen: "./Carrosfotos/Carros Pagina/Jetta/Jetta.jpg",
  },
  /* FIN CARRO 6 */

  /* CARRO 7 */
  {
    nombre: "Mazda MX5 Blue (Primera Generacion)",
    imagen: "./Carrosfotos/Carros Pagina/MX5 blue/Mx5Blue.jpg",
  },
  /* FIN CARRO 7 */
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
