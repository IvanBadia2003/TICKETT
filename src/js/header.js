const hamburguesa = document.querySelector('.icons__hamburguer');
const menuNavegacion = document.getElementById('navegation');

hamburguesa.addEventListener('click', () => {
    // Verificar si el menú está oculto
    const esOculto = menuNavegacion.classList.contains('mostrando');

    // Alternar las clases según el estado actual del menú
    if (esOculto) {
        menuNavegacion.classList.remove('mostrando');
        menuNavegacion.classList.add('mostrar');
    } else {
        menuNavegacion.classList.remove('mostrar');
        menuNavegacion.classList.add('mostrando');
    }
});

