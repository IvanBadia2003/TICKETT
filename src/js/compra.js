// Obtener los elementos de los radio buttons y los menús
const opcion1 = document.getElementById('opcion1');
const opcion2 = document.getElementById('opcion2');
const menuOpcion1 = document.getElementById('menuOpcion1');
const menuOpcion2 = document.getElementById('menuOpcion2');

// Función para mostrar el menú correspondiente a la opción seleccionada
function mostrarMenu() {
    if (opcion1.checked) {
        menuOpcion1.style.display = 'block';
        menuOpcion2.style.display = 'none';
    } else if (opcion2.checked) {
        menuOpcion1.style.display = 'none';
        menuOpcion2.style.display = 'block';
    }
}

// Event listener para detectar cambios en los radio buttons
opcion1.addEventListener('change', mostrarMenu);
opcion2.addEventListener('change', mostrarMenu);

// Mostrar el menú inicial dependiendo del radio button seleccionado al cargar la página
mostrarMenu();
