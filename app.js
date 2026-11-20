
document.addEventListener("DOMContentLoaded", function () {

    const botonComenzar = document.getElementById("botonComenzar");
    const inicio = document.getElementById("inicio");
    const mensaje = document.getElementById("mensaje");

    // Verificar que los elementos existan
    if (!botonComenzar || !inicio || !mensaje) {
        console.error("No se encontraron los elementos de la página.");
        return;
    }

    // Acción del botón
    botonComenzar.addEventListener("click", function () {

        inicio.hidden = true;
        mensaje.hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
