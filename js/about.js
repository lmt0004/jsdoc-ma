/**
 * Función que maneja el evento de clic en la imagen para cambiar a la siguiente imagen.
 * El índice se actualiza para mostrar la siguiente imagen en la lista.
 */
const handleImageClick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
};

/**
 * Función que se ejecuta cuando el DOM ha sido completamente cargado.
 * Crea una galería de imágenes y establece un comportamiento de clic para cambiar entre ellas.
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Lista de rutas de imágenes para la galería.
     * @type {string[]}
     */
    const images = [
        './images/imagen1.png',
        './images/imagen2.jpg',
        './images/imagen3.png'
    ];

    /**
     * Índice actual de la imagen que se está mostrando.
     * @type {number}
     */
    let currentIndex = 0;

    // Crea un elemento de imagen y establece la primera imagen de la lista como fuente
    const imageElement = document.createElement('img');
    imageElement.src = images[currentIndex];

    // Agrega la imagen al elemento con la clase 'content'
    document.querySelector('.content').appendChild(imageElement);

    // Registra el manejador de eventos para el clic en la imagen
    imageElement.addEventListener('click', handleImageClick);
});
