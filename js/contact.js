/**
 * Función que maneja el envío del formulario de contacto.
 * @param {Event} e - El evento de envío del formulario.
 */
const handleFormSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la página

    // Obtiene los valores del formulario
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    /**
     * Verifica si el nombre y el mensaje no están vacíos.
     * Si ambos campos tienen contenido, muestra un agradecimiento y resetea el formulario.
     * Si alguno de los campos está vacío, muestra un mensaje de error.
     */
    if (name.trim() !== '' && message.trim() !== '') {
        alert(`¡Gracias por tu mensaje, ${name}!`);
        contactForm.reset(); // Resetea el formulario después del envío
    } else {
        alert('Por favor, completa todos los campos.');
    }
};

/**
 * Función que se ejecuta cuando el DOM ha sido completamente cargado.
 * Registra un manejador de eventos para el formulario de contacto.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el formulario de contacto por su ID
    const contactForm = document.getElementById('contactForm');

    // Registra el manejador de eventos para el envío del formulario
    contactForm.addEventListener('submit', handleFormSubmit);
});
