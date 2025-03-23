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
    imagen: "./Carrosfotos/Carros Pagina/Mustang GT black/MustangGT50.jpg",
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

  /* CARRO 8 */
  {
    nombre: "Chevrolet Camaro SS",
    imagen: "./Carrosfotos/Carros Pagina/Camaro SS YELLOW/Camaroyellow.jpg",
  },
  /* FIN CARRO 8 */

  /* CARRO 9 */
  {
    nombre: "BMW 125i Coupe",
    imagen: "./Carrosfotos/Carros Pagina/BMW 125i Coupe/IMG_4919.jpg",
  },
  /* FIN CARRO 9 */

  /* CARRO 10 */
  {
    nombre: "Mercedes Benz A200",
    imagen: "./Carrosfotos/Carros Pagina/Mercedes A200/IMG_6361.jpg",
  },
  /* FIN CARRO 10 */

  /* CARRO 11 */
  {
    nombre: "BMW 320i F30",
    imagen: "./Carrosfotos/Carros Pagina/BMW 320i F30/IMG_9474.jpg",
  },
  /* FIN CARRO 11 */

  /* CARRO 12 */
  {
    nombre: "BMW 420i F33 Cabriolet",
    imagen: "./Carrosfotos/Carros Pagina/BMW420i/IMG_9502.jpg",
  },
  /* FIN CARRO 12 */

  /* CARRO 13 */
  {
    nombre: "BMW 420i F36 Grand Coupe",
    imagen: "./Carrosfotos/Carros Pagina/BMW 420i F36/IMG_0942.jpg",
  },
  /* FIN CARRO 13 */

  /* CARRO 14 */
  {
    nombre: "Porsche Taycan S",
    imagen: "./Carrosfotos/Carros Pagina/PorscheTaycan/taycan.jpg",
  },
  /* FIN CARRO 14 */

  /* CARRO 15 */
  {
    nombre: "BMW M4 Competition",
    imagen: "./Carrosfotos/Carros Pagina/BMW M4/m4.jpg",
  },
  /* FIN CARRO 15 */

  /* CARRO 16 */
  {
    nombre: "Tesla Model S",
    imagen: "./Carrosfotos/Carros Pagina/TeslaModelS/TeslaModelS.jpg",
  },
  /* FIN CARRO 16 */

  /* CARRO 17 */
  {
    nombre: "Mercedes Benz C180",
    imagen: "./Carrosfotos/Carros Pagina/Mercedes C180/IMG_1074.jpg",
  },
  /* FIN CARRO 17 */

  /* CARRO 18 */
  {
    nombre: "Ford Mustang GT",
    imagen: "./Carrosfotos/Carros Pagina/MustangGTgray/MustangGTgray.jpg",
  },
  /* FIN CARRO 18 */

  /* CARRO 19 */
  {
    nombre: "BMW X6",
    imagen: "./Carrosfotos/Carros Pagina/BMW X6/IMG_1266.jpg",
  },
  /* FIN CARRO 19 */

  /* CARRO 20 */
  {
    nombre: "Ford Bronco Raptor WildTrak",
    imagen: "./Carrosfotos/Carros Pagina/BroncoBlack/IMG_1655.jpg",
  },
  /* FIN CARRO 20 */

  /* CARRO 21 */
  {
    nombre: "Chevrolet Camaro SS (Police Tuning)",
    imagen: "./Carrosfotos/Carros Pagina/Camaro Tombo/IMG_1768.jpg",
  },
  /* FIN CARRO 21 */

  /* CARRO 22 */
  {
    nombre: "BMW Z4",
    imagen: "./Carrosfotos/Carros Pagina/BMWZ4/IMG_1791.jpg",
  },
  /* FIN CARRO 22 */

  /* CARRO 23 */
  {
    nombre: "Ford Mustang GT (Wrap)",
    imagen:
      "./Carrosfotos/Carros Pagina/MustangGTWrap/DB8579AE-7BC0-4087-BAED-BDFC4F5D2879.jpg",
  },
  /* FIN CARRO 23 */
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedorCarros");

  carros.forEach((carro) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");

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
