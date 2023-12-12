const hamburguesa = document.querySelector('.icons__hamburguer');
const menuNavegacion = document.getElementById('navegation');

hamburguesa.addEventListener('click', () => {

    const esOculto = menuNavegacion.classList.contains('mostrando');


    if (esOculto) {
        menuNavegacion.classList.remove('mostrando');
        menuNavegacion.classList.add('mostrar');
    } else {
        menuNavegacion.classList.remove('mostrar');
        menuNavegacion.classList.add('mostrando');
    }
});

