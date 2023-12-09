// Obtén todas las butacas con la clase 'butaca'
const butacas = document.querySelectorAll('.butaca');

// Array para almacenar butacas seleccionadas
let butacasSeleccionadas = [];

// Función para mostrar las butacas seleccionadas
function mostrarButacasSeleccionadas() {
  const butacasMostradas = document.getElementById('butacasSeleccionadas');
  butacasMostradas.textContent = `Butacas seleccionadas: ${butacasSeleccionadas.join(', ')}`;
}

// Itera sobre todas las butacas y agrega el event listener para el clic
butacas.forEach(function(butaca) {
  butaca.addEventListener('click', function() {
    // Verifica si la butaca tiene la clase 'libre'
    const esLibre = this.classList.contains('libre');

    // Obtiene el número de ID de la butaca clicada
    const numID = this.id.replace(/[^\d]/g, ''); // Extrae solo los dígitos del ID

    // Si es libre, cambia a ocupada; si está ocupada, cambia a libre
    if (esLibre) {
      this.classList.remove('libre');
      this.classList.add('seleccionada');
      butacasSeleccionadas.push(numID); // Almacena el número de ID de la butaca seleccionada
    } else {
      this.classList.remove('seleccionada');
      this.classList.add('libre');
      const index = butacasSeleccionadas.indexOf(numID);
      if (index > -1) {
        butacasSeleccionadas.splice(index, 1); // Elimina el número de ID de las seleccionadas
      }
    }

    // Muestra los números de ID de las butacas seleccionadas
    mostrarButacasSeleccionadas();
  });
});



// Event listener para el botón de pago
const botonPago = document.getElementById('botonPago');
botonPago.addEventListener('click', function() {
  // Obtén las butacas seleccionadas
  const butacasSeleccionadas = obtenerButacasSeleccionadas();

  // Almacena las butacas seleccionadas en sessionStorage
  sessionStorage.setItem('butacasSeleccionadas', JSON.stringify(butacasSeleccionadas));

  // Redirecciona a la página de la pasarela de pago
  window.location.href = 'compra.html'; // Reemplaza con la ruta de tu página de la pasarela de pago
});

// Función para obtener las butacas seleccionadas
function obtenerButacasSeleccionadas() {
  const butacasSeleccionadas = [];
  const butacas = document.querySelectorAll('.butaca.seleccionada'); // Selecciona las butacas ocupadas

  butacas.forEach(function(butaca) {
    const numID = butaca.id.replace(/[^\d]/g, ''); // Extrae solo los dígitos del ID
    butacasSeleccionadas.push(numID); // Agrega el número de ID al array de butacas seleccionadas
  });

  return butacasSeleccionadas;
}
