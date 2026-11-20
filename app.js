
// ======================================
// INTERACCIÓN DE LA PÁGINA
// ======================================

// Obtener los elementos HTML
const botonComenzar = document.getElementById("botonComenzar");
const inicio = document.getElementById("inicio");
const mensaje = document.getElementById("mensaje");

// ======================================
// MOSTRAR EL MENSAJE ESPECIAL
// ======================================

botonComenzar.addEventListener("click", function () {

    // Ocultar la bienvenida
    inicio.style.display = "none";

    // Mostrar la carta
    mensaje.hidden = false;

    // Volver al inicio de la página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
