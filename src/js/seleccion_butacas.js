// Obtén todas las butacas con la clase 'butaca'
const butacas = document.querySelectorAll('.butaca');

// Array para almacenar butacas seleccionadas
let butacasSeleccionadas = [];

// Función para mostrar las butacas seleccionadas
function mostrarButacasSeleccionadas() {
  const butacasMostradas = document.getElementById('butacasSeleccionadas');
  butacasMostradas.textContent = `Butacas seleccionadas: ${butacasSeleccionadas.join(', ')}`;
}





// Event listener para el botón de pago
const botonPago = document.getElementById('botonPago');
botonPago.addEventListener('click', function () {
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

  butacas.forEach(function (butaca) {
    const numID = butaca.id.replace(/[^\d]/g, ''); // Extrae solo los dígitos del ID
    butacasSeleccionadas.push(numID); // Agrega el número de ID al array de butacas seleccionadas
  });

  return butacasSeleccionadas;
}




document.addEventListener('DOMContentLoaded', () => {
  // Obtener el ID de la función desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const funcionId = urlParams.get('id');

  if (funcionId) {
    // Aquí deberías realizar una solicitud (fetch) a tu fuente de datos para obtener los detalles de la función utilizando el funcionId
    // Ejemplo:
    const url = `http://localhost:3000/obras/${funcionId}`; // URL de la API para obtener detalles de la función por su ID

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(funcion => {
        // Aquí puedes usar los detalles de la función obtenidos para actualizar tu página seleccion_butacas.html
        // Por ejemplo, puedes actualizar el título y la hora de la función en la página
        document.querySelector('.title h3').textContent = funcion.titulo;
        document.querySelector('.hour h3').textContent = `Hora: ${funcion.horaObra}`;
        document.querySelector('.info__img img').src = funcion.imagenObra;

        funcion.butacas.forEach(butaca => {
          const elementoButaca = document.getElementById(butaca.id);
          if (elementoButaca) {
            elementoButaca.classList.add(butaca.estado);
          }
        });




      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));


    // Suponiendo que ya tienes la función para hacer peticiones a tu API (por ejemplo, utilizando Fetch)



    butacas.forEach(function (butaca) {
      butaca.addEventListener('click', function () {
        const esLibre = this.classList.contains('libre');
        const butacaId = this.id;
  
        const urlActualizar = `http://localhost:3000/obras/${funcionId}/butacas/${butacaId}`; // Reemplaza '1' con el ID de la obra correspondiente
        const newData = { estado: esLibre ? 'ocupada' : 'libre' }; // Cambia el estado dependiendo del estado actual
  
        fetch(urlActualizar, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        })
  
          .then(response => {
            if (response.ok) {
              if (esLibre) {
                this.classList.remove('libre');
                this.classList.add('seleccionada');
                // Aquí podrías realizar más acciones si la butaca cambia de estado
              } else {
                this.classList.remove('seleccionada');
                this.classList.add('libre');
                // Aquí podrías realizar más acciones si la butaca cambia de estado
              }
              
              const index = butacasSeleccionadas.indexOf(numID);
              if (index > -1) {
                butacasSeleccionadas.splice(index, 1); // Elimina el número de ID de las seleccionadas
              }
            }

            // Muestra los números de ID de las butacas seleccionadas
            mostrarButacasSeleccionadas();
          });
      });
      console.log(`cambiado con exito`);
    })
      .catch(error => {
        // Maneja errores aquí
      });

  } else {
    console.error('No se encontró el ID de la función en la URL');
  }
});



