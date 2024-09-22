// Selecciona todos los enlaces del menú
const menuLinks = document.querySelectorAll('.nav a');

// Agrega un evento de clic a cada enlace
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Evita el comportamiento predeterminado del enlace
    e.preventDefault();

    // Selecciona el elemento que se va a desplazar
    const target = document.querySelector(link.getAttribute('href'));

    // Desplaza la página suavemente a la sección correspondiente
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});