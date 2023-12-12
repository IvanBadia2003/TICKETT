const opcion1 = document.getElementById('opcion1');
const opcion2 = document.getElementById('opcion2');
const menuOpcion1 = document.getElementById('menuOpcion1');
const menuOpcion2 = document.getElementById('menuOpcion2');

function mostrarMenu() {
    if (opcion1.checked) {
        menuOpcion1.style.display = 'block';
        menuOpcion2.style.display = 'none';
    } else if (opcion2.checked) {
        menuOpcion1.style.display = 'none';
        menuOpcion2.style.display = 'block';
    }
}

opcion1.addEventListener('change', mostrarMenu);
opcion2.addEventListener('change', mostrarMenu);

mostrarMenu();
