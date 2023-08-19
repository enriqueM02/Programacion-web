document.addEventListener("DOMContentLoaded", function () {
    const saludoBtn = document.getElementById("saludoBtn");
    const mensaje = document.getElementById("mensaje");

    saludoBtn.addEventListener("click", function () {
        mensaje.textContent = "¡Hola! Gracias por interactuar.";
    });
});
