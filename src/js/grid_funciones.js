// Obtener los elementos de los radio buttons y los menús
const iconFilter = document.getElementById('iconFilter');
const close = document.getElementById('close');
const filtros = document.getElementById('sidebar');

// Función para mostrar el menú correspondiente a la opción seleccionada
function mostrarFiltros() {
    if (filtros.style.display === 'block') {
        filtros.style.display = 'none';
    } else {
        filtros.style.display = 'block';
    }
}
// Función para cerrar el menú correspondiente a la opción seleccionada
function cerrarFiltros() {
    if (filtros.style.display === 'none') {
        filtros.style.display = 'block';
    } else {
        filtros.style.display = 'none';
    }
}

// Event listener para detectar cambios en los radio buttons
iconFilter.addEventListener('click', mostrarFiltros);
close.addEventListener('click', cerrarFiltros);


