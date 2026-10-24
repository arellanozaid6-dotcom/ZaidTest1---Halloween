// Esperamos al HTML gracias a «defer» en la etiqueta <script>.
const confirmButton = document.querySelector('#rsvp-button');
const confirmationMessage = document.querySelector('#rsvp-message');

// Esta demostración solo cambia el texto de la página.
// No envía información a un servidor ni guarda datos en el navegador.
confirmButton.addEventListener('click', () => {
  confirmationMessage.hidden = false;
  confirmationMessage.textContent =
    '¡Te esperamos! 🎃 Esta es una demostración: tu asistencia no se ha registrado. La confirmación real estará disponible más adelante.';
});
